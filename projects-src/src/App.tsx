import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  ExternalLink, 
  Cpu, 
  Database, 
  Server, 
  Zap, 
  X, 
  ArrowLeft, 
  Shield, 
  Eye, 
  Code2, 
  BarChart2, 
  TrendingUp, 
  Inbox, 
  Filter 
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { projectsData } from "./projectsData";
import type { Project } from "./projectsData";

// Helper for resolving image path based on dynamic React Router/Vite BASE_URL
const getImageUrl = (path: string) => {
  if (path.startsWith("/projects/")) {
    return import.meta.env.BASE_URL + path.replace("/projects/", "");
  }
  return path;
};

// Custom SVG Github icon for bulletproof dependency matching
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.2 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Map feature strings to modern Lucide icons
const getFeatureIcon = (feature: string) => {
  const f = feature.toLowerCase();
  if (f.includes("auth") || f.includes("secure") || f.includes("role")) return <Shield className="w-5 h-5 text-indigo-400" />;
  if (f.includes("face") || f.includes("recognition") || f.includes("detector") || f.includes("tracking") || f.includes("eye")) return <Eye className="w-5 h-5 text-blue-400" />;
  if (f.includes("database") || f.includes("sqlite") || f.includes("mysql") || f.includes("records")) return <Database className="w-5 h-5 text-purple-400" />;
  if (f.includes("docker") || f.includes("cloud") || f.includes("deployment") || f.includes("ci/cd")) return <Server className="w-5 h-5 text-emerald-400" />;
  if (f.includes("analytics") || f.includes("dashboard") || f.includes("report") || f.includes("stat")) return <BarChart2 className="w-5 h-5 text-pink-400" />;
  if (f.includes("api") || f.includes("fastapi") || f.includes("flask") || f.includes("engine")) return <Cpu className="w-5 h-5 text-amber-400" />;
  if (f.includes("real-time") || f.includes("latency") || f.includes("fast") || f.includes("instant")) return <Zap className="w-5 h-5 text-yellow-400" />;
  if (f.includes("ocr") || f.includes("text") || f.includes("extraction") || f.includes("code")) return <Code2 className="w-5 h-5 text-teal-400" />;
  return <Zap className="w-5 h-5 text-indigo-400" />;
};

// Animated Number Counter Component
const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 1.2 }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const animateValue = () => {
    const numericMatches = value.match(/\d+(\.\d+)?/);
    if (!numericMatches) {
      setDisplayValue(value);
      return;
    }
    const target = parseFloat(numericMatches[0]);
    const isFloat = numericMatches[0].includes(".");
    const prefix = value.split(/\d+/)[0] || "";
    const suffix = value.split(/\d+/)[1] || "";
    
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * target;
      
      const formatted = isFloat ? current.toFixed(1) : Math.floor(current).toString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return <span ref={ref}>{displayValue}</span>;
};

// Tilt spotlight Card Component
interface CardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D tilt effect
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const rotateX = useSpring(useTransform(cardY, [-0.5, 0.5], [10, -10]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(cardX, [-0.5, 0.5], [-10, 10]), { stiffness: 250, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates relative to card center (-0.5 to 0.5)
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    cardX.set(relativeX);
    cardY.set(relativeY);

    // CSS variables for spotlight glow locator
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass-card gradient-border-anim rounded-2xl relative flex flex-col justify-between overflow-hidden group cursor-pointer h-[560px]"
      onClick={() => onOpenModal(project)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 3D Inner Container for Parallax effect */}
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full z-10">
        
        {/* Project Image Panel */}
        <div className="relative h-52 overflow-hidden w-full bg-slate-900 border-b border-white/5">
          <img
            src={getImageUrl(project.image)}
            loading="lazy"
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out brightness-90 group-hover:brightness-100"
          />
          {/* Spotlight overlay backer */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: "radial-gradient(150px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(99, 102, 241, 0.15) 0%, transparent 80%)"
            }}
          />
          {/* Category Pill overlay */}
          <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-semibold text-slate-330 tracking-wider uppercase font-mono">
            {project.category}
          </div>
        </div>

        {/* Card Content details */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-white mb-3 mt-1 leading-tight tracking-tight group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h4>
            <p className="text-slate-400 text-sm line-clamp-3 mb-4 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-1.5 mb-5 max-h-20 overflow-hidden">
              {project.technology.slice(0, 4).map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-0.5 rounded bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-indigo-500/20 text-[10px] font-medium font-mono text-indigo-300 tracking-wide"
                >
                  {tech}
                </span>
              ))}
              {project.technology.length > 4 && (
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                  +{project.technology.length - 4}
                </span>
              )}
            </div>
            
            {/* Statistics Dashboard Panel */}
            <div className="grid grid-cols-3 gap-2 bg-black/30 border border-white/5 rounded-xl p-3 mb-1">
              {project.statistics.slice(0, 3).map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none mb-1">
                    {stat.label.split(" ").pop()}
                  </div>
                  <div className="text-white text-xs font-bold font-mono tracking-tight text-gradient bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight highlight over boundaries */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(99, 102, 241, 0.04) 0%, transparent 60%)"
        }}
      />
    </motion.div>
  );
};

