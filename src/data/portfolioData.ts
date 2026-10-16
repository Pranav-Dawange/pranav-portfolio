import { Project, EducationItem, AchievementItem, OpenSourceItem, CertificationItem, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Pranav Dawange',
  role: 'Data Science · AI/ML · Software Development',
  institution: 'B.Tech CSE (Data Science) · VIT Pune',
  bio: `I am an engineering student and developer at Vishwakarma Institute of Technology (VIT) Pune, specializing in Computer Science and Engineering with a focus on Data Science. My work bridges deep learning, computer vision, geospatial intelligence, and robust backend engineering. From authoring a published patent to contributing to foundational libraries like scikit-learn, I build intelligent systems with explainability and tangible impact.`,
  email: 'pranavdawange03@gmail.com',
  phone: '+91 7020917160',
  location: 'Pune, Maharashtra, India',
  social: {
    github: 'https://github.com/Pranav-Dawange',
    linkedin: 'https://www.linkedin.com/in/pranav-dawange-935961329/',
  },
  interests: [
    'Data Science',
    'AI & Machine Learning',
    'Computer Vision & Explainable AI',
    'Geospatial Analytics',
    'Full-Stack Architecture'
  ]
};

export const projectsData: Project[] = [
  {
    id: 'skin-lesion-ai',
    title: 'Skin Lesion AI Analysis Platform',
    category: 'AI / Computer Vision',
    subtitle: 'Full-Stack Dermatological Screening Prototype with Explainable AI',
    description: 'A full-stack dermatological screening research prototype combining computer vision with explainable AI to assist preliminary triage without clinical diagnostic claims.',
    bulletPoints: [
      'Engineered a full-stack screening prototype with a JWT-authenticated FastAPI backend, MongoDB/GridFS storage, and a React frontend.',
      'Fine-tuned a ResNet50 convolutional neural network on the HAM10000 dataset for multiclass lesion classification.',
      'Implemented Grad-CAM (Gradient-weighted Class Activation Mapping) from scratch to visually highlight model attention regions.',
      'Constructed a concurrent async pipeline (asyncio) orchestrating classification, Grad-CAM generation, and GrabCut-based lesion contour segmentation.',
      'Integrated a metadata-driven risk-scoring prototype using a scikit-learn Random Forest classifier combining demographic indicators.'
    ],
    techStack: ['React 19', 'FastAPI', 'PyTorch', 'ResNet50', 'Grad-CAM', 'OpenCV', 'scikit-learn', 'MongoDB'],
    repoUrl: 'https://github.com/Pranav-Dawange/EDI-2',
    featured: true,
    badge: 'Computer Vision & XAI'
  },
  {
    id: 'road-complaint-system',
    title: 'Road Complaint Management System',
    category: 'Full-Stack & Systems',
    subtitle: 'Civic Grievance Platform with Haversine Dispatch & Real-Time Analytics',
    description: 'A role-based civic grievance platform connecting citizens with municipal authorities, featuring automated geospatial field worker dispatch and audit logging.',
    bulletPoints: [
      'Built a role-based civic complaint platform featuring citizen, officer, and administrator portals with JWT authentication.',
      'Implemented Haversine-based geospatial dispatch algorithms to match reported potholes and road hazards with nearest available workers.',
      'Engineered PostgreSQL triggers, stored procedures, and views for automated immutable audit logging and ward-level resolution analytics.',
      'Integrated background email notifications and on-demand PDF report generation via FastAPI BackgroundTasks.'
    ],
    techStack: ['FastAPI', 'PostgreSQL', 'Supabase', 'MongoDB', 'JWT Auth', 'Pydantic', 'Bootstrap 5', 'Geospatial Math'],
    repoUrl: 'https://github.com/Pranav-Dawange/road-complaint-system',
    featured: true,
    badge: 'Geospatial & Systems'
  },
  {
    id: 'prescription-ai',
    title: 'AI Prescription Drug Interaction Detector',
    category: 'AI / Computer Vision',
    subtitle: 'Microservice Healthcare Platform for Prescription OCR & Safety Analysis',
    description: 'A microservice-based healthcare AI platform analyzing handwritten and printed prescriptions to extract medications and evaluate contraindications.',
    bulletPoints: [
      'Designed a microservice architecture uniting FastAPI, Node.js, Express.js, and Next.js for high-throughput prescription analysis.',
      'Trained a custom YOLOv8 object detection model combined with EasyOCR and OpenCV image preprocessing to segment prescription fields.',
      'Developed a clinical indicator risk-scoring algorithm with fuzzy drug name normalization and multi-drug interaction matrix analysis.',
      'Engineered asynchronous REST APIs with JWT security and MongoDB persistence to streamline pharmacy verification workflows.'
    ],
    techStack: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'Next.js', 'YOLOv8', 'EasyOCR', 'OpenCV', 'MongoDB'],
    featured: true,
    badge: 'Microservices & OCR'
  },
  {
    id: 'agrosage-ai',
    title: 'AgroSage AI+',
    category: 'Data Science & ML',
    subtitle: 'Smart Farming Advisory & Soil Sensor Integration Prototype',
    description: 'A precision agriculture advisory platform integrating environmental telemetry, crop suitability predictions, and fertilizer dosage guidance.',
    bulletPoints: [
      'Aggregated live and historical soil telemetry (NPK values, moisture, pH, temperature) to generate actionable agricultural insights.',
      'Implemented machine learning models for crop selection and customized fertilizer dosage recommendations based on soil profiles.',
      'Distinguished implemented ML inference workflows from simulated sensor fallback modes for testing in network-constrained environments.',
      'Designed responsive dashboard views for regional agronomists and local farmers.'
    ],
    techStack: ['Python', 'scikit-learn', 'FastAPI', 'Pandas', 'NumPy', 'Sensor APIs', 'Data Visualization'],
    repoUrl: 'https://github.com/Pranav-Dawange/AgroSage_AI_Plus',
    featured: false,
    badge: 'Smart Agriculture'
  },
  {
    id: 'transport-demand-predictor',
    title: 'Transport Demand Predictor',
    category: 'Data Science & ML',
    subtitle: 'Transit Ridership Forecasting via Ensemble Learning',
    description: 'An interactive machine learning application providing demand forecasts for public transit planning using feature-engineered Random Forest regression.',
    bulletPoints: [
      'Developed an interactive Streamlit analytics interface allowing planners to test varying scheduling and weather scenarios.',
      'Trained a Random Forest regressor with cross-validation to capture non-linear temporal trends, holidays, and weather effects.',
      'Generated feature importance visualizations to help understand ridership demand drivers during peak transit windows.'
    ],
    techStack: ['Python', 'Streamlit', 'scikit-learn', 'Random Forest', 'Pandas', 'Matplotlib'],
    repoUrl: 'https://github.com/Pranav-Dawange/transport-predictor-app',
    featured: false,
    badge: 'Time-Series & Regressors'
  },
  {
    id: 'urbanlens-ai',
    title: 'UrbanLensAI',
    category: 'AI / Computer Vision',
    subtitle: 'Satellite Imagery Analytics & Urban Change Detection',
    description: 'Case study exploring multi-temporal satellite and aerial imagery processing to detect infrastructure development, land use transitions, and canopy reduction.',
    bulletPoints: [
      'Researched deep learning architectures for semantic segmentation of multispectral satellite imagery.',
      'Investigated change-detection methodologies comparing multi-temporal orthophotos for urban expansion tracking.',
      'Explored geospatial tiling pipelines for efficient processing of large GeoTIFF rasters.',
      'Repository status: Core codebase is a private research initiative and not publicly hosted.'
    ],
    techStack: ['Python', 'PyTorch', 'Remote Sensing', 'GDAL / Rasterio', 'Computer Vision'],
    isPrivate: true,
    featured: false,
    badge: 'Private Case Study'
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering (Data Science)',
    institution: 'Vishwakarma Institute of Technology (VIT), Pune',
    duration: '2024 – 2028',
    score: 'Pursuing (Undergraduate)',
    details: 'Focusing on Machine Learning, Computer Vision, Deep Learning, Cloud Architecture, and Advanced Data Structures.'
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'K.J. Somaiya College and K.B. Rohmare College',
    duration: '2022 – 2024',
    score: '87.00%',
    details: 'Rigorous coursework in Mathematics, Physics, Chemistry, and Information Technology.'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Seva Niketan Convent School',
    duration: '2012 – 2022',
    score: '96.80%',
    details: 'Academic excellence and leadership across inter-school science and mathematics competitions.'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Published Patent',
    organization: 'Patent Office / Government Patent Authority',
    year: '2026',
    type: 'Patent',
    applicationNo: 'Application No. 202621043586',
    description: 'Official patent publication by the relevant patent authority for novel computational methodology.',
    verified: true
  },
  {
    title: 'Finalist — InnoQuest 2025',
    organization: 'InnoQuest Engineering Competition',
    year: '2025',
    type: 'Competition',
    description: 'Selected for the Grand Final Round among nationwide participating engineering teams presenting cutting-edge technology solutions.',
    verified: true
  },
  {
    title: 'Second Round Qualifier — SSH’26',
    organization: 'Symbiosis National Level Hackathon (SSH 2026)',
    year: '2026',
    type: 'Hackathon',
    description: 'Successfully qualified and advanced to Round 2 of the prestigious Symbiosis National Level Hackathon.',
    verified: true
  }
];

