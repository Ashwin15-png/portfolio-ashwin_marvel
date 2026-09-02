export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  problemStatement?: string;
  myApproach?: string;
  architectureDiagram?: string[];
  features: string[];
  architecture: string[];
  technologyCategorized?: { category: string; items: string[] }[];
  technology: string[];
  statistics: { label: string; value: string }[];
  metricBlocks: { label: string; value: string }[];
  image: string;
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  modalDetails: {
    overview: string;
    problem: string;
    approach: string;
    challenges: { title: string; desc: string }[] | string;
    solutions: string;
    futureScope: string;
    gallery: string[];
    evidenceMetrics?: { label: string; value: string }[];
  };
  isFlagship?: boolean;
  flagshipRank?: number;
  isNew?: boolean;
  isOngoing?: boolean;
  isComingSoon?: boolean;
  statusText?: string;
  tagline?: string;
  engineeringHighlights?: { title: string; subtitle: string; description: string; points: string[] }[];
  resumeHighlights?: string[];
  technicalFeatures?: string[];
}

export const projectsData: Project[] = [
  {
    id: "vibeguard-ai",
    isFlagship: true,
    flagshipRank: 1,
    title: "VibeGuard AI — Real-Time Machine Condition Monitoring & Industrial IoT Predictive Maintenance System",
    category: "INDUSTRIAL IOT / PREDICTIVE MAINTENANCE",
    categories: ["Industrial IoT", "Predictive Maintenance", "AI", "Full Stack", "WebSocket"],
    tagline: "An enterprise-grade Industrial IoT platform leveraging real-time sensor processing, noise-filtered anomaly detection algorithms, and WebSocket telemetry to minimise costly machinery downtime.",
    description: "Enterprise-grade real-time machine condition monitoring and predictive maintenance solution for industrial IoT infrastructure featuring sustained anomaly verification, Socket.IO live telemetry, signal processing algorithms, and MongoDB Atlas persistence.",
    problemStatement: "Manufacturing machines often fail unexpectedly due to vibration spikes, overheating, abnormal current, and speed fluctuations. Traditional monitoring systems trigger excessive false alarms due to transient noise spikes, inflating operational downtime costs.",
    myApproach: "Engineered a multi-stage signal processing pipeline using Exponential Moving Average (EMA) and Median Filtering paired with a Consecutive Reading Anomaly Engine (CONSECUTIVE_READINGS_THRESHOLD = 3). Telemetry flows over Socket.IO WebSockets to a Node.js/Express backend and MongoDB Atlas persistence layer.",
    architectureDiagram: [
      "IoT Industrial Sensors & Telemetry Simulator",
      "Signal Processing Pipeline (EMA + Median Filter)",
      "Consecutive Reading Anomaly Validation Engine (Threshold = 3)",
      "Node.js & Express REST Backend + Socket.IO Telemetry Router",
      "MongoDB Atlas Mongoose Persistence Layer",
      "React + Vite High-Performance Industrial Fleet Dashboard"
    ],
    features: [
      "Live Sensor Telemetry",
      "WebSocket Communication",
      "MongoDB Persistence",
      "Machine Health Monitoring",
      "Predictive Alerts",
      "Fleet Dashboard",
      "Manual Simulation Controls",
      "Historical Data Analytics"
    ],
    technicalFeatures: [
      "Live Sensor Telemetry",
      "WebSocket Communication",
      "MongoDB Persistence",
      "Machine Health Monitoring",
      "Predictive Alerts"
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
        subtitle: "Sustained Anomaly Validation (Threshold = 3)",
        description: "Alerts trigger strictly after 3 consecutive abnormal sensor readings to eliminate transient noise and false positives.",
        points: ["CONSECUTIVE_READINGS_THRESHOLD = 3", "Zero False Positives", "Sustained Validation", "Instant Alert Triggering"]
      },
      {
        title: "Signal Processing Pipeline",
        subtitle: "Mathematical Noise Filtering & Verification",
        description: "Applied moving averages, median filters, and spike rejection to transform raw sensor noise into clean telemetry signals.",
        points: ["Exponential Moving Average (EMA)", "Median Filter", "Range Validation", "Noise Reduction"]
      }
    ],
    resumeHighlights: [
      "Architected VibeGuard AI using React, Node.js, Express, Socket.IO, and MongoDB.",
      "Engineered a consecutive-reading anomaly detection engine with EMA and spike rejection to reduce false alerts.",
      "Implemented live WebSocket telemetry pipelines for industrial sensor streaming.",
      "Built automated integration tests validating anomaly logic and alert generation."
    ],
    architecture: [
      "IoT Sensors & Simulator",
      "Signal Processing (EMA)",
      "Anomaly Validation (Thresh = 3)",
      "Socket.IO Router",
      "MongoDB Persistence",
      "React Fleet Dashboard"
    ],
    technologyCategorized: [
      { category: "FRONTEND & UI", items: ["React", "Vite", "CSS Variables", "Recharts"] },
      { category: "BACKEND & TELEMETRY", items: ["Node.js", "Express.js", "Socket.IO WebSockets"] },
      { category: "SIGNAL & ANOMALY ENGINE", items: ["EMA Filter", "Median Noise Cancellation", "Consecutive Spike Validator"] },
      { category: "DATABASE & CLOUD", items: ["MongoDB Atlas", "Mongoose", "Vercel"] }
    ],
    technology: ["React", "Vite", "Node.js", "Express.js", "Socket.IO", "MongoDB Atlas", "Mongoose", "JavaScript ES6+", "Vercel"],
    statistics: [
      { label: "Industrial Parameters", value: "5+" },
      { label: "Streaming Pipeline", value: "Real-Time WebSocket" },
      { label: "UI Responsiveness", value: "100%" },
      { label: "System Design", value: "Enterprise" }
    ],
    metricBlocks: [
      { value: "5+ SENSOR PARAMETERS", label: "REAL-TIME METRICS" },
      { value: "REAL-TIME TELEMETRY", label: "SOCKET.IO PIPELINE" },
      { value: "SOCKET.IO STREAMING", label: "BIDIRECTIONAL FEED" },
      { value: "MONGODB ATLAS", label: "TIMERSERIES STORE" }
    ],
    image: "/projects/assets/images/vibeguard_ai.jpg",
    links: {
      caseStudy: "/vibeguard-ai.html",
      demo: "https://machine-condition-monitoring-vibe-g.vercel.app",
      github: "https://github.com/Ashwin15-png/Machine-Condition-Monitoring-VibeGuardAI"
    },
    modalDetails: {
      overview: "VibeGuard AI is a real-time predictive maintenance platform engineered for industrial machine condition monitoring. It delivers continuous sensor monitoring, live telemetry streaming, early anomaly detection, false alarm reduction, and an intuitive industrial control dashboard.",
      problem: "Manufacturing machines experience frequent environmental noise, electrical interference, and single-point sensor spikes that cause traditional threshold alarms to flood engineers with false alerts and costly unnecessary downtime.",
      approach: "Formulated a multi-stage signal processing pipeline using Exponential Moving Average (EMA) and Median Filtering alongside a Consecutive Reading Anomaly Engine (CONSECUTIVE_READINGS_THRESHOLD = 3) that verifies abnormal metrics across 3 consecutive cycles before escalating alerts.",
      challenges: [
        { title: "Transient Electrical Sensor Noise", desc: "Single-frame sensor spikes triggered continuous false alarms during normal operations." },
        { title: "Low-Latency WebSocket Streaming", desc: "High-frequency sensor payloads overloaded frontend state rendering when broadcast unthrottled." },
        { title: "Stateful Anomaly Verification", desc: "Tracking consecutive threshold breaches per machine across async node threads without memory leaks." }
      ],
      solutions: "Implemented EMA signal smoothing and consecutive reading verification thresholds to filter single-point noise spikes, streaming validated telemetry via Socket.IO.",
      futureScope: "Integrating edge-AI microcontrollers (ESP32/Raspberry Pi) with MQTT protocol support, automated maintenance work-order generation, and deep-learning predictive time-to-failure forecasting models.",
      gallery: [
        "/projects/assets/images/vibeguard_ai.jpg",
        "/projects/assets/images/vibeguard_details_1.jpg"
      ]
    }
  },
  {
    id: "prescription-extractor",
    isFlagship: true,
    flagshipRank: 2,
    isNew: true,
    title: "Prescription Extractor SaaS (PrescriptionX)",
    category: "HEALTHCARE AI / ENTERPRISE SAAS",
    categories: ["Healthcare", "AI", "OCR", "Enterprise SaaS", "Computer Vision"],
    tagline: "Enterprise-grade AI-powered healthcare platform that digitizes medical prescriptions.",
    description: "Enterprise-grade AI-powered healthcare platform that digitizes handwritten and printed medical prescriptions using OpenCV image preprocessing, Tesseract OCR, FastAPI, PostgreSQL, and intelligent medical field extraction.",
    problemStatement: "Hospitals and pharmacies waste thousands of hours manually transcribing patient prescriptions, leading to human errors, lost data, and inefficient clinical workflows.",
    myApproach: "Developed an enterprise OCR pipeline combining OpenCV adaptive thresholding, deskew filters, and Tesseract OCR with fuzzy medical dictionary matching. Built using FastAPI for backend REST services and PostgreSQL for persistent clinical records.",
    architectureDiagram: [
      "Prescription Image Input & Quality Check",
      "OpenCV Preprocessing (Deskew & Denoise)",
      "Tesseract OCR Text Scan Engine",
      "NLP Structured Entity Extraction (25+ Fields)",
      "Confidence Scoring & Validation",
      "FastAPI REST Endpoints",
      "PostgreSQL Persistent Storage",
      "Enterprise Analytics Dashboard"
    ],
    features: [
      "Enterprise Medical OCR",
      "OpenCV Image Processing",
      "Tesseract OCR Pipeline",
      "FastAPI Backend",
      "PostgreSQL Database",
      "Enterprise Filter Engine",
      "Advanced Analytics Dashboard",
      "CSV / Excel / PDF Export"
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
      "Prescription Input",
      "OpenCV Deskew",
      "Tesseract OCR Scan",
      "Entity Extraction (25+ Fields)",
      "FastAPI REST Router",
      "PostgreSQL Storage"
    ],
    technologyCategorized: [
      { category: "AI / COMPUTER VISION", items: ["OpenCV", "Tesseract OCR", "Image Preprocessing", "Fuzzy Dictionary"] },
      { category: "BACKEND API", items: ["FastAPI", "Python", "Pydantic", "REST Endpoints"] },
      { category: "DATABASE & ENTERPRISE", items: ["PostgreSQL", "Full-Text Search", "Docker", "PDF/CSV Exports"] }
    ],
    technology: ["FastAPI", "PostgreSQL", "OpenCV", "Tesseract", "OCR", "Docker", "AI", "Python"],
    statistics: [
      { label: "Extracted Fields", value: "25+" },
      { label: "Pipeline Status", value: "Production Ready" },
      { label: "Export Formats", value: "CSV/Excel/PDF" },
      { label: "Backend Core", value: "FastAPI + DB" }
    ],
    metricBlocks: [
      { value: "OCR PIPELINE", label: "TESSERACT SCAN ENGINE" },
      { value: "OPENCV PREPROCESSING", label: "DESKEW & ADAPTIVE THRESHOLD" },
      { value: "FASTAPI", label: "HIGH-PERFORMANCE BACKEND" },
      { value: "POSTGRESQL", label: "RELATIONAL DB ARCHIVE" }
    ],
    image: "/projects/assets/images/prescription_extractor.jpg",
    links: {
      caseStudy: "/prescription-extractor.html",
      demo: "https://prescription-extractor-ocr.vercel.app/",
      github: "https://github.com/Ashwin15-png/prescription-extractor-ocr"
    },
    modalDetails: {
      overview: "Prescription Extractor SaaS is a specialized enterprise platform transforming unstructured prescription images into searchable structured medical records with enterprise analytics, advanced filtering, OCR confidence scoring, duplicate detection, and data exports.",
      problem: "Poor lighting, extreme cursive writing variability, low-resolution uploads, and non-standard prescription formats aggressively corrupt standard OCR segmentations.",
      approach: "Implemented an advanced OpenCV image processing pipeline (Deskew, adaptive thresholding) paired with Tesseract OCR and fuzzy matching against standard pharmacopeia dictionaries to robustly parse 25+ medical fields with high confidence.",
      challenges: [
        { title: "Cursive Script Variability", desc: "Handwritten prescription scripts had unpredictable stroke widths and character spacing." },
        { title: "Document Orientation & Skew", desc: "Mobile uploads often arrived rotated, skewed, or blurred from uneven camera angles." },
        { title: "Low-Latency Structured Extraction", desc: "Mapping raw unformatted OCR text output into 25+ structured JSON medical fields efficiently." }
      ],
      solutions: "Engineered automated image deskewing and bilaterally filtered thresholding, parsing extracted OCR blocks through fuzzy pharmacopeia matchers.",
      futureScope: "Integrating cross-reference global drug interaction APIs for immediate risk warnings, AI-driven context corrections for dosages, and direct HL7/FHIR EHR integrations.",
      gallery: [
        "/projects/assets/images/prescription_details_1.jpg",
        "/projects/assets/images/prescription_details_2.jpg"
      ]
    }
  },
  {
    id: "vigil-voice",
    isFlagship: true,
    flagshipRank: 3,
    isOngoing: true,
    statusText: "ACTIVE DEVELOPMENT",
    title: "VIGIL-VOICE — Real-Time Voice Trust & Fraud Prevention Engine",
    category: "AI SECURITY / SPEECH ML",
    categories: ["AI", "Speech ML", "Real-Time Systems", "Risk Engine", "PyTorch"],
    tagline: "An AI-powered voice security system evaluating synthetic speech, speaker identity, replay attacks, and contextual risk.",
    description: "Real-time multi-model voice anti-spoofing and speaker verification system leveraging AASIST-L, ECAPA-TDNN, and LFCC-LCNN architectures for deepfake defense.",
    problemStatement: "Generative AI and voice cloning allow synthetic speech, voice impersonation, and replay attacks to bypass legacy biometric voice authentication.",
    myApproach: "Architected a multi-signal risk fusion engine combining AASIST-L graph neural networks, ECAPA-TDNN 192D speaker embeddings, and LFCC-LCNN presentation attack detection with temporal EMA smoothing.",
    architectureDiagram: [
      "VOICE INPUT",
      "AUDIO DECODE / RESAMPLE / VAD",
      "ROLLING AUDIO BUFFER",
      "┌────────────────┬────────────────┬─────────────────┐\n│ AASIST-L       │ ECAPA-TDNN     │ LFCC-LCNN       │\n│ SPOOF          │ SPEAKER        │ REPLAY / PAD    │\n└────────────────┴────────────────┴─────────────────┘",
      "TEMPORAL EMA SMOOTHING",
      "RISK FUSION ENGINE",
      "POLICY ENGINE",
      "ALLOW / VERIFY / HOLD / ESCALATE / BLOCK"
    ],
    features: [
      "Multi-Model Spoof Classification",
      "AASIST-L Graph Neural Network",
      "ECAPA-TDNN 192D Embeddings",
      "LFCC Feature Extraction",
      "Real-Time WebSocket Stream",
      "Temporal EMA Noise Filtering",
      "Multi-Signal Risk Fusion",
      "Policy Engine Action Rules"
    ],
    architecture: [
      "VOICE INPUT",
      "AUDIO DECODE / VAD",
      "ROLLING BUFFER",
      "AASIST-L / ECAPA-TDNN / LFCC-LCNN",
      "TEMPORAL EMA SMOOTHING",
      "RISK FUSION ENGINE",
      "POLICY ENGINE",
      "DECISION OUTPUT"
    ],
    technologyCategorized: [
      { category: "AI / ML MODELS", items: ["AASIST-L", "ECAPA-TDNN", "LFCC-LCNN", "PyTorch", "SpeechBrain"] },
      { category: "BACKEND & STREAMING", items: ["FastAPI", "WebSockets", "Python", "NumPy"] },
      { category: "SECURITY & RISK", items: ["Risk Fusion Engine", "Policy Engine", "Biometric Verification"] }
    ],
    technology: ["AASIST-L", "ECAPA-TDNN", "LFCC-LCNN", "FastAPI", "WebSockets", "PyTorch", "SpeechBrain"],
    statistics: [
      { label: "ROC-AUC", value: "0.9116" },
      { label: "EER", value: "16.67%" },
      { label: "BPCER", value: "0%" },
      { label: "Status", value: "Active Dev" }
    ],
    metricBlocks: [
      { value: "0.9116 ROC-AUC", label: "LOCAL EVALUATION" },
      { value: "16.67% EER", label: "EQUAL ERROR RATE" },
      { value: "AASIST-L MODEL", label: "GRAPH NEURAL NET" },
      { value: "RISK SCORE", label: "POLICY ENGINE" }
    ],
    image: "/projects/assets/images/face_recognition.jpg",
    links: {
      caseStudy: "/vigil-voice.html",
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "VIGIL-VOICE is an AI voice security system evaluating synthetic speech, speaker identity, replay attacks, and contextual risk to make real-time policy decisions.",
      problem: "Single-signal voice verification fails against modern deepfake clones and replayed acoustic audio.",
      approach: "Built a multi-signal risk fusion engine combining AASIST-L, ECAPA-TDNN, and LFCC-LCNN models evaluated through temporal EMA smoothing.",
      challenges: [
        { title: "Real-Time Audio Streaming", desc: "Streaming continuous audio over WebSockets while maintaining sub-200ms model inference queues." },
        { title: "Parallel Model Inference", desc: "Integrating graph neural networks and speaker embedding extractors asynchronously." },
        { title: "Temporal EMA Smoothing", desc: "Filtering transient frame-to-frame classification noise across rolling window buffers." }
      ],
      solutions: "Formulated Temporal EMA smoothing over windowed frame predictions before submitting risk vectors to the policy engine.",
      futureScope: "PostgreSQL persistence, Indian-language acoustic robustness calibration, and telephony gateway integration.",
      gallery: [
        "/projects/assets/images/face_recognition.jpg"
      ]
    }
  },
  {
    id: "attendance-system",
    isComingSoon: true,
    title: "Smart Attendance & Visitor Management System",
    category: "AI / COMPUTER VISION",
    categories: ["AI", "Computer Vision", "Cloud", "DevSecOps"],
    description: "Developed a secure attendance and visitor management platform featuring authentication, facial recognition, Dockerized deployment, CI/CD automation, and cloud-ready architecture.",
    problemStatement: "Manual attendance logging and physical badge swiping cause long delays and proxy check-in fraud in institutional facilities.",
    myApproach: "Engineered sub-second biometric check-in using OpenCV facial landmark extraction, precomputed 128D embeddings, Docker containerization, and GitHub Actions CI/CD workflows.",
    architectureDiagram: [
      "User / Visitor Camera Stream Input",
      "Authentication Shield Guard",
      "Flask Backend API Router",
      "OpenCV Facial Landmark Recognition Engine",
      "SQLite Persistent Database Store",
      "Docker Containerization & GitHub Actions CI/CD"
    ],
    features: [
      "Facial Recognition Attendance",
      "Visitor Registration",
      "Secure Authentication",
      "Attendance Analytics",
      "Role Based Access",
      "Admin Dashboard",
      "Dockerized Deployment",
      "CI/CD Automation"
    ],
    architecture: [
      "Camera Feed Input",
      "OpenCV Detection",
      "Embedding Matching",
      "Flask API Router",
      "SQLite Persistence",
      "Docker Deployment"
    ],
    technologyCategorized: [
      { category: "COMPUTER VISION", items: ["Python", "OpenCV", "Facial Embeddings"] },
      { category: "BACKEND & DB", items: ["Flask", "SQLite", "REST APIs"] },
      { category: "DEVSECOPS & CLOUD", items: ["Docker", "GitHub Actions", "AWS Ready"] }
    ],
    technology: ["Python", "Flask", "OpenCV", "SQLite", "Docker", "GitHub Actions", "HTML", "CSS", "JavaScript"],
    statistics: [
      { label: "Recognition Accuracy", value: "99%" },
      { label: "Deployment Structure", value: "Docker Enabled" },
      { label: "Infrastructure State", value: "Cloud Ready" }
    ],
    metricBlocks: [
      { value: "FACIAL RECOGNITION", label: "OPENCV VISION" },
      { value: "99% ACCURACY", label: "VERIFIED ACCURACY" },
      { value: "DOCKERIZED", label: "CONTAINER RUNTIME" },
      { value: "CI/CD AUTOMATION", label: "GITHUB ACTIONS" }
    ],
    image: "/projects/assets/images/attendance_system.jpg",
    links: {
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "An automated biometric check-in solution for schools, universities, or secure checkpoints. Users pass in front of a camera system and are authenticated in sub-second latency using pre-computed face embedding indexes.",
      problem: "Varying illumination in lobby areas drastically reduced basic OpenCV classification rates, while heavy CPU spikes degraded performance.",
      approach: "Implemented bilateral filtering, histogram equalization, and transformed face crops into 128-dimensional encodings matched via optimized matrix dot-products.",
      challenges: [
        { title: "Illumination Variance", desc: "Lobby lighting changes causing false negatives during peak morning hours." },
        { title: "CPU Resource Bottlenecks", desc: "Parsing uncompressed HD video frames directly through face detection cascades." }
      ],
      solutions: "Pre-processed lighting normalizations and optimized matrix dot-products across pre-computed feature vectors.",
      futureScope: "Integrating stereo-vision depth arrays to prevent static image spoofing and deploying to AWS EKS.",
      gallery: [
        "/projects/assets/images/attendance_system.jpg"
      ]
    }
  },
  {
    id: "sign-language",
    isComingSoon: true,
    title: "Sign Language Translation System",
    category: "COMPUTER VISION",
    categories: ["Computer Vision", "Accessibility", "AI"],
    description: "Designed a real-time sign language recognition system using MediaPipe and computer vision to enhance communication accessibility.",
    problemStatement: "Deaf and speech-impaired individuals encounter communication barriers in standard public services without sign language interpreters.",
    myApproach: "Formulated a 30 FPS visual translation framework using MediaPipe 3D hand tracking to extract 21 coordinate points and translate dynamic gestures instantly.",
    architectureDiagram: [
      "Webcam Visual Stream Input",
      "Video Frame Extractor",
      "MediaPipe Pipeline Core (21-Point Hand Skeleton)",
      "Dynamic Scale Normalizer (Wrist Distance Ratio)",
      "Gesture Classification ML Model",
      "Live Translated Text Stream Overlay"
    ],
    features: [
      "Real-Time Gesture Tracking",
      "3D Hand Landmark Detection",
      "Dual MediaPipe Models",
      "Computer Vision Transforms",
      "Accessibility Overlay Module",
      "Instant Text Translation"
    ],
    architecture: [
      "Webcam Feed",
      "Frame Processing",
      "MediaPipe 21-Points",
      "Distance Normalizer",
      "Classification Model",
      "Live Text Stream"
    ],
    technologyCategorized: [
      { category: "COMPUTER VISION & AI", items: ["Python", "MediaPipe", "OpenCV", "NumPy", "Scikit-Learn"] },
      { category: "UI & ACCESSIBILITY", items: ["Overlay Grid", "Real-Time Render"] }
    ],
    technology: ["Python", "MediaPipe", "OpenCV", "NumPy", "Scikit-Learn"],
    statistics: [
      { label: "Visual Latency", value: "<50ms" },
      { label: "Classification", value: "AI Vision" },
      { label: "Target Audience", value: "Accessible" }
    ],
    metricBlocks: [
      { value: "REAL-TIME", label: "PIPELINE STREAM" },
      { value: "30 FPS", label: "HIGH FRAME-RATE" },
      { value: "MediaPipe", label: "3D LANDMARK TRACKING" },
      { value: "COMPUTER VISION", label: "GESTURE CLASSIFICATION" }
    ],
    image: "/projects/assets/images/sign_language.jpg",
    links: {
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "An accessibility interface that maps hand expressions dynamically onto readable transcripts. Built to bridge communication divides by tracking joint angles and spatial movements of fingers in real-time.",
      problem: "Hand sizes and relative camera distances varied drastically as users moved closer to or further from the webcam, corrupting fixed-coordinate gesture models.",
      approach: "Transformed absolute hand keypoint coordinates into distance-invariant relative ratios computed against wrist reference landmarks.",
      challenges: [
        { title: "Proximity Variance", desc: "User distance from camera breaking static coordinate bounding boxes." },
        { title: "Frame-Rate Jitter", desc: "High frame drops during complex gesture sequences degrading translation fluency." }
      ],
      solutions: "Calculated wrist-relative vector normalizations to maintain consistent recognition accuracy across varied camera positions.",
      futureScope: "Introducing 3D skeleton maps for facial expressions and body posture for full ASL contextual processing.",
      gallery: [
        "/projects/assets/images/sign_language.jpg"
      ]
    }
  },
  {
    id: "face-recognition-ml",
    isComingSoon: true,
    title: "Face Recognition System",
    category: "COMPUTER VISION / MACHINE LEARNING",
    categories: ["Computer Vision", "Machine Learning", "Security"],
    description: "Implemented an intelligent face detection and recognition application using OpenCV and machine learning for identity verification.",
    problemStatement: "Legacy facial detectors suffer high failure rates when subject head angles rotate away from frontal angles or during shadow changes.",
    myApproach: "Utilized MTCNN 5-point facial landmark alignment (eyes, nose, mouth corners) to dynamically deskew facial frames before passing them into a 128D embedding generator and KNN classifier.",
    architectureDiagram: [
      "Camera Capture Feed",
      "Active Frame Buffering",
      "MTCNN Multi-Task Cascaded Face Detection",
      "5-Point Landmark Face Alignment",
      "128D Vector Embedding Generator",
      "K-Nearest Neighbors Identity Classifier",
      "Verified Entry Lock Output"
    ],
    features: [
      "Real-Time Scanner Stream",
      "Multi-Face Coordinates",
      "128D Face Embedding Computations",
      "Identity Verification",
      "Sub-80ms Inference",
      "MTCNN Facial Landmark Alignment"
    ],
    architecture: [
      "Camera Stream",
      "MTCNN Detection",
      "5-Point Alignment",
      "128D Embeddings",
      "KNN Classifier",
      "Verified Entry"
    ],
    technologyCategorized: [
      { category: "MACHINE LEARNING & CV", items: ["Python", "OpenCV", "MTCNN", "Scikit-Learn", "NumPy"] }
    ],
    technology: ["Python", "OpenCV", "Machine Learning", "NumPy", "Scikit-Learn"],
    statistics: [
      { label: "Scan Time", value: "<80ms" },
      { label: "System Accuracy", value: "98.7%" },
      { label: "Algorithm Base", value: "ML Powered" }
    ],
    metricBlocks: [
      { value: "SUB-80MS INFERENCE", label: "SCAN LATENCY" },
      { value: "98.7% ACCURACY", label: "CLASSIFICATION RATE" },
      { value: "MTCNN ALIGNMENT", label: "5-POINT LANDMARKS" },
      { value: "128D EMBEDDINGS", label: "VECTOR MATCHING" }
    ],
    image: "/projects/assets/images/face_recognition.jpg",
    links: {
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "A standalone identity verification utility that works at the edge. Capable of scanning high-speed video streams, it uses lightweight face-encoding algorithms to verify authorized members and log timestamps.",
      problem: "Side profile head tilts and sudden shadow occlusion bypassed traditional HAAR cascades.",
      approach: "Swapped HAAR classifiers with MTCNN (Multi-task Cascaded Convolutional Networks), performing 5-point face alignment to dynamically rotate faces before calculating embeddings.",
      challenges: [
        { title: "Head Rotation Skew", desc: "Non-frontal face angles causing key feature mismatches." },
        { title: "Sub-Second Latency Requirement", desc: "Parsing neural network alignment cascades without dropping video stream frames." }
      ],
      solutions: "Executed 5-point facial landmark transforms to normalize head rotation prior to vector distance comparison.",
      futureScope: "Integrating secure cloud sync protocols to automatically update matching indices across multiple edge terminals.",
      gallery: [
        "/projects/assets/images/face_recognition.jpg"
      ]
    }
  },
  {
    id: "hospital-portal",
    isComingSoon: true,
    title: "Hospital Management Portal",
    category: "FULL STACK",
    categories: ["Full Stack", "Healthcare", "Databases"],
    description: "Developed a web-based hospital management platform for efficient patient, appointment, and administrative management.",
    problemStatement: "Concurrent patient scheduling requests led to overlapping doctor appointment slots during busy hospital operational hours.",
    myApproach: "Built a transaction-safe full-stack portal using PHP and MySQL with InnoDB row-level locking to validate timetable availability before committing appointment slips.",
    architectureDiagram: [
      "Role-Based User Clients (Patients, Doctors, Admins)",
      "HTTP Session Security Guard",
      "PHP Controller & Routing Module",
      "Patient Record & Appointment Manager",
      "MySQL Multi-Table Relational Store (InnoDB Row Locks)",
      "Visual Analytics & Billing Report Generator"
    ],
    features: [
      "Patient Intake Registration",
      "Doctor Schedule Roster",
      "Appointment Calendar Sync",
      "Digital Health Records",
      "Invoicing & Reports",
      "Role-Based Dashboards"
    ],
    architecture: [
      "Role Clients",
      "PHP Controller",
      "Appointment Validator",
      "MySQL InnoDB Locks",
      "Billing Engine",
      "Analytics Dashboard"
    ],
    technologyCategorized: [
      { category: "FULL STACK WEB", items: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap"] },
      { category: "DATABASE & LOGISTICS", items: ["MySQL", "InnoDB Row Locking", "Relational Schemas"] }
    ],
    technology: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    statistics: [
      { label: "User Database", value: "10k+ Patients" },
      { label: "Layout Type", value: "Highly Responsive" },
      { label: "Data Structure", value: "MySQL Engine" }
    ],
    metricBlocks: [
      { value: "FULL STACK PORTAL", label: "HEALTHCARE LOGISTICS" },
      { value: "10K+ RECORDS", label: "DATABASE SCALE" },
      { value: "INNODB ROW LOCK", label: "ZERO DOUBLE-BOOKING" },
      { value: "MYSQL DB", label: "RELATIONAL ENGINE" }
    ],
    image: "/projects/assets/images/hospital_portal.jpg",
    links: {
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "An integrated healthcare logistics application that unites medical, billing, and scheduling workflows. Serves as a single source of truth for doctors logging diagnosis slips and patients checking slots.",
      problem: "Concurrent database operations caused overlapping appointment bookings for the same doctor at the same hour during peak loads.",
      approach: "Introduced MySQL transactions utilizing InnoDB row-level locking. Developed a validator that cross-references conflict lists within the transaction before finalizing patient records.",
      challenges: [
        { title: "Race Conditions on Slots", desc: "Simultaneous booking requests creating duplicate appointment records." },
        { title: "Role-Based Access Control", desc: "Enforcing strict data privacy boundaries between patients, doctors, and billing staff." }
      ],
      solutions: "Wrapped booking queries inside atomic SQL transactions with explicit row locking.",
      futureScope: "Building automated SMS alerts for patient queues and integrating a HIPAA-compliant encrypted video system.",
      gallery: [
        "/projects/assets/images/hospital_portal.jpg"
      ]
    }
  },
  {
    id: "hotel-reservation",
    isComingSoon: true,
    title: "Hotel Reservation System",
    category: "FULL STACK",
    categories: ["Full Stack", "Booking", "Databases"],
    description: "Designed a reservation management application to simplify hotel booking, customer management, and room allocation.",
    problemStatement: "Dynamic seasonal pricing and real-time room availability matrix queries created database performance bottlenecks.",
    myApproach: "Optimized database schemas through normalization, indexed booking timestamps, and integrated Memcached to serve real-time room matrices instantly.",
    architectureDiagram: [
      "Customer Booking Frontend UI",
      "Secure Router Shield",
      "Booking Engine Controller",
      "Room Matrix Coordinator",
      "Memcached Query Acceleration Layer",
      "MySQL Relational Database System"
    ],
    features: [
      "Interactive Room Grid",
      "Booking Lifecycle Logic",
      "Customer Profile Records",
      "Secure Transaction Logs",
      "Live Room Availability",
      "Analytics Revenue Charts"
    ],
    architecture: [
      "Customer Frontend",
      "Booking Engine",
      "Memcached Layer",
      "MySQL Database",
      "Admin Analytics"
    ],
    technologyCategorized: [
      { category: "FULL STACK WEB", items: ["HTML5", "CSS3", "JavaScript", "PHP"] },
      { category: "DATABASE & CACHING", items: ["MySQL", "Memcached", "Relational Schemas"] }
    ],
    technology: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    statistics: [
      { label: "Booking Speed", value: "Instant Booking" },
      { label: "Core Database", value: "Relational SQL" },
      { label: "User Interface", value: "Responsive Grids" }
    ],
    metricBlocks: [
      { value: "REAL-TIME GRID", label: "ROOM MATRIX" },
      { value: "DYNAMIC PRICING", label: "AUTOMATED RATES" },
      { value: "MEMCACHED CACHE", label: "FAST RESPONSE" },
      { value: "SQL ENGINE", label: "STRUCTURED DB" }
    ],
    image: "/projects/assets/images/hotel_reservation.jpg",
    links: {
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "A dedicated reservation command center. Room state triggers are updated automatically, letting checkout managers track active bookings, handle cleanings, and audit invoices.",
      problem: "Dynamic price calculations based on weekend rates and holiday seasons resulted in slow MySQL query times.",
      approach: "Optimized database schemas by normalizing rates, indexing booking timestamps, and using Memcached to cache room configurations.",
      challenges: [
        { title: "Dynamic Rate Computation", desc: "Recalculating room tariffs dynamically during seasonal date ranges caused query latency." },
        { title: "Grid State Sync", desc: "Updating room availability states across concurrent admin and customer sessions." }
      ],
      solutions: "Cached calculated room matrices in Memcached with automatic invalidation triggers on status update.",
      futureScope: "Integrating IoT smart locks that send temporary QR-code door keys directly to customers' emails upon booking.",
      gallery: [
        "/projects/assets/images/hotel_reservation.jpg"
      ]
    }
  }
];
