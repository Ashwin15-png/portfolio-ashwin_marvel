import React, { useState, useEffect } from "react";
import { 
  Search, 
  ExternalLink, 
  X, 
  ArrowLeft, 
  Filter,
  Layers,
  Cpu,
  Server,
  Zap,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "./projectsData";
import type { Project } from "./projectsData";

// Helper for resolving image path based on dynamic React Router/Vite BASE_URL
const getImageUrl = (path: string) => {
  if (path.startsWith("/projects/")) {
    return import.meta.env.BASE_URL + path.replace("/projects/", "");
  }
  return path;
};

// Custom SVG Github icon
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.2 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Card Component with upgraded visual hierarchy & metric blocks
interface CardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      className="glass-card gradient-border-anim rounded-2xl relative flex flex-col justify-between overflow-hidden group cursor-pointer border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl hover:shadow-indigo-500/10"
      onClick={() => {
        if (project.links.caseStudy && project.links.caseStudy.endsWith(".html")) {
          window.location.href = project.links.caseStudy;
        } else {
          onOpenModal(project);
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Graphic / Real Project Screenshot */}
      <div className="relative h-56 overflow-hidden w-full bg-slate-950 border-b border-white/10">
        <img
          src={getImageUrl(project.image)}
          loading="lazy"
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-80" />
        
        {/* Category & Status badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap max-w-[90%] z-10">
          {project.isFlagship && (
            <span className="bg-indigo-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/40 text-[10px] font-bold text-indigo-300 tracking-wider uppercase font-mono shadow-[0_0_10px_rgba(99,102,241,0.3)]">
              ⭐ FLAGSHIP #{project.flagshipRank}
            </span>
          )}
          {project.isOngoing && (
            <span className="bg-amber-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[10px] font-bold text-amber-300 tracking-wider uppercase font-mono shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              ● ACTIVE DEVELOPMENT
            </span>
          )}
          {project.isComingSoon && (
            <span className="bg-slate-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-slate-500/40 text-[10px] font-bold text-slate-300 tracking-wider uppercase font-mono">
              ● COMING SOON
            </span>
          )}
          <span className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-semibold text-slate-300 tracking-wider uppercase font-mono">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <h4 className="text-xl font-extrabold text-white mb-2 leading-tight tracking-tight group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-slate-400 text-xs md:text-sm line-clamp-3 mb-3 leading-relaxed font-light">
            {project.problemStatement || project.description}
          </p>
        </div>

        {/* Visual Metric Row Blocks */}
        {project.metricBlocks && project.metricBlocks.length > 0 && (
          <div className="grid grid-cols-2 gap-2 my-2">
            {project.metricBlocks.slice(0, 2).map((mb, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-center">
                <div className="text-white text-xs md:text-sm font-extrabold font-mono tracking-tight text-gradient bg-gradient-to-r from-white via-indigo-200 to-slate-300 bg-clip-text text-transparent">
                  {mb.value}
                </div>
                <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                  {mb.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technology.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300"
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

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (project.links.caseStudy && project.links.caseStudy.endsWith(".html")) {
                window.location.href = project.links.caseStudy;
              } else {
                onOpenModal(project);
              }
            }}
            className="flex-1 py-2 px-3 rounded-lg bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 text-indigo-300 hover:text-white text-[11px] font-bold font-mono uppercase tracking-wider transition flex items-center justify-center gap-1 group/btn cursor-pointer"
          >
            <span>Case Study</span>
            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 text-[11px] font-bold font-mono uppercase tracking-wider transition flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 transition cursor-pointer"
              title="GitHub Codebase"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Rich Case Study Modal Component
interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const DetailModal: React.FC<ModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#0b0c10] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.9)] z-10 overflow-hidden max-h-[92vh] flex flex-col text-slate-100"
        >
          {/* Header Action Bar */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scroll Body */}
          <div className="overflow-y-auto flex-grow scrollbar-thin p-6 md:p-10 space-y-10">
            
            {/* Header Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 h-64 md:h-80">
              <img
                src={getImageUrl(project.image)}
                alt={project.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-bold font-mono tracking-widest text-indigo-300 uppercase">
                    {project.category}
                  </span>
                  {project.isFlagship && (
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-[10px] font-bold font-mono tracking-widest text-amber-300 uppercase">
                      ⭐ FLAGSHIP CASE STUDY
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Visual Evidence Row / Metrics Banner */}
            {project.metricBlocks && project.metricBlocks.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
                {project.metricBlocks.map((mb, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-lg md:text-xl font-extrabold font-mono text-white text-gradient bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent">
                      {mb.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                      {mb.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 1. PROBLEM SECTION */}
            <div className="p-6 md:p-8 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-400">
                <AlertCircle className="w-4 h-4" />
                <span>// 1. THE PROBLEM</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">What real-world problem does this solve?</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                {project.problemStatement || project.modalDetails.problem || project.modalDetails.overview}
              </p>
            </div>

            {/* 2. MY APPROACH SECTION */}
            <div className="p-6 md:p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>// 2. MY TECHNICAL APPROACH</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">Engineering Strategy &amp; Solution Design</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                {project.myApproach || project.modalDetails.approach || project.modalDetails.solutions}
              </p>
            </div>

            {/* 3. ARCHITECTURE SECTION */}
            <div className="p-6 md:p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
                <Layers className="w-4 h-4" />
                <span>// 3. SYSTEM ARCHITECTURE</span>
              </div>
              
              {/* Architecture Steps Flow */}
              <div className="space-y-3 font-mono text-xs md:text-sm">
                {(project.architectureDiagram || project.architecture).map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-slate-200 w-full whitespace-pre-line leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. ENGINEERING CHALLENGES */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>// 4. ENGINEERING CHALLENGES RESOLVED</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {Array.isArray(project.modalDetails.challenges) ? (
                  project.modalDetails.challenges.map((ch, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                      <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">CHALLENGE 0{idx + 1}</div>
                      <h4 className="text-white font-bold text-sm">{ch.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">{ch.desc}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 col-span-3">
                    <p className="text-slate-300 text-xs leading-relaxed">{project.modalDetails.challenges}</p>
                  </div>
                )}
              </div>
            </div>

            {/* 5. TECH STACK CATEGORIZED */}
            <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                <Server className="w-4 h-4" />
                <span>// 5. TECHNOLOGIES USED</span>
              </div>
              {project.technologyCategorized ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {project.technologyCategorized.map((tc, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <div className="text-[10px] font-mono text-purple-300 uppercase tracking-widest font-bold">
                        {tc.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {tc.items.map((item) => (
                          <span key={item} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 6. RESULT / EVIDENCE */}
            <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">// 6. VERIFIED IMPLEMENTATION EVIDENCE</div>
                <h4 className="text-lg font-bold text-white">Production-Ready &amp; Fully Functional Codebase</h4>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-initial py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold font-mono tracking-wider uppercase transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-initial py-3 px-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 text-xs font-bold font-mono tracking-wider uppercase transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Explore Repository</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Main Projects Workspace Hub Component
const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Newest");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterCategories = [
    "All",
    "Industrial IoT",
    "Predictive Maintenance",
    "AI",
    "Full Stack",
    "Computer Vision",
    "Cloud",
    "Healthcare",
    "Speech ML"
  ];

  const cleanQuery = searchQuery.trim().toLowerCase();

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.categories.some((c) => c.toLowerCase() === selectedCategory.toLowerCase());

    const matchesSearch =
      cleanQuery === "" ||
      project.title.toLowerCase().includes(cleanQuery) ||
      project.description.toLowerCase().includes(cleanQuery) ||
      project.technology.some((t) => t.toLowerCase().includes(cleanQuery));

    return matchesCategory && matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.isFlagship && b.isFlagship) {
      return (a.flagshipRank || 99) - (b.flagshipRank || 99);
    }
    if (a.isFlagship && !b.isFlagship) return -1;
    if (!a.isFlagship && b.isFlagship) return 1;

    if (sortBy === "Alphabetical") return a.title.localeCompare(b.title);
    if (sortBy === "Category") return a.category.localeCompare(b.category);
    return 0; 
  });

  return (
    <div className="relative min-h-screen bg-[#070709] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Background Blobs & Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />

      {/* Floating Header */}
      <nav className="fixed w-full top-0 left-0 z-40 px-6 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3.5 rounded-full">
          <a
            href="/"
            className="flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-slate-400 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PORTFOLIO</span>
          </a>

          <div className="text-sm font-extrabold tracking-tight uppercase font-mono">
            S <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ashwin Kumar</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-10 px-6 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-mono text-xs mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>PORTFOLIO PROJECTS HUB</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Engineering Work</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Production-ready Full Stack, AI/ML, Cloud Systems, and Computer Vision implementations built to solve real-world problems.
        </p>
      </header>

      {/* Controls Bar & Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full z-20 space-y-6 pb-20">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search stack, project, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-slate-100 text-sm placeholder-slate-500 outline-none focus:border-indigo-500/50 transition"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Sort By</span>
            <div className="flex bg-black/60 border border-white/10 rounded-xl p-1">
              {["Newest", "Alphabetical", "Category"].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition cursor-pointer ${
                    sortBy === option
                      ? "bg-indigo-600 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="overflow-x-auto pb-2 scrollbar-none">
          <div className="flex flex-nowrap gap-2 min-w-max">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider uppercase transition cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-indigo-600/30 border-indigo-500 text-indigo-300"
                    : "bg-black/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {sortedProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {sortedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setActiveModalProject}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl border border-dashed border-white/10">
            <Filter className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No Projects Found</h4>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              No project matches your search query or category filter. Try clearing filters.
            </p>
          </div>
        )}
      </section>

      {/* Case Study Modal */}
      <DetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};

export default App;