// Detailed Expandable Modal Component
interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const DetailModal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    // Lock scroll when open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#0d0d12] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] z-10 overflow-hidden max-h-[90vh] flex flex-col text-slate-100"
        >
          {/* Sticky Header Actions */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-black/55 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scroll Body */}
          <div className="overflow-y-auto flex-grow scrollbar-thin">
            
            {/* Cover Banner */}
            <div className="relative h-64 md:h-96 w-full bg-slate-950">
              <img
                src={getImageUrl(project.image)}
                alt={project.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-bold font-mono tracking-widest text-indigo-400 uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3 tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Content Column Grid */}
            <div className="p-6 md:p-10 grid md:grid-cols-12 gap-8 md:gap-12">
              
              {/* Left Column (Details, Challenges, Solutions, Timeline) */}
              <div className="md:col-span-8 space-y-10">
                
                {/* Section: Overview */}
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-400 mb-3">// OVERVIEW</h4>
                  <p className="text-slate-350 text-base md:text-lg leading-relaxed font-light">
                    {project.modalDetails.overview}
                  </p>
                </div>

                {/* Section: Unique Features */}
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-teal-400 mb-4">// UNIQUE FEATURES</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3 items-start hover:bg-white/[0.04] transition"
                      >
                        <div className="mt-0.5 shrink-0">
                          {getFeatureIcon(feature)}
                        </div>
                        <p className="text-slate-300 text-sm font-light">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Architecture Timeline */}
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400 mb-6">// DETAILED ARCHITECTURE TIMELINE</h4>
                  <div className="pl-2 border-l border-white/5 space-y-6 relative">
                    {project.architecture.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-4 relative pl-6 group/timeline"
                      >
                        {/* Bullet point nodes */}
                        <div className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover/timeline:bg-indigo-500 transition-colors shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                        <div className="py-2 px-4 rounded-xl bg-white/[0.02] border border-white/5 text-slate-300 text-sm font-semibold font-mono uppercase tracking-wider select-none hover:bg-white/[0.04] transition">
                          {step}
                        </div>
                        {idx < project.architecture.length - 1 && (
                          <div className="absolute right-0 text-slate-650 text-xs"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Section: Challenges vs Solutions */}
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full filter blur-xl group-hover:scale-125 transition" />
                    <span className="inline-flex px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-[9px] font-mono text-red-500 uppercase tracking-widest font-bold mb-3">
                      Obstacles
                    </span>
                    <h5 className="text-white font-bold text-base mb-2">Technical Challenges</h5>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {project.modalDetails.challenges}
                    </p>
                  </div>

                  <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full filter blur-xl group-hover:scale-125 transition" />
                    <span className="inline-flex px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono text-emerald-550 uppercase tracking-widest font-bold mb-3">
                      Resolved
                    </span>
                    <h5 className="text-white font-bold text-base mb-2">Engineering Solutions</h5>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {project.modalDetails.solutions}
                    </p>
                  </div>
                </div>

                {/* Section: Future Scope */}
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-purple-400 mb-3">// ROADMAP & FUTURE SCOPE</h4>
                  <div className="bg-[#12121e] border border-purple-500/10 rounded-2xl p-5 md:p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-350 text-sm leading-relaxed font-light">
                        {project.modalDetails.futureScope}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Sidebar, Stats, Tech stacks) */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Stats Panel */}
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 space-y-4">
                  <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">// Key Metrics</h5>
                  <div className="space-y-4">
                    {project.statistics.map((stat, i) => (
                      <div key={i} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                          {stat.label}
                        </div>
                        <div className="text-white text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6">
                  <h5 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-4">// Technologies Installed</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 hover:border-indigo-500/40 hover:bg-white/[0.05] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-col gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold tracking-wider uppercase transition shadow-[0_8px_20px_rgba(79,70,229,0.3)] cursor-pointer"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 text-sm font-bold tracking-wider uppercase transition cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Explore Codebase</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer space */}
            <div className="h-10" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Main Projects Hub App Component
const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>(" ");
  const [sortBy, setSortBy] = useState<string>("Newest");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Derive categories list dynamically
  const filterCategories = [
    "All",
    "AI",
    "Full Stack",
    "Computer Vision",
    "Cloud",
    "Healthcare",
    "Machine Learning",
    "Accessibility"
  ];

  // Clean empty input queries
  const cleanQuery = searchQuery.trim().toLowerCase();

  // Filter projects logic
  const filteredProjects = projectsData.filter((project) => {
    // 1. Category search
    const matchesCategory =
      selectedCategory === "All" ||
      project.categories.some((c) => c.toLowerCase() === selectedCategory.toLowerCase());

    // 2. Text Search index
    const matchesSearch =
      cleanQuery === "" ||
      project.title.toLowerCase().includes(cleanQuery) ||
      project.description.toLowerCase().includes(cleanQuery) ||
      project.technology.some((t) => t.toLowerCase().includes(cleanQuery)) ||
      project.features.some((f) => f.toLowerCase().includes(cleanQuery));

    return matchesCategory && matchesSearch;
  });

  // Sort projects logic
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "Alphabetical") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "Category") {
      return a.category.localeCompare(b.category);
    }
    // Default: Newest or array order
    return 0; 
  });

  return (
    <div className="relative min-h-screen grid-bg-overlay pb-24 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* Noise Texture layer */}
      <div className="noise-overlay" />

      {/* Parallax Blobs layer */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Floating Header */}
      <nav className="fixed w-full top-0 left-0 z-40 px-6 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/5 px-6 py-3.5 rounded-full">
          <a
            href="/"
            className="flex items-center gap-2 group text-xs font-bold font-mono tracking-widest text-[#a1a1aa] hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN HOME</span>
          </a>

          <div className="text-sm font-extrabold tracking-tighter uppercase font-mono">
            S <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ashwin Kumar</span>
          </div>
        </div>
      </nav>

      {/* Hub Hero Heading */}
      <header className="pt-36 pb-12 px-6 max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 mono text-xs mb-8"
        >
          <Filter className="w-3.5 h-3.5" />
          <span>PROJECTS WORKSPACE HUB</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-slate-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
        >
          A collection of AI, Full Stack, Computer Vision, and Cloud projects focused on solving real-world problems with scalable architecture and modern technologies.
        </motion.p>
      </header>

      {/* Analytics Workspace Controls */}
      <section className="px-6 max-w-7xl mx-auto w-full z-20 space-y-6">
        
        {/* Hub Bar (Search + Sort) */}
        <div className="bg-black/30 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Area */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition" />
            <input
              type="text"
              placeholder="Search stack, keys, keyword..."
              value={searchQuery === " " ? "" : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-slate-100 text-sm placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:bg-white/[0.04] transition"
            />
          </div>

          {/* Sort selection */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Sort By</span>
            <div className="flex bg-black/40 border border-white/5 rounded-xl p-1">
              {["Newest", "Alphabetical", "Category"].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition cursor-pointer ${
                    sortBy === option
                      ? "bg-indigo-600 text-white"
                      : "text-slate-400 hover:text-slate-205"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Tab line */}
        <div className="overflow-x-auto pb-2 scrollbar-none">
          <div className="flex flex-nowrap gap-2 min-w-max">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider uppercase transition cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-indigo-550/20 border-indigo-500 text-indigo-300"
                    : "bg-black/20 border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid listing */}
        <AnimatePresence mode="popLayout">
          {sortedProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4"
            >
              {sortedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setActiveModalProject}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="py-24 text-center glass-card rounded-2xl border-dashed border-white/10"
            >
              <Inbox className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-1">No Projects Found</h4>
              <p className="text-slate-500 text-sm max-w-sm mx-auto">
                No matching projects fits your category filter or search keyword. Try modifying your criteria.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Case Study Overlay Drawer/Modal */}
      <DetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </div>
  );
};

export default App;
