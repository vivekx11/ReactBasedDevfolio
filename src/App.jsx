// basic react file it is 
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ExternalLink,
  Mail,
  Download,
  Terminal,
  Code2,
  BookOpen,
  Send,
  User,
  Quote,
  Moon,
  Sun,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Layers,
  Database,
  Cpu,
  Palette,
  Clock,
  MapPin,
  Phone,
  Heart,
  ChevronUp,
  Star,
  Briefcase,
  GraduationCap,
  Coffee,
  Gamepad2,
  Plane,
  Monitor,
  Smartphone,
  Menu,
  X
} from 'lucide-react';
import { 
  SiAstro, SiSvelte, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiReact, SiVuedotjs, SiHtml5, SiJavascript,
  SiNodedotjs, SiPython, SiFastapi, SiNestjs, SiGraphql, SiMongodb,
  SiOpenai, SiGit, SiVercel, SiAnthropic, SiGooglegemini
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import './App.css';
gsap.registerPlugin(ScrollTrigger);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Game State
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const containerRef = useRef(null);
  
  // Interactive experience section state.
  const [activeExp, setActiveExp] = useState(0);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleTicTacClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TechCorp Inc.",
      duration: "2026 - PRESENT",
      description: "Led the development of a customer-facing dashboard serving 50K+ daily users. Built scalable React + Node.js features, optimised SQL queries reducing load times by 40%, and implemented CI/CD pipelines for seamless deployment.",
      responsibilities: [
        "Architected micro-frontend modules with React & TypeScript",
        "Designed RESTful APIs handling 10K+ requests/minute",
        "Implemented real-time WebSocket notifications",
        "Mentored 3 junior developers on best practices"
      ],
      techUsed: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"]
    },
    {
      title: "Web Development Intern",
      company: "StartupX",
      duration: "2025",
      description: "Contributed to an early-stage SaaS platform by building reusable UI components and assisting in backend API development. Gained hands-on experience with agile workflows and code reviews.",
      responsibilities: [
        "Built 15+ reusable React components for the design system",
        "Integrated third-party payment gateway APIs",
        "Wrote unit tests achieving 85% code coverage",
        "Participated in daily standups and sprint planning"
      ],
      techUsed: ["React", "Express.js", "MongoDB", "Jest", "Figma"]
    },
    {
      title: "Frontend Projects",
      company: "Personal Work",
      duration: "2024",
      description: "Built a portfolio of responsive websites and interactive web applications from scratch, focusing on performance, accessibility, and modern design patterns.",
      responsibilities: [
        "Developed 10+ responsive websites from design to deployment",
        "Implemented complex CSS animations and transitions",
        "Built interactive games using vanilla JavaScript",
        "Explored PWA development and offline-first strategies"
      ],
      techUsed: ["HTML", "CSS", "JavaScript", "GSAP", "Firebase"]
    },
    {
      title: "Programming Student",
      company: "College",
      duration: "2023",
      description: "Built a strong foundation in computer science fundamentals, data structures, and algorithms. Completed coursework in OOP, database management, and software engineering principles.",
      responsibilities: [
        "Completed 200+ coding challenges on LeetCode & HackerRank",
        "Built a library management system as a semester project",
        "Studied data structures, algorithms, and OOP concepts",
        "Participated in college hackathon — placed top 5"
      ],
      techUsed: ["C++", "Java", "Python", "MySQL", "Git"]
    }
  ];

  const projects = [
    {
      tag: "MEMORY GAME",
      title: "Memory Game",
      description: "Interactive memory game with animated cards, streak tracking and saved scores via browser storage.",
      tech: ["JavaScript", "CSS Animations", "HTML"],
      github: "https://github.com/vivekx11/memorygame",
      demo: "https://vivekx11.github.io/memorygame/",
      img: "https://images.unsplash.com/photo-1611996575749-79a3a250f56e?auto=format&fit=crop&q=80&w=800"
    },
    {
      tag: "EVENT PLATFORM",
      title: "College Event Platform",
      description: "Responsive event portal with registration, schedules and admin tools powered by a full stack React + Node.js setup.",
      tech: ["React", "Node.js", "SQL"],
      github: "https://github.com/vivekx11/CODETECH",
      demo: "https://vivekx11.github.io/CODETECH/",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
    },
    {
      tag: "MINDFULNESS",
      title: "Mindfulness App",
      description: "Android app offering breathing exercises, timers and progress tracking with Firebase-backed auth and storage.",
      tech: ["Kotlin", "Android Studio", "Firebase"],
      github: "https://github.com/vivekx11/Mindfullness",
      demo: "https://vivekx11.github.io/Mindfullness/",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const blogs = [
    {
      category: "REACT * HOOKS",
      title: "Mastering React Hooks",
      description: "Practical patterns with useState, useEffect and custom hooks to keep components predictable and clean.",
      readTime: "8 min read",
      date: "Mar 10, 2026",
      icon: <Zap size={20} />
    },
    {
      category: "NODE.JS * APIS",
      title: "Building Scalable Node.js APIs",
      description: "Using Express, modular routing and middleware to design predictable, extendable REST services.",
      readTime: "12 min read",
      date: "Feb 25, 2026",
      icon: <Database size={20} />
    },
    {
      category: "TRENDS",
      title: "Future of Web Development",
      description: "Exploring Web3, AI integrations and how PWAs are reshaping experience design.",
      readTime: "6 min read",
      date: "Feb 14, 2026",
      icon: <Globe size={20} />
    }
  ];

  const testimonials = [
    {
      quote: "Vivek shipped a critical feature ahead of schedule with excellent attention to detail and testing.",
      name: "John Doe",
      role: "CEO, TechCorp"
    },
    {
      quote: "He contributed clean, reusable components and proposed ideas that improved our web app's UX.",
      name: "Jane Smith",
      role: "Project Manager, StartupX"
    },
    {
      quote: "Vivek's full-stack knowledge helped us scale the platform without sacrificing performance.",
      name: "Sumit Yadav",
      role: "Freelance Client"
    }
  ];

  const skillCategories = [
    {
      name: "Featured",
      skills: [
        { name: "Astro", icon: <SiAstro size={16} /> },
        { name: "SvelteKit", icon: <SiSvelte size={16} /> },
        { name: "Next.js", icon: <SiNextdotjs size={16} /> },
        { name: "TypeScript", icon: <SiTypescript size={16} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={16} /> }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <SiReact size={16} /> },
        { name: "Vue", icon: <SiVuedotjs size={16} /> },
        { name: "Svelte", icon: <SiSvelte size={16} /> },
        { name: "HTML", icon: <SiHtml5 size={16} /> },
        { name: "CSS", icon: <FaCss3Alt size={16} /> },
        { name: "JavaScript", icon: <SiJavascript size={16} /> }
      ]
    },
    {
      name: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={16} /> },
        { name: "Python", icon: <SiPython size={16} /> },
        { name: "FastAPI", icon: <SiFastapi size={16} /> },
        { name: "NestJS", icon: <SiNestjs size={16} /> },
        { name: "GraphQL", icon: <SiGraphql size={16} /> },
        { name: "MongoDB", icon: <SiMongodb size={16} /> }
      ]
    },
    {
      name: "AI & Dev Tools",
      skills: [
        { name: "Claude Code", icon: <SiAnthropic size={16} /> },
        { name: "Gemini", icon: <SiGooglegemini size={16} /> },
        { name: "Perplexity", icon: <Sparkles size={16} /> },
        { name: "OpenAI", icon: <SiOpenai size={16} /> },
        { name: "VS Code", icon: <VscVscode size={16} /> },
        { name: "Git", icon: <SiGit size={16} /> },
        { name: "Vercel", icon: <SiVercel size={16} /> }
      ]
    }
  ];

  useEffect(() => {
    // Set default dark theme
    document.documentElement.setAttribute('data-theme', theme);

    // Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Clock interval
    const timer = setInterval(() => {
      let d = new Date();
      setTime(d.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    // Custom Cursor logic
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power3.out" });
      gsap.to(cursorDotRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
    };

    const handleHover = () => {
      cursorRef.current?.classList.add('hovering');
      cursorDotRef.current?.classList.add('hovering');
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove('hovering');
      cursorDotRef.current?.classList.remove('hovering');
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add hover states for cursor
    const interactiveElements = document.querySelectorAll('a, button, .project-frame, .skill-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Initial load animations
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title-text span', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "power4.out" }
    )
    .fromTo('.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.7"
    )
    .fromTo('.hero-name-text span',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: "power4.out" },
      "-=0.7"
    )
    .fromTo('.hero-bio',
      { x: -30, opacity: 0, filter: "blur(10px)" },
      { x: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo('.badge',
      { scale: 0.8, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.8"
    );

    // Setup Scroll Animations to trigger organically via smooth scrolling
    gsap.utils.toArray('.scroll-fade-up').forEach((el) => {
      gsap.fromTo(el, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate skill bars when they come into view
    gsap.utils.toArray('.skill-bar-fill').forEach((bar) => {
      gsap.fromTo(bar, 
        { width: '0%' },
        {
          width: bar.getAttribute('data-width'),
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Counter animation for stats
    gsap.utils.toArray('.stat-number').forEach((el) => {
      const target = parseInt(el.getAttribute('data-count'));
      gsap.fromTo(el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', moveCursor);
      lenis.destroy();
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Split text helper for animation
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>

      {/* Background Layers */}
      <div className="noise-overlay"></div>
      <div className="glow-bg"></div>

      {/* Navbar Premium */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="logo">
            <span className="logo-text">VS</span>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={toggleMobileMenu} className="mobile-menu-btn" aria-label="Toggle Menu">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <div className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <span className="logo-text">VS</span>
            <button onClick={closeMobileMenu} className="mobile-menu-close" aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={closeMobileMenu}><span className="mobile-nav-number">01</span>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}><span className="mobile-nav-number">02</span>About</a></li>
            <li><a href="#experience" onClick={closeMobileMenu}><span className="mobile-nav-number">03</span>Experience</a></li>
            <li><a href="#skills" onClick={closeMobileMenu}><span className="mobile-nav-number">04</span>Skills</a></li>
            <li><a href="#projects" onClick={closeMobileMenu}><span className="mobile-nav-number">05</span>Projects</a></li>
            <li><a href="#blog" onClick={closeMobileMenu}><span className="mobile-nav-number">06</span>Blog</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}><span className="mobile-nav-number">07</span>Contact</a></li>
          </ul>
          <div className="mobile-menu-footer">
            <div className="mobile-menu-socials">
              <a href="https://github.com/vivekx11" target="_blank" rel="noreferrer"><Github size={18}/></a>
              <a href="https://www.linkedin.com/in/vivek-sawji-050a942b8" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
              <a href="https://twitter.com/viveksawji" target="_blank" rel="noreferrer"><Twitter size={18}/></a>
              <a href="https://instagram.com/vivekx___" target="_blank" rel="noreferrer"><Instagram size={18}/></a>
            </div>
            <p className="mobile-menu-email">viveksawji@gmail.com</p>
          </div>
        </div>
      </div>

      <main className="main-content">
        <div className="unified-wrapper">
          {/* Top Floating Badges */}
          <div className="hero-top-badges">
            <div className="badge hover-glow" style={{padding: '0.6rem 1.2rem', borderColor: 'var(--border-color)', color: 'var(--text-primary)'}}>
              Good Morning {time} 
            </div>
            <div className="badge hover-glow" style={{borderColor: 'var(--border-color)', color: 'var(--text-primary)'}}>
              <span className="pulse-dot-green"></span>
              Available for work
            </div>
          </div>

          {/* SINGLE CONTINUOUS CONTAINER UI */}
          <div className="unified-container" ref={containerRef}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="unified-section" id="home">
              <div className="hero-split">
                {/* Left: Name & Info */}
                <div className="hero-left">
                  <div className="badge primary-badge mb-4">The Developer</div>
                  <div className="title-content" style={{flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem'}}>
                    <h1 className="hero-title hero-title-text" style={{lineHeight: '0.9', margin: 0}}>
                      {splitText("Vivek")}
                    </h1>
                    <h1 className="hero-title hero-title-text text-accent" style={{lineHeight: '0.9', margin: 0}}>
                      {splitText("Sawji")}
                    </h1>
                  </div>
                  
                  <h3 className="hero-subtitle mt-6 mb-6" style={{maxWidth: '550px'}}>
                    Developer, problem solver, and tech enthusiast crafting performant, scalable web experiences.
                  </h3>
                  
                  <div className="hero-badges mt-2">
                    <div className="badge large-badge">Clean Code & Performance</div>
                    <div className="badge large-badge">
                      <span className="pulse-dot-accent-large"></span>
                      Lottie animation
                    </div>
                  </div>

                  <div className="hero-buttons mt-6" style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                    <a href="#projects" className="btn-link btn-shine">View Projects &rarr;</a>
                    <a href="#contact" className="btn-link btn-shine" style={{borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', background: 'transparent'}}>Hire Me &rarr;</a>
                    <a href="resume.pdf" className="btn-link btn-shine"><Download size={16} /> Resume</a>
                  </div>
                </div>

                {/* Right: Profile Image */}
                <div className="hero-right">
                  <div className="hero-image-container">
                    <div className="hero-image-glow"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                      alt="Vivek Workspace" 
                      className="hero-profile-image"
                    />
                    <div className="hero-image-border"></div>
                    <div className="hero-image-overlay">
                      <span>Website * Flutter * Chrome Extensions</span>
                    </div>
                  </div>
                  {/* Floating mini cards around image */}
                  <div className="hero-float-card hero-float-1">
                    <Sparkles size={16} className="text-accent" />
                    <span>3+ Years</span>
                  </div>
                  <div className="hero-float-card hero-float-2">
                    <Code2 size={16} className="text-accent" />
                    <span>Full Stack</span>
                  </div>
                </div>
              </div>

              {/* Overview Section Below Hero */}
              <div className="hero-overview border-top-subtle">
                <div className="overview-content">
                  <div className="badge primary-badge">Overview</div>
                  <p className="hero-bio mt-4">
                    Focused on clean architecture, smooth UX, and reliable systems across the stack from REST APIs and data models to polished, animated frontends.
                  </p>
                  <p className="hero-bio mt-4 text-accent" style={{fontWeight: 500}}>
                    Working with JavaScript, React, Node.js, MongoDB, Dart and modern tooling to ship robust web and mobile solutions.
                  </p>
                </div>
                <div className="overview-stats">
                  <div className="mini-stat">
                    <span className="stat-number" data-count="15">0</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="mini-stat">
                    <span className="stat-number" data-count="3">0</span>
                    <span className="stat-label">Years Exp</span>
                  </div>
                  <div className="mini-stat">
                    <span className="stat-number" data-count="50">0</span>
                    <span className="stat-label">Clients</span>
                  </div>
                </div>
              </div>

              <div className="bottom-section" style={{background: 'transparent'}}>
                <div className="badge primary-badge">Mumbai University * BSc CS | 3+ years building projects</div>
                <div className="social-icons-container">
                  <a href="https://github.com/vivekx11" target="_blank" rel="noreferrer" className="social-icon"><Github size={18}/></a>
                  <a href="https://www.linkedin.com/in/vivek-sawji-050a942b8" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={18}/></a>
                  <a href="https://twitter.com/viveksawji" target="_blank" rel="noreferrer" className="social-icon"><Twitter size={18}/></a>
                  <a href="https://instagram.com/vivekx___" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={18}/></a>
                </div>
              </div>
            </section>

            {/* ===== ABOUT ME SECTION ===== */}
            <section className="unified-section border-top-subtle" id="about">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">ABOUT</div>
                <h2 className="section-title mt-4 text-gradient">A developer focused on impactful products</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  From small interactive games to full-stack applications, the focus is on clarity, scalability and a strong user experience.
                </p>
              </div>
              
              {/* Professional About Grid */}
              <div className="about-pro-grid scroll-fade-up">
                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-icon-wrap">
                      <Terminal size={28} className="text-accent" />
                    </div>
                    <div className="about-card-number">01</div>
                  </div>
                  <h3 className="about-card-title">Identity</h3>
                  <p className="about-card-desc">A developer who lives by the philosophy of turning complex problems into elegant solutions. Every line of code is written with purpose — clarity, maintainability, and the end user always in mind.</p>
                  <div className="about-card-tags">
                    <span className="about-tag">Problem Solver</span>
                    <span className="about-tag">Detail Oriented</span>
                    <span className="about-tag">User-First</span>
                  </div>
                </div>

                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-icon-wrap">
                      <Code2 size={28} className="text-accent" />
                    </div>
                    <div className="about-card-number">02</div>
                  </div>
                  <h3 className="about-card-title">Professional</h3>
                  <p className="about-card-desc">Experience across the full development lifecycle — from frontend engineering with React and animations to backend services with Node.js, databases, and clean REST API design.</p>
                  <div className="about-card-tags">
                    <span className="about-tag">React</span>
                    <span className="about-tag">Node.js</span>
                    <span className="about-tag">REST APIs</span>
                    <span className="about-tag">SQL</span>
                  </div>
                </div>

                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-icon-wrap">
                      <GraduationCap size={28} className="text-accent" />
                    </div>
                    <div className="about-card-number">03</div>
                  </div>
                  <h3 className="about-card-title">Education</h3>
                  <p className="about-card-desc">BSc Computer Science from Mumbai University with strong fundamentals in software development, web technologies, mobile apps and browser extensions.</p>
                  <div className="about-card-tags">
                    <span className="about-tag">BSc CS</span>
                    <span className="about-tag">Mumbai University</span>
                    <span className="about-tag">Dean's List</span>
                  </div>
                </div>

                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-icon-wrap">
                      <Gamepad2 size={28} className="text-accent" />
                    </div>
                    <div className="about-card-number">04</div>
                  </div>
                  <h3 className="about-card-title">Interests</h3>
                  <p className="about-card-desc">Gaming, travel, and exploring new tech — from UI design patterns to AI-powered tools. Always curious, always building, always learning new frameworks and ideas.</p>
                  <div className="about-card-tags">
                    <span className="about-tag">Gaming</span>
                    <span className="about-tag">Travel</span>
                    <span className="about-tag">AI Tools</span>
                    <span className="about-tag">Open Source</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== EXPERIENCE SECTION ===== */}
            <section className="unified-section border-top-subtle" id="experience">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">EXPERIENCE</div>
                <h2 className="section-title mt-4">Professional journey</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Blending product thinking with engineering discipline to deliver maintainable and scalable systems.
                </p>
              </div>
              
              <div className="exp-grid scroll-fade-up">
                <div className="exp-selector">
                  {experiences.map((exp, index) => (
                    <button 
                      key={index} 
                      className={`exp-btn ${activeExp === index ? 'active' : ''}`}
                      onClick={() => setActiveExp(index)}
                    >
                      <h3 className="exp-btn-title">{exp.company}</h3>
                      <span className="exp-btn-duration">{exp.duration}</span>
                    </button>
                  ))}
                </div>
                <div className="exp-content">
                  <div className="badge primary-badge mb-2">{experiences[activeExp].duration}</div>
                  <h3 className="exp-title mt-4">{experiences[activeExp].title}</h3>
                  <p className="exp-company text-accent">{experiences[activeExp].company}</p>
                  <p className="exp-desc mt-4">{experiences[activeExp].description}</p>
                  
                  {/* Responsibilities list */}
                  <div className="exp-responsibilities mt-6">
                    <h4 className="exp-resp-heading">Key Contributions</h4>
                    <ul className="exp-resp-list">
                      {experiences[activeExp].responsibilities.map((r, i) => (
                        <li key={i} className="exp-resp-item">
                          <ArrowRight size={14} className="text-accent" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech used chips */}
                  <div className="exp-tech-chips mt-6">
                    {experiences[activeExp].techUsed.map((t, i) => (
                      <span key={i} className="badge chip-badge" style={{padding: '0.4rem 1rem', fontSize: '0.8rem'}}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ===== SKILLS SECTION ===== */}
            <section className="unified-section border-top-subtle" id="skills">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">TECHNOLOGY STACK</div>
                <h2 className="section-title mt-4">MODERN TECH STACK</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Explore cutting-edge technologies powering the next generation of web development.
                </p>
              </div>
              
              <div className="skills-minimal-container scroll-fade-up">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="skill-minimal-category">
                    <h3 className="skill-category-title">{cat.name}</h3>
                    <div className="skill-pills-wrapper">
                      {cat.skills.map((skill, i) => (
                        <div key={i} className="skill-pill">
                          <span className="skill-pill-icon">{skill.icon}</span>
                          <span className="skill-pill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== PROJECTS SECTION ===== */}
            <section className="unified-section border-top-subtle" id="projects">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">PROJECTS</div>
                <h2 className="section-title mt-4">Featured work</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  A snapshot of production-ready and experimental builds demonstrating front-to-back thinking.
                </p>
              </div>
              
              <div className="projects-alt-grid scroll-fade-up">
                {projects.map((project, index) => (
                  <div key={index} className={`project-alt-frame ${index % 2 !== 0 ? 'reversed' : ''} ${index !== projects.length - 1 ? 'border-bottom' : ''}`}>
                    <div className="project-alt-image">
                      <div className="project-image-inner">
                        <img src={project.img} alt={project.title} />
                      </div>
                    </div>
                    <div className="project-alt-details">
                      <div className="tags-flex mb-4">
                        <span className="badge text-accent">{project.tag}</span>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc mt-4">{project.description}</p>
                      
                      <div className="tags-flex mb-6" style={{flexWrap: 'wrap', gap: '0.75rem'}}>
                        {project.tech.map((t, i) => (
                          <span key={i} className="badge" style={{padding: '0.3rem 0.8rem'}}>{t}</span>
                        ))}
                      </div>

                      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                        <a href={project.github} target="_blank" rel="noreferrer" className="btn-link"><Github size={18} /> GitHub</a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn-link" style={{borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', background: 'transparent'}}><ExternalLink size={18} /> Live Demo</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== BLOG SECTION ===== */}
            <section className="unified-section border-top-subtle" id="blog">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">BLOG</div>
                <h2 className="section-title mt-4">Sharing what is learned</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Writing about practical patterns in React, Node.js, and upcoming trends keeps concepts solid.
                </p>
              </div>
              
              <div className="blog-advanced-grid scroll-fade-up">
                {blogs.map((blog, ix) => (
                  <div key={ix} className="blog-card glass-panel hover-glow">
                    <div className="blog-card-top">
                      <div className="blog-card-icon-wrap">
                        {blog.icon}
                      </div>
                      <div className="blog-card-meta">
                        <span className="blog-date">{blog.date}</span>
                        <span className="blog-read-time">
                          <Clock size={12} />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="blog-card-category">{blog.category}</div>
                    <h3 className="blog-card-title">{blog.title}</h3>
                    <p className="blog-card-desc">{blog.description}</p>
                    <a href="#blog" className="blog-read-more">
                      Read Article
                      <ArrowRight size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className="unified-section border-top-subtle" id="testimonials">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">TESTIMONIALS</div>
                <h2 className="section-title mt-4">What clients say</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Feedback from people who trusted these solutions.
                </p>
              </div>

              <div className="testimonials-grid scroll-fade-up">
                {testimonials.map((test, index) => (
                  <div key={index} className="glass-panel hover-glow" style={{padding: '3rem', position: 'relative'}}>
                    <Quote size={48} className="text-accent" style={{opacity: 0.15, position: 'absolute', top: '15px', right: '15px'}} />
                    <div className="testimonial-stars mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-accent" fill="var(--accent-primary)" />
                      ))}
                    </div>
                    <p className="text-primary mb-6" style={{fontStyle: 'italic', fontSize: '1.2rem', lineHeight: '1.7'}}>"{test.quote}"</p>
                    <div style={{borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem'}}>
                      <h4 className="text-accent" style={{fontSize: '1.3rem', marginBottom: '0.2rem'}}>{test.name}</h4>
                      <span className="text-secondary" style={{fontSize: '0.85rem'}}>{test.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== CONTACT SECTION ===== */}
            <section className="unified-section border-top-subtle" id="contact">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">CONTACT</div>
                <h2 className="section-title mt-4">Let's build something together</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Share a brief about your idea, timeline and tech preferences; a detailed response follows shortly.
                </p>
              </div>

              <div className="contact-split scroll-fade-up">
                {/* Left: Contact Form 50% */}
                <div className="contact-form-side">
                  <form className="contact-form" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <div className="contact-row">
                      <div className="contact-field">
                        <label className="text-secondary" style={{fontWeight: 500}}>Name</label>
                        <input type="text" className="contact-input" placeholder="John Doe" />
                      </div>
                      <div className="contact-field">
                        <label className="text-secondary" style={{fontWeight: 500}}>Email</label>
                        <input type="email" className="contact-input" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="contact-field">
                      <label className="text-secondary" style={{fontWeight: 500}}>Project Type</label>
                      <input type="text" className="contact-input" placeholder="Web app, API, mobile app..." />
                    </div>
                    <div className="contact-field">
                      <label className="text-secondary" style={{fontWeight: 500}}>Message</label>
                      <textarea className="contact-input" placeholder="Share details about scope, deadlines, and expectations." style={{minHeight: '140px', resize: 'vertical'}}></textarea>
                    </div>
                    <button className="btn-link mt-2" style={{background: 'var(--accent-primary)', color: '#000', border: 'none', width: '100%', padding: '1.2rem', fontSize: '1.05rem'}}>
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                </div>
                
                {/* Right: Fun Game & Info */}
                <div className="contact-quote-side" style={{display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1}}>
                  <div className="quote-card game-card-container">
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem'}}>
                      <Gamepad2 size={24} className="text-accent" />
                      <h3 className="text-primary" style={{fontSize: '1.4rem', fontWeight: 700}}>Let's play a game!</h3>
                    </div>
                    <p className="text-secondary mb-6" style={{fontSize: '0.95rem'}}>Take a quick Tic-Tac-Toe break before you hit send.</p>
                    
                    <div className="tic-tac-board">
                      {board.map((cell, i) => (
                        <button key={i} className={`tic-tac-cell ${cell === 'X' ? 'cell-x' : cell === 'O' ? 'cell-o' : ''} ${!cell && !calculateWinner(board) ? 'interactive' : ''}`} onClick={() => handleTicTacClick(i)}>
                          {cell}
                        </button>
                      ))}
                    </div>
                    
                    <div className="game-status mt-6" style={{textAlign: 'center', fontWeight: 'bold'}}>
                      {calculateWinner(board) 
                        ? <span className="text-accent" style={{fontSize: '1.1rem'}}>Winner: {calculateWinner(board)}! 🎉</span> 
                        : board.every(c => c !== null) 
                          ? <span className="text-secondary" style={{fontSize: '1.1rem'}}>It's a draw! 🤝</span>
                          : <span className="text-secondary">Next player: <span className="text-primary">{xIsNext ? 'X' : 'O'}</span></span>
                      }
                    </div>
                    
                    <button className="btn-link mt-4" style={{width: '100%', justifyContent: 'center'}} onClick={(e) => { e.preventDefault(); resetGame(); }}>
                      Reset Game
                    </button>
                  </div>
                  
                  <div className="contact-info-mini glass-panel" style={{padding: '2rem', borderRadius: '16px'}}>
                      <div className="contact-info-item mb-4" style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                        <div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'var(--card-bg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <Mail size={18} className="text-accent" />
                        </div>
                        <span className="text-primary" style={{fontWeight: 500}}>viveksawji@gmail.com</span>
                      </div>
                      <div className="contact-info-item" style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                         <div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'var(--card-bg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <MapPin size={18} className="text-accent" />
                        </div>
                        <span className="text-primary" style={{fontWeight: 500}}>Mumbai, Maharashtra, India</span>
                      </div>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </div>

        {/* ===== ADVANCED FOOTER ===== */}
        <footer className="premium-footer">
          <div className="footer-inner">
            {/* Top: Big brand line */}
            <div className="footer-brand-section">
              <div className="footer-brand">
                <span className="footer-logo-text">VS</span>
                <div className="footer-brand-info">
                  <h3 className="footer-brand-name">Vivek Sawji</h3>
                  <p className="footer-brand-role">Full Stack Developer & Designer</p>
                </div>
              </div>
              <p className="footer-tagline">
                Crafting digital experiences that combine clean code, smooth interactions, and thoughtful design.
              </p>
            </div>

            {/* Middle: Links Grid */}
            <div className="footer-links-grid">
              <div className="footer-link-col">
                <h4 className="footer-col-title">Navigation</h4>
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">About</a>
                <a href="#experience" className="footer-link">Experience</a>
                <a href="#skills" className="footer-link">Skills</a>
              </div>
              <div className="footer-link-col">
                <h4 className="footer-col-title">Work</h4>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#blog" className="footer-link">Blog</a>
                <a href="#testimonials" className="footer-link">Testimonials</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
              <div className="footer-link-col">
                <h4 className="footer-col-title">Connect</h4>
                <a href="https://github.com/vivekx11" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
                <a href="https://www.linkedin.com/in/vivek-sawji-050a942b8" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
                <a href="https://twitter.com/viveksawji" target="_blank" rel="noreferrer" className="footer-link">Twitter</a>
                <a href="https://instagram.com/vivekx___" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
              </div>
              <div className="footer-link-col">
                <h4 className="footer-col-title">Get in Touch</h4>
                <div className="footer-contact-item">
                  <Mail size={14} className="text-accent" />
                  <span>viveksawji@gmail.com</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={14} className="text-accent" />
                  <span>Mumbai, India</span>
                </div>
                <div className="footer-contact-item">
                  <Clock size={14} className="text-accent" />
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>
            </div>

            {/* Bottom: Copyright + Socials + Back to top */}
            <div className="footer-bottom">
              <div className="footer-bottom-left">
                <p className="footer-copyright">© 2026 Vivek Sawji. All rights reserved.</p>
                <p className="footer-made-with">
                  Crafted with <Heart size={12} className="text-accent" fill="var(--accent-primary)" /> using React, GSAP & caffeine.
                </p>
              </div>
              <div className="footer-bottom-right">
                <div className="footer-social-row">
                  <a href="https://github.com/vivekx11" target="_blank" rel="noreferrer" className="social-icon footer-social"><Github size={16}/></a>
                  <a href="https://www.linkedin.com/in/vivek-sawji-050a942b8" target="_blank" rel="noreferrer" className="social-icon footer-social"><Linkedin size={16}/></a>
                  <a href="https://twitter.com/viveksawji" target="_blank" rel="noreferrer" className="social-icon footer-social"><Twitter size={16}/></a>
                  <a href="https://instagram.com/vivekx___" target="_blank" rel="noreferrer" className="social-icon footer-social"><Instagram size={16}/></a>
                </div>
                <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                  <ChevronUp size={20} />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
