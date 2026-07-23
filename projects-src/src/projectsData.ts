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
}

export const projectsData: Project[] = [
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
    title: "Prescription Extractor",
    category: "AI / OCR",
    categories: ["AI", "Healthcare", "OCR"],
    description: "Built an AI-powered healthcare solution that extracts structured medical information from prescriptions using OCR, NLP, OpenCV, and FastAPI while improving data accessibility and accuracy.",
    features: [
      "AI OCR Handwriting parsing",
      "Active Medicine Detection",
      "Dosage & Roster Parsing",
      "Patient Info Isolation",
      "FastAPI Endpoint Suite",
      "Advanced Preprocessing Filters",
      "Structured JSON Export",
      "Medical Term Authentication",
      "Prescription History Archival",
      "High Recognition Efficiency"
    ],
    architecture: [
      "Prescription Image Input",
      "OpenCV Adaptive Image Scaling",
      "EasyOCR Scan Engine",
      "Raw Extracted Text Stream",
      "SpaCy Named Entity Recognition (NER)",
      "Medicine and Dosage Matcher",
      "FastAPI Rest Endpoint Service",
      "JSON Response Output",
      "Frontend Analytics Dashboard"
    ],
    technology: ["Python", "FastAPI", "OpenCV", "EasyOCR", "NLP", "JSON"],
    statistics: [
      { label: "OCR Accuracy", value: "95%" },
      { label: "Backend Engine", value: "FastAPI" },
      { label: "Engine Type", value: "Healthcare AI" }
    ],
    image: "/projects/assets/images/prescription_extractor.jpg",
    links: {
      demo: "https://github.com/Ashwin15-png",
      github: "https://github.com/Ashwin15-png"
    },
    modalDetails: {
      overview: "A specialized healthcare text scanner extracting structured drug information, patient details, and dosing directions. This pipeline parses doctor notes and populates inventory sheets directly, reducing errors in pharmacy logs.",
      challenges: "Poor light conditions, cursive writing variability, and low resolution sensor uploads from mobile devices corrupted character segmentation.",
      solutions: "Created a pipeline of adaptive thresholding, denoisers, and Deskew filters to crop and clean images before passing to OCR. Implemented fuzzy matching against a standard pharmacopeia vocabulary library to automatically repair misspelled medicine titles.",
      futureScope: "Cross-referencing global drug interaction tables to issue immediate warnings for dangerous allergy matches directly on the dashboard.",
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
