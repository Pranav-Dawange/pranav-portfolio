import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse/trackpad), never on touchscreens
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    root.classList.add('cursor-ok');

    const cur = curRef.current;
    const ring = ringRef.current;
    const txt = txtRef.current;
    if (!cur || !ring || !txt) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let labeled = false;
    let isDown = false;
    let isHoveringInteractive = false;
    let animFrameId: number;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      mx = e.clientX;
      my = e.clientY;
      root.classList.add('cursor-on');

      cur.style.transform = `translate3d(${mx}px, ${my}px, 0)`;

      // Safely resolve element under cursor (guards against window/document target)
      const el: HTMLElement | null = (e.target && typeof (e.target as any).closest === 'function')
        ? (e.target as HTMLElement)
        : (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null);

      // Do not show custom cursor over inputs, textareas, or modal dialogs
      if (el?.closest && el.closest('input, textarea, select, .modal-content, [contenteditable="true"]')) {
        root.classList.remove('cursor-on');
        return;
      }

      const cursorTarget = el?.closest ? (el.closest('[data-cursor]') as HTMLElement | null) : null;
      const label = cursorTarget?.dataset.cursor;

      if (label) {
        if (txt.textContent !== label) txt.textContent = label;
        labeled = true;
        ring.classList.add('label');
      } else {
        labeled = false;
        ring.classList.remove('label');
      }

      isHoveringInteractive = !!(el?.closest && el.closest('a, button, [role="button"], .project-card, .chip, [data-cursor]'));
      cur.classList.toggle('hot', isHoveringInteractive);
    };

    const handleMouseLeaveDoc = () => {
      root.classList.remove('cursor-on');
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      isDown = true;
      cur.classList.add('down');

      // Click burst particle effect (respects prefers-reduced-motion)
      if (!prefersReducedMotion) {
        const burst = document.createElement('div');
        burst.className = 'cursor-burst';
        burst.style.left = `${e.clientX}px`;
        burst.style.top = `${e.clientY}px`;
        for (let i = 0; i < 8; i++) {
          const span = document.createElement('span');
          span.style.setProperty('--a', `${i * 45}deg`);
          burst.appendChild(span);
        }
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 650);
      }
    };

    const handlePointerUp = () => {
      isDown = false;
      cur.classList.remove('down');
    };

    // Smooth physics loop for lagging ring
    const renderLoop = () => {
      const tx = labeled ? mx + 20 : mx - 17;
      const ty = labeled ? my + 24 : my - 17;
      const k = prefersReducedMotion ? 1 : 0.22;
      rx += (tx - rx) * k;
      ry += (ty - ry) * k;
      ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0)`;
      animFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveDoc);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    animFrameId = requestAnimationFrame(renderLoop);

    return () => {
      root.classList.remove('cursor-ok', 'cursor-on');
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeaveDoc);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <>
      <div id="ring" ref={ringRef} aria-hidden="true">
        <span id="ringTxt" ref={txtRef}></span>
      </div>
      <div id="cur" ref={curRef} aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <path
            className="cur-sh"
            d="M5 3v21.5l5.8-5.4 4 8.6 4.2-1.9-4-8.4 7.9-.6z"
            transform="translate(2, 2)"
          />
          <path
            className="cur-ar"
            d="M5 3v21.5l5.8-5.4 4 8.6 4.2-1.9-4-8.4 7.9-.6z"
          />
        </svg>
      </div>
    </>
  );
};
