export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  features: string[];
  architecture: string[];
  technology: string[];
  statistics: { label: string; value: string }[];
  image: string;
  links: {
    demo: string;
    github: string;
  };
  modalDetails: {
    overview: string;
    challenges: string;
    solutions: string;
    futureScope: string;
    gallery: string[];
  };
  isFlagship?: boolean;
  isNew?: boolean;
  tagline?: string;
  problemStatement?: string;
  engineeringHighlights?: { title: string; subtitle: string; description: string; points: string[] }[];
  resumeHighlights?: string[];
  technicalFeatures?: string[];
}

export const projectsData: Project[] = [
  {
    id: "vibeguard-ai",
    isFlagship: true,
    title: "VibeGuard AI — Real-Time Machine Condition Monitoring & Industrial IoT Predictive Maintenance System",
    category: "INDUSTRIAL IOT / PREDICTIVE MAINTENANCE",
    categories: ["Industrial IoT", "Predictive Maintenance", "AI", "Full Stack", "WebSocket"],
    tagline: "An enterprise-grade Industrial IoT platform leveraging real-time sensor processing, noise-filtered anomaly detection algorithms, and WebSocket telemetry to minimise costly machinery downtime.",
    description: "Enterprise-grade real-time machine condition monitoring and predictive maintenance solution for industrial IoT infrastructure featuring sustained anomaly verification, Socket.IO live telemetry, signal processing algorithms, and MongoDB Atlas persistence.",
    problemStatement: "Manufacturing machines often fail unexpectedly due to vibration spikes, overheating, abnormal current, and speed fluctuations. Traditional monitoring systems trigger excessive false alarms. VibeGuard AI solves this using mathematical filtering and sustained anomaly validation.",
    features: [
      "Live Sensor Telemetry",
      "WebSocket Communication",
      "MongoDB Persistence",
      "Machine Health Monitoring",
      "Predictive Alerts",
      "Fleet Dashboard",
      "Manual Simulation Controls",
      "Historical Data",
      "Responsive UI",
      "Automated Test Suite"
    ],
    technicalFeatures: [
      "Live Sensor Telemetry",
      "WebSocket Communication",
      "MongoDB Persistence",
      "Machine Health Monitoring",
      "Predictive Alerts",
      "Fleet Dashboard",
      "Manual Simulation Controls",
      "Historical Data",
      "Responsive UI",
      "Automated Test Suite"
    ],
    engineeringHighlights: [
      {
        title: "Real-Time WebSocket Telemetry",
        subtitle: "High-Frequency Stream Pipeline",
        description: "Built on Socket.IO for low-latency bidirectional streaming across industrial machine fleets.",
        points: ["Socket.IO", "Live streaming", "Fleet monitoring", "Instant updates"]
      },
      {
        title: "Consecutive Reading Anomaly Engine",
        subtitle: "Sustained Anomaly Validation (CONSECUTIVE_READINGS_THRESHOLD = 3)",
        description: "Alerts trigger strictly after 3 consecutive abnormal sensor readings to eliminate transient noise and false positives.",
        points: ["CONSECUTIVE_READINGS_THRESHOLD = 3", "Zero False Positives", "Sustained Validation", "Instant Alert Triggering"]
      },
      {
        title: "Signal Processing Pipeline",
        subtitle: "Mathematical Noise Filtering & Verification",
        description: "Applied moving averages, median filters, and spike rejection to transform raw sensor noise into clean telemetry signals.",
        points: ["Exponential Moving Average (EMA)", "Median Filter", "Range Validation", "Noise Reduction"]
      },
      {
        title: "Industrial Control Dashboard",
        subtitle: "Comprehensive Fleet Operations Center",
        description: "Recruiter-focused, high-contrast industrial control suite with dynamic charts, dark/light theme, and live telemetry control.",
        points: ["Dark/Light Mode", "Responsive UI", "Machine Status", "KPI Cards", "Fleet Health", "Charts", "Live Alerts"]
      }
    ],
    resumeHighlights: [
      "Architected VibeGuard AI using React, Node.js, Express, Socket.IO, and MongoDB.",
      "Engineered a consecutive-reading anomaly detection engine with EMA and spike rejection to reduce false alerts.",
      "Implemented live WebSocket telemetry pipelines for industrial sensor streaming.",
      "Built automated integration tests validating anomaly logic and alert generation."
    ],
    architecture: [
      "IoT Industrial Sensors & Telemetry Simulator",
      "Signal Processing Engine (EMA + Median Filter + Spike Rejection)",
      "Consecutive Reading Anomaly Validation Engine (Threshold = 3)",
      "Node.js & Express REST Backend & Socket.IO Telemetry Router",
      "MongoDB Atlas Mongoose Persistence Layer",
      "React + Vite High-Performance Industrial Fleet Dashboard"
    ],
    technology: ["React", "Vite", "Node.js", "Express.js", "Socket.IO", "MongoDB Atlas", "Mongoose", "JavaScript ES6+", "CSS Variables", "Vercel"],
    statistics: [
      { label: "Industrial Parameters", value: "5+" },
      { label: "Streaming Pipeline", value: "Real-Time WebSocket" },
      { label: "UI Responsiveness", value: "100%" },
      { label: "System Design", value: "Enterprise" }
    ],
    image: "/projects/assets/images/vibeguard_ai.jpg",
    links: {
      demo: "https://machine-condition-monitoring-vibe-g.vercel.app",
      github: "https://github.com/Ashwin15-png/Machine-Condition-Monitoring-VibeGuardAI"
    },
    modalDetails: {
      overview: "VibeGuard AI is a real-time predictive maintenance platform engineered for industrial machine condition monitoring. It delivers continuous sensor monitoring, live telemetry streaming, early anomaly detection, fleet monitoring, false alarm reduction, and an intuitive industrial control dashboard.",
      challenges: "Manufacturing machines experience frequent environmental noise, electrical interference, and single-point sensor spikes that cause traditional threshold alarms to flood engineers with false alerts and costly unnecessary downtime.",
      solutions: "Formulated a multi-stage signal processing pipeline using Exponential Moving Average (EMA) and Median Filtering alongside a Consecutive Reading Anomaly Engine (CONSECUTIVE_READINGS_THRESHOLD = 3) that verifies abnormal metrics across 3 consecutive cycles before escalating alerts.",
      futureScope: "Integrating edge-AI microcontrollers (ESP32/Raspberry Pi) with MQTT protocol support, automated maintenance work-order generation, and deep-learning predictive time-to-failure forecasting models.",
      gallery: [
        "/projects/assets/images/vibeguard_ai.jpg",
        "/projects/assets/images/vibeguard_details_1.jpg"
      ]
    }
  },
  {
    id: "attendance-system",
    title: "Smart Attendance & Visitor Management System",
    category: "AI / COMPUTER VISION",
    categories: ["AI", "Computer Vision", "Cloud"],
    description: "Developed a secure attendance and visitor management platform featuring authentication, facial recognition, Dockerized deployment, CI/CD automation, and cloud-ready architecture to streamline institutional operations.",
    features: [
      "Facial Recognition Attendance",
      "Visitor Registration",
      "Secure Authentication",
      "Attendance Analytics",
      "Role Based Access",
      "Admin Dashboard",
      "Dockerized Deployment",
      "CI/CD Automation",
      "Cloud Ready Architecture",
      "Secure Database Operations"
    ],
    architecture: [
      "User / Visitor Entry",
      "Secure Authentication Guard",
      "Flask Backend API Router",
      "OpenCV Facial Landmark recognition Engine",
      "Visitor Query Controller",
      "SQLite Persistent DB Store",
      "Admin Dashboard Analytical Module",
      "Docker Containerization",
      "GitHub Actions CI/CD pipeline",
      "Cloud Instance Deployment (AWS)"
    ],
    technology: ["Python", "Flask", "OpenCV", "SQLite", "Docker", "GitHub Actions", "HTML", "CSS", "JavaScript"],
    statistics: [
      { label: "Recognition Accuracy", value: "99%" },
      { label: "Deployment Structure", value: "Docker Enabled" },
      { label: "Infrastructure State", value: "Cloud Ready" }
    ],
    image: "/projects/assets/images/attendance_system.jpg",
    links: {
      demo: "https://github.com/Ashwin15-png",
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "An automated biometric check-in solution for schools, universities, or secure checkpoints. Users pass in front of a camera system and are authenticated in sub-second latency using pre-computed face embedding indexes, preventing attendance proxy issues and minimizing visitor bottlenecks.",
      challenges: "Varying illumination in the lobby area drastically reduced OpenCV classification rates. Loading and processing thousands of High Resolution face images in real-time caused heavy CPU utilization spikes.",
      solutions: "Implemented image preprocessing including Bilateral Filtering and Histogram Equalization. Face crops were transformed into 128-dimensional encodings and matched using optimized matrix dot-products rather than repeatedly parsing source media.",
      futureScope: "Integrating stereo-vision and depth-sensing arrays to prevent spoofing using static images, and deploying the solution as a Kubernetes cluster on AWS EKS.",
      gallery: [
        "/projects/assets/images/attendance_details_1.jpg",
        "/projects/assets/images/attendance_details_2.jpg"
      ]
    }
  },
  {
    id: "prescription-extractor",
    isFlagship: true,
    isNew: true,
    title: "Prescription Extractor SaaS (PrescriptionX)",
    category: "HEALTHCARE AI / ENTERPRISE SAAS",
    categories: ["Healthcare", "AI", "OCR", "Enterprise SaaS", "Computer Vision"],
    tagline: "Enterprise-grade AI-powered healthcare platform that digitizes medical prescriptions.",
    description: "Enterprise-grade AI-powered healthcare platform that digitizes handwritten and printed medical prescriptions using OpenCV image preprocessing, Tesseract OCR, FastAPI, PostgreSQL, and intelligent medical field extraction.",
    problemStatement: "Hospitals and pharmacies waste thousands of hours manually transcribing patient prescriptions, leading to human errors, lost data, and inefficient clinical workflows.",
    features: [
      "Enterprise Medical OCR",
      "OpenCV Image Processing",
      "Tesseract OCR Pipeline",
      "FastAPI Backend",
      "PostgreSQL Database",
      "Enterprise Filter Engine",
      "Advanced Analytics Dashboard",
      "OCR Confidence Scoring",
      "Duplicate Detection",
      "Image Quality Analysis",
      "Barcode & QR Detection",
      "CSV / Excel / PDF Export",
      "Responsive Dashboard",
      "Docker Support",
      "REST APIs"
    ],
    technicalFeatures: [
      "Enterprise Medical OCR",
      "OpenCV Image Processing",
      "Tesseract OCR Pipeline",
      "FastAPI Backend",
      "PostgreSQL Database"
    ],
    engineeringHighlights: [
      {
        title: "Advanced OCR Pipeline",
        subtitle: "Preprocessing & Extraction",
        description: "Adaptive thresholding, Deskew filters, and noise cancellation combined with Tesseract OCR to read cursive writing securely.",
        points: ["OpenCV", "Tesseract", "Deskew Filters", "Confidence Scoring"]
      },
      {
        title: "Enterprise Filter Engine",
        subtitle: "Dynamic Healthcare Analytics",
        description: "High-performance PostgreSQL filtering allowing clinicians to search records instantly with multiple export options.",
        points: ["PostgreSQL", "Full-Text Search", "Data Exports (PDF/CSV)", "Analytics"]
      }
    ],
    architecture: [
      "Prescription Image Input & Quality Check",
      "OpenCV Preprocessing (Deskew & Denoise)",
      "Tesseract OCR Text Scan Engine",
      "NLP Structured Entity Extraction (25+ Fields)",
      "Confidence Scoring & Validation",
      "FastAPI REST Endpoints",
      "PostgreSQL Persistent Storage",
      "Enterprise Analytics Dashboard"
    ],
    technology: ["FastAPI", "PostgreSQL", "OpenCV", "Tesseract", "OCR", "Docker", "AI", "Python"],
    statistics: [
      { label: "Extracted Fields", value: "25+" },
      { label: "Pipeline Status", value: "Production Ready" },
      { label: "Export Formats", value: "CSV/Excel/PDF" },
      { label: "Backend Core", value: "FastAPI + DB" }
    ],
    image: "/projects/assets/images/prescription_extractor.jpg",
    links: {
      demo: "https://prescription-extractor-ocr.vercel.app/",
      github: "https://github.com/Ashwin15-png/prescription-extractor-ocr"
    },
    modalDetails: {
      overview: "Prescription Extractor SaaS is a specialized enterprise platform transforming unstructured prescription images into searchable structured medical records with enterprise analytics, advanced filtering, OCR confidence scoring, duplicate detection, and various data exports.",
      challenges: "Poor lighting, extreme cursive writing variability, low-resolution uploads, and non-standard prescription formats aggressively corrupt standard OCR segmentations.",
      solutions: "Implemented an advanced OpenCV image processing pipeline (Deskew, adaptive thresholding) paired with Tesseract OCR and fuzzy matching against standard pharmacopeia dictionaries to robustly parse 25+ medical fields with high confidence.",
      futureScope: "Integrating cross-reference global drug interaction APIs for immediate risk warnings, AI-driven context corrections for dosages, and direct HL7/FHIR EHR integrations.",
      gallery: [
        "/projects/assets/images/prescription_details_1.jpg",
        "/projects/assets/images/prescription_details_2.jpg"
      ]
    }
  },
  {
    id: "sign-language",
    title: "Sign Language Translation System",
    category: "COMPUTER VISION",
    categories: ["Computer Vision", "Accessibility", "AI"],
    description: "Designed a real-time sign language recognition system using MediaPipe and computer vision to enhance communication accessibility.",
    features: [
      "Real-Time Gesture Tracking",
      "3D Hand Landmark Detection",
      "Dual MediaPipe Models",
      "Computer Vision Transforms",
      "Accessibility Overlay Module",
      "Instant Text Translation",
      "Ultra-Low Frame Delay",
      "Robust Gesture Catalog"
    ],
    architecture: [
      "Webcam Visual Stream",
      "Video Frame Extractor",
      "MediaPipe Pipeline Core",
      "Hand Bone Keypoint Coordinates",
      "Dynamic Scale Normalizer",
      "Translation ML Model",
      "Live Translated Text Stream"
    ],
    technology: ["Python", "MediaPipe", "OpenCV", "NumPy", "Scikit-Learn"],
    statistics: [
      { label: "Visual Latency", value: "<50ms" },
      { label: "Classification", value: "AI Vision" },
      { label: "Target Audience", value: "Accessible" }
    ],
    image: "/projects/assets/images/sign_language.jpg",
    links: {
      demo: "https://github.com/Ashwin15-png",
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "An accessibility interface that maps hand expressions dynamically onto readable transcripts. Built to bridge communication divides, this system tracks joint angles and spatial movements of fingers in real-time, outputting immediate translation overlay grids.",
      challenges: "Hand sizes and relative distances changed randomly as users moved closer to or further from the camera, breaking coordinate-based models.",
      solutions: "Converted hand skeleton coordinates to relative distance ratios based on wrist landmarks. This created a distance-invariant framework that translates effectively regardless of camera proximity.",
      futureScope: "Introducing 3D skeleton maps of facial expressions and body posture for full American Sign Language (ASL) contextual processing.",
      gallery: [
        "/projects/assets/images/sign_details_1.jpg",
        "/projects/assets/images/sign_details_2.jpg"
      ]
    }
  },
  {
    id: "face-recognition-ml",
    title: "Face Recognition System",
    category: "COMPUTER VISION / MACHINE LEARNING",
    categories: ["Computer Vision", "Machine Learning", "Security"],
    description: "Implemented an intelligent face detection and recognition application using OpenCV and machine learning for identity verification.",
    features: [
      "Real-Time Scanner stream",
      "Multi-Face Coordinates",
      "Face Embedding Computations",
      "Identity Lock Validation",
      "Security Auth integration",
      "Sub-100ms Inference",
      "Multiple Face Batch scans"
    ],
    architecture: [
      "Camera Capture feed",
      "Active Frame Buffering",
      "MTCNN Face Detection Box",
      "128D Embedding Engine",
      "K-Nearest Neighbors Classify",
      "Verified Entry Decoded",
      "Hardware Auth Relay Output"
    ],
    technology: ["Python", "OpenCV", "Machine Learning", "NumPy", "Scikit-Learn"],
    statistics: [
      { label: "Scan Time", value: "<80ms" },
      { label: "System Accuracy", value: "98.7%" },
      { label: "Algorithm Base", value: "ML Powered" }
    ],
    image: "/projects/assets/images/face_recognition.jpg",
    links: {
      demo: "https://github.com/Ashwin15-png",
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "A standalone identity verification utility that works at the edge. Capable of scanning high-speed video streams, it uses light face-encoding algorithms to verify authorized members and log timestamps automatically.",
      challenges: "Side profile head tilts and sudden shadow occlusion bypassed traditional HAAR cascades.",
      solutions: "Swapped HAAR classifiers with MTCNN (Multi-task Cascaded Convolutional Networks), performing 5-point face alignment (eyes, nose, mouth corners) to dynamically rotate faces before calculating embeddings.",
      futureScope: "Integrating secure cloud sync protocols to automatically update matching indices across multiple edge terminals simultaneously.",
      gallery: [
        "/projects/assets/images/face_details_1.jpg",
        "/projects/assets/images/face_details_2.jpg"
      ]
    }
  },
  {
    id: "hospital-portal",
    title: "Hospital Management Portal",
    category: "FULL STACK",
    categories: ["Full Stack", "Healthcare"],
    description: "Developed a web-based hospital management platform for efficient patient, appointment, and administrative management.",
    features: [
      "Patient Intake Registration",
      "Doctor Schedule Roster",
      "Appointment Calendar Sync",
      "Digital Health Records",
      "Invoicing & Reports",
      "Role-Based Dashboards",
      "Session Security Locks",
      "Fluid Desktop Design"
    ],
    architecture: [
      "Role-Based User Clients",
      "HTTP Router Session Shield",
      "PHP Controller Module",
      "Patient Record Router",
      "Doctor Timetable Tracker",
      "Appointment Booking Queue",
      "MySQL Multi-Table Cache",
      "Visual Analytics Generator"
    ],
    technology: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    statistics: [
      { label: "User Database", value: "10k+ Patients" },
      { label: "Layout Type", value: "Highly Responsive" },
      { label: "Data Structure", value: "MySQL Engine" }
    ],
    image: "/projects/assets/images/hospital_portal.jpg",
    links: {
      demo: "https://github.com/Ashwin15-png",
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "An integrated healthcare logistics application that unites medical, billing, and scheduling workflows. Serves as a single source of truth for doctors logging diagnosis slips, patients checking slots, and admins balancing invoices.",
      challenges: "Concurrent database operations caused overlapping appointment bookings for the same doctor at the same hour during peak loads.",
      solutions: "Introduced MySQL transactions utilizing InnoDB row-level locking. Developed a validator that cross-references conflict lists within the transaction before finalizing patient check-out records.",
      futureScope: "Building automated SMS alerts for patient queues and integrating a HIPAA-compliant encrypted video system for telemedicine sessions.",
      gallery: [
        "/projects/assets/images/hospital_details_1.jpg",
        "/projects/assets/images/hospital_details_2.jpg"
      ]
    }
  },
  {
    id: "hotel-reservation",
    title: "Hotel Reservation System",
    category: "FULL STACK",
    categories: ["Full Stack", "Booking", "Database"],
    description: "Designed a reservation management application to simplify hotel booking, customer management, and room allocation.",
    features: [
      "Interactive Room Grid",
      "Booking lifecycle logic",
      "Customer Profile records",
      "Secure Transaction logs",
      "Live Room availability",
      "Analytics Revenue charts",
      "Advanced Staff Dashboard",
      "Elastic Search Filters"
    ],
    architecture: [
      "Customer Booking Frontend",
      "Secure Router Shield",
      "Booking Engine Controller",
      "Room Matrix Coordinator",
      "Payment Processing Stub",
      "Customer Record Database",
      "MySQL Tables System",
      "Admin Dashboard Metrics"
    ],
    technology: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    statistics: [
      { label: "Booking Speed", value: "Instant Booking" },
      { label: "Core Database", value: "Relational SQL" },
      { label: "User Interface", value: "Responsive Grids" }
    ],
    image: "/projects/assets/images/hotel_reservation.jpg",
    links: {
      demo: "https://github.com/Ashwin15-png",
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "A dedicated reservation command center. Room state triggers are updated automatically, letting checkout managers track active bookings, handle cleanings, process room changes, and audit invoices from a unified dashboard.",
      challenges: "Dynamic price calculations based on weekend rates and holiday seasons resulted in slow MySQL query times.",
      solutions: "Optimized database schemas by normalizing rates, indexing booking timestamps, and using Memcached to cache room configurations.",
      futureScope: "Integrating IoT smart locks that send temporary QR-code door keys directly to customers' emails upon booking confirmation.",
      gallery: [
        "/projects/assets/images/hotel_details_1.jpg",
        "/projects/assets/images/hotel_details_2.jpg"
      ]
    }
  }
];