export const openSourceData: OpenSourceItem[] = [
  {
    project: 'scikit-learn',
    type: 'Core Open Source ML Library (Python)',
    technologies: ['Python', 'NumPy', 'Git', 'Testing / Linting'],
    status: 'Submitted PR',
    description: 'Submitted a pull request resolving a spurious EfficiencyWarning in the DBSCAN clustering module when operating on sorted precomputed distance graphs.',
    details: 'Followed scikit-learn strict contribution guidelines: wrote unit regression tests, satisfied PEP8 and black/flake8 linting, and engaged in maintainer code review.'
  },
  {
    project: 'ArogyaScript',
    type: 'Healthcare Software Initiative',
    technologies: ['Python', 'Git', 'Backend Development'],
    status: 'Merged PR',
    description: 'Contributed backend architectural enhancements through a successfully merged GitHub pull request.',
    details: 'Collaborated with project maintainers using GitHub pull requests, structured code reviews, and distributed version control workflows.'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    year: '2025'
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    year: '2024'
  },
  {
    name: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    year: '2024'
  },
  {
    name: 'AWS Cloud Practitioner (CLF-C02) Exam Preparation',
    issuer: 'Udemy',
    year: '2024'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'code',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5 / CSS3']
  },
  {
    title: 'Machine Learning & Deep Learning',
    iconName: 'brain',
    skills: ['PyTorch', 'scikit-learn', 'OpenCV', 'YOLOv8', 'ResNet50', 'Grad-CAM', 'CNNs', 'Random Forest']
  },
  {
    title: 'Data Science & Analytics',
    iconName: 'chart',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Geospatial Analytics', 'Haversine Algorithms', 'EDA', 'Feature Engineering']
  },
  {
    title: 'Frontend & Backend Development',
    iconName: 'layers',
    skills: ['React.js', 'Next.js', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Bootstrap 5']
  },
  {
    title: 'Databases & Cloud Infrastructure',
    iconName: 'database',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL (Supabase)', 'Docker', 'Git', 'GitHub Actions']
  },
  {
    title: 'Core CS Concepts & Tools',
    iconName: 'terminal',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Operating Systems', 'DBMS', 'Computer Networks', 'VS Code', 'Jupyter Notebook', 'Postman']
  }
];
