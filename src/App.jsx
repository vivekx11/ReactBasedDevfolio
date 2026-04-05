// basic react file it is and the logo and all //
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
  Menu,
  X
} from 'lucide-react';
import { 
  SiAstro, SiSvelte, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiReact, SiVuedotjs, SiHtml5, SiJavascript,
  SiNodedotjs, SiPython, SiFastapi, SiNestjs, SiGraphql, SiMongodb,
  SiOpenai, SiGit, SiVercel, SiAnthropic, SiGooglegemini, SiPerplexity
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import './App.css';
gsap.registerPlugin(ScrollTrigger);



function App() {
  const [theme, setTheme] = useState('dark');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const containerRef = useRef(null);
  
  // Interactive experience section state.
  const [activeExp, setActiveExp] = useState(0);

  // Get dynamic greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };

  // Show snackbar function
  const showSnackbarMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.append("access_key", "f87d2809-b6f2-41dc-b87e-9ac33a696304");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showSnackbarMessage("Message sent successfully! 🎉");
        e.target.reset();
      } else {
        showSnackbarMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      showSnackbarMessage("Error sending message. Please try again.");
    }
  };

  useEffect(() => {
    // Set greeting on mount
    setGreeting(getGreeting());
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Create diagonal stairs animation overlay
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    document.body.appendChild(overlay);
    
    // Create stairs effect with color based on NEW theme
    const stairsCount = 20;
    for (let i = 0; i < stairsCount; i++) {
      const stair = document.createElement('div');
      stair.className = 'theme-transition-stair';
      stair.style.animationDelay = `${i * 0.03}s`;
      // Set color based on the theme we're switching TO
      stair.style.background = newTheme === 'light' ? '#f8fafc' : '#0a0a0f';
      overlay.appendChild(stair);
    }
    
    // Change theme exactly when animation reaches 50% (screen fully covered)
    // Animation: 0.8s duration, 50% = 0.4s (400ms)
    // Last stair starts at: 19 * 30ms = 570ms
    // So last stair reaches 50% at: 570ms + 400ms = 970ms
    // Middle timing for smooth transition: ~500ms
    setTimeout(() => {
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }, 500);
    
    // Remove overlay after animation completes
    setTimeout(() => {
      overlay.remove();
    }, 1200);
  };
  const experiences = [
  {
    title: "Chrome Extension & Full Stack Developer",
    company: "Software Developer",
    duration: "2026 - PRESENT",
    description: "Focused on building scalable web, app, and browser extension projects. Actively contributing to open-source with 1000+ contributions on GitHub and continuously improving development skills across multiple domains.",
    responsibilities: [
      "Developed Chrome extensions with real-world use cases",
      "Built full-stack web applications and mobile apps",
      "Maintained 1000+ GitHub contributions through consistent coding",
      "Explored performance optimization and modern development tools"
    ],
    techUsed: ["JavaScript", "React", "Node.js", "Flutter", "Git"]
  },
  {
    title: "Flutter Developer & Hackathon Participant",
    company: "Hackathons & Projects",
    duration: "2025",
    description: "Learned Flutter development and built multiple mobile applications. Actively participated in 5+ hackathons, gaining hands-on experience in rapid development and teamwork.",
    responsibilities: [
      "Developed cross-platform mobile apps using Flutter",
      "Participated in 5+ hackathons with real-world problem solving",
      "Implemented UI/UX designs into functional apps",
      "Learned state management and API integration"
    ],
    techUsed: ["Flutter", "Dart", "Firebase", "REST APIs"]
  },
  {
    title: "Web Developer (Beginner Projects)",
    company: "Fundamentals",
    duration: "2024",
    description: "Started web development journey by building basic projects and learning core frontend technologies with a focus on responsive design and interactivity.",
    responsibilities: [
      "Built basic responsive websites and mini projects",
      "Learned HTML, CSS, and JavaScript fundamentals",
      "Created interactive UI elements and simple web apps",
      "Explored deployment and hosting platforms"
    ],
    techUsed: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Programming Learner",
    company: "Self Learning",
    duration: "2023",
    description: "Built a strong foundation in programming by learning Python and Java, focusing on logic building and problem-solving skills.",
    responsibilities: [
      "Learned Python and Java programming fundamentals",
      "Focused on logic building and problem-solving",
      "Practiced basic data structures and algorithms",
      "Solved coding problems regularly"
    ],
    techUsed: ["Python", "Java"]
  }
];

  const projects = [
    {
      tag: "FLUTTER APP",
      title: "InstantPick",
      description: "Modern Flutter-based mobile application with seamless UI/UX, real-time features and cross-platform compatibility.",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/vivekx11/instantpick",
      demo: "https://github.com/vivekx11/instantpick",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
    },
    {
      tag: "CHROME EXTENSION",
      title: "AiPrompt Extension",
      description: "A productivity-boosting extension designed to manage, organize and optimize AI prompts seamlessly within your browser.",
      tech: ["HTML", "JavaScript", "JSON"],
      github: "https://github.com/vivekx11/AiPrompt-chromeextension",
      demo: "https://github.com/vivekx11/AiPrompt-chromeextension",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
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
      img: "/mindfulness.png"
    },
    {
      tag: "FLUTTER APP",
      title: "FinWise Calculator",
      description: "A sophisticated personal finance calculator developed with Dart and Flutter for precise financial planning and tracking.",
      tech: ["Dart", "Flutter"],
      github: "https://github.com/vivekx11/FinWise.git",
      demo: "https://github.com/vivekx11/FinWise.git",
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const blogs = [
    {
      category: "REACT * HOOKS",
      title: "Mastering React Hooks",
      description: "Practical patterns with useState, useEffect and custom hooks to keep components predictable and clean.",
      readTime: "8 min read",
      date: "MARCH 31, 2026",
      icon: <Zap size={20} />
    },
    {
      category: "NODE.JS * APIS",
      title: "Building Scalable Node.js APIs",
      description: "Using Express, modular routing and middleware to design predictable, extendable REST services.",
      readTime: "12 min read",
      date: "MARCH 25, 2026",
      icon: <Database size={20} />
    },
    {
      category: "TRENDS",
      title: "Future of Web Development",
      description: "Exploring Web3, AI integrations and how PWAs are reshaping experience design.",
      readTime: "6 min read",
      date: "MARCH 14, 2026",
      icon: <Globe size={20} />
    }
  ];

  const highlights = [
    {
      title: "Instant Pick",
      desc: "Quick decision-making tool with a clean and interactive UI."
    },
    {
      title: "AI Prompt Extension",
      desc: "Chrome extension to generate and manage AI prompts efficiently."
    },
    {
      title: "FinWise",
      desc: "Finance app for tracking expenses and smart money insights."
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
        { name: "Perplexity", icon: <SiPerplexity size={16} /> },
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

    // Show/hide back to top button on scroll
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
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

      {/* Floating Back to Top Button */}
      <button 
        className={`floating-back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>

      {/* Snackbar */}
      <div className={`snackbar ${showSnackbar ? 'show' : ''}`}>
        {snackbarMessage}
      </div>

      <main className="main-content">
        <div className="unified-wrapper">
          {/* Top Floating Badges */}
          {/* Top Floating Badges Removed */}

          {/* SINGLE CONTINUOUS CONTAINER UI */}
          <div className="unified-container" ref={containerRef}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="unified-section" id="home">
              <div className="hero-split">
                {/* Left: Name & Info */}
                <div className="hero-left">

                  <h3 className="hero-subtitle mb-4" style={{maxWidth: '550px', fontWeight: 500, fontSize: '1.2rem', color: 'var(--text-secondary)'}}>
                    Glad you're here, <span className="text-accent">{greeting}</span> — I'm
                  </h3>

                  <div className="title-content" style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
                    <h1 className="hero-title hero-title-text hero-name-text">
                      {splitText("VIVEK")} {splitText("SAWJI")}
                    </h1>
                  </div>
                  
                  <h3 className="hero-subtitle mt-4 mb-6" style={{maxWidth: '550px', fontWeight: 500, fontSize: '1.2rem', color: 'var(--text-secondary)'}}>
                    A <span className="text-accent">Software Developer</span> building websites, web apps, Flutter apps, and Chrome extensions.
                  </h3>
                  
                  <div className="hero-buttons mt-4" style={{display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                    <a href="#projects" className="btn-link btn-shine btn-premium">
                      Explore Work <span className="icon-wrap"><ArrowRight size={18} /></span>
                    </a>
                    <a href="#contact" className="btn-link btn-shine btn-premium-secondary">
                      Start a Project
                    </a>
                  </div>
                </div>

                {/* Right: Profile Image */}
                <div className="hero-right">
                  <div className="hero-image-container">
                    <div className="hero-image-glow"></div>
                    <iframe 
                      src="/profile-animation.html" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        border: 'none', 
                        overflow: 'hidden',
                        backgroundColor: 'transparent'
                      }} 
                      title="Profile Animation"
                      scrolling="no"
                      loading="lazy"
                    />
                    <div className="hero-image-border"></div>
                    <div className="hero-image-overlay">
                      <span>Based in Mumbai, India</span>
                    </div>
                  </div>
                  {/* Floating mini cards removed */}
                </div>
              </div>

              {/* Overview Section Below Hero - RESTORED ORIGINAL STATS LOCATION */}
              <div className="hero-overview border-top-subtle">
                <div className="overview-content">
                  <div className="badge primary-badge">Developer Philosophy</div>
                  <div className="overview-grid mt-4">
                    <p className="hero-bio" style={{fontSize: '1.3rem', lineHeight: '1.5', fontWeight: 500}}>
                      I believe in building software that doesn't just work, but <span className="text-accent underline-accent">inspires</span>. Every pixel and interaction is an opportunity for excellence.
                    </p>
                    <p className="text-secondary" style={{fontSize: '0.95rem'}}>
                      Specializing in React, Node.js, and Dart to deliver projects that scale seamlessly with business growth.
                    </p>
                  </div>
                </div>
                <div className="overview-stats">
                  <div className="mini-stat">
                    <div className="stat-number-wrap">
                      <span className="stat-number" data-count="15">0</span><span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="mini-stat">
                    <div className="stat-number-wrap">
                      <span className="stat-number" data-count="2">0</span><span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Years Exp</span>
                  </div>
                  <div className="mini-stat">
                    <div className="stat-number-wrap">
                      <span className="stat-number" data-count="5">0</span><span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Clients</span>
                  </div>
                </div>
              </div>

              <div className="bottom-section" style={{background: 'transparent'}}>
                <div className="social-icons-container">
                  <a href="https://github.com/vivekx11" target="_blank" rel="noreferrer" className="social-icon"><Github size={18}/></a>
                  <a href="https://www.linkedin.com/in/vivek-sawji-050a942b8" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={18}/></a>
                  <a href="https://twitter.com/viveksawji" target="_blank" rel="noreferrer" className="social-icon"><Twitter size={18}/></a>
                  <a href="https://instagram.com/vivekx___" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={18}/></a>
                </div>
              </div>
            </section>

            <section className="unified-section border-top-subtle" id="about">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">ABOUT</div>
                <h2 className="section-title mt-4 text-gradient">A developer focused on impactful products</h2>
              </div>
              
              {/* Professional About Grid */}
              <div className="about-pro-grid scroll-fade-up">
                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-title-group">
                      <div className="about-card-icon-wrap">
                        <Terminal size={28} className="text-accent" />
                      </div>
                      <h3 className="about-card-title">Identity</h3>
                    </div>
                    <div className="about-card-number">01</div>
                  </div>
                  <ul className="about-card-list">
                    <li>Problem Solver</li>
                    <li>Detail Oriented</li>
                    <li>User-First</li>
                  </ul>
                </div>

                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-title-group">
                      <div className="about-card-icon-wrap">
                        <Code2 size={28} className="text-accent" />
                      </div>
                      <h3 className="about-card-title">Professional</h3>
                    </div>
                    <div className="about-card-number">02</div>
                  </div>
                  <ul className="about-card-list">
                    <li>React & Animations</li>
                    <li>Node.js (NestJS, Express)</li>
                    <li>RESTful APIs & GraphQL</li>
                    <li>SQL (PostgreSQL/MySQL)</li>
                  </ul>
                </div>

                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-title-group">
                      <div className="about-card-icon-wrap">
                        <GraduationCap size={28} className="text-accent" />
                      </div>
                      <h3 className="about-card-title">Education</h3>
                    </div>
                    <div className="about-card-number">03</div>
                  </div>
                  <ul className="about-card-list">
                    <li>BSc Computer Science</li>
                    <li>Mumbai University Graduate</li>
                    <li>Software Engineering Focus</li>
                  </ul>
                </div>

                <div className="about-main-card glass-panel">
                  <div className="about-card-header">
                    <div className="about-card-title-group">
                      <div className="about-card-icon-wrap">
                        <Gamepad2 size={28} className="text-accent" />
                      </div>
                      <h3 className="about-card-title">Interests</h3>
                    </div>
                    <div className="about-card-number">04</div>
                  </div>
                  <ul className="about-card-list">
                    <li>Gaming & Tech Trends</li>
                    <li>Open Source Exploration</li>
                    <li>Artificial Intelligence</li>
                    <li>UI/UX Design Patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ===== EXPERIENCE SECTION ===== */}
            <section className="unified-section border-top-subtle" id="experience">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">EXPERIENCE</div>
                <h2 className="section-title mt-4">Professional journey</h2>
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
                <h2 className="section-title mt-4">Modern tech stack</h2>
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
              </div>
              
              <div className="projects-alt-grid scroll-fade-up">
                {projects.map((project, index) => (
                  <div key={index} className={`project-alt-frame ${index % 2 !== 0 ? 'reversed' : ''} ${index !== projects.length - 1 ? 'border-bottom' : ''}`}>
                    <div className="project-alt-image">
                      <div className={`project-image-inner ${project.tag === 'MINDFULNESS' ? 'square-shape' : ''}`}>
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

                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%'}}>
                        <a href={project.github} target="_blank" rel="noreferrer" className="btn-link btn-secondary"><Github size={18} /> GitHub</a>
                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn-link btn-primary"><ExternalLink size={18} /> Live Demo</a>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="github-cta-section">
                  <div className="github-cta-content">
                    <h3 className="github-cta-title">Explore More Projects</h3>
                    <p className="github-cta-desc">Check out my complete collection of open-source projects, experiments, and contributions on GitHub</p>
                    <a href="https://github.com/vivekx11" target="_blank" rel="noreferrer" className="github-cta-button">
                      <span>Visit GitHub Profile</span>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== BLOG SECTION ===== */}
            <section className="unified-section border-top-subtle" id="blog">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">BLOG</div>
                <h2 className="section-title mt-4">Sharing what is learned</h2>
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
                    <a 
                      href="#blog" 
                      className="blog-read-more"
                      onClick={(e) => {
                        e.preventDefault();
                        showSnackbarMessage('Coming Soon! 🚀');
                      }}
                    >
                      Read Article
                      <ArrowRight size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* ===== CONTACT SECTION ===== */}
            <section className="unified-section border-top-subtle" id="contact">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">CONTACT</div>
                <h2 className="section-title mt-4">Let's build something together</h2>
              </div>

              <div className="contact-split scroll-fade-up">
                {/* Contact Form Centered */}
                <div className="contact-form-side">
                  <form className="contact-form" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}} onSubmit={handleContactSubmit}>
                    <div className="contact-row">
                      <div className="contact-field">
                        <label className="text-secondary" style={{fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block'}}>Name</label>
                        <input type="text" name="name" className="contact-input" placeholder="John Doe" required />
                      </div>
                      <div className="contact-field">
                        <label className="text-secondary" style={{fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block'}}>Email</label>
                        <input type="email" name="email" className="contact-input" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div className="contact-field">
                      <label className="text-secondary" style={{fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block'}}>Project Type</label>
                      <input type="text" name="project_type" className="contact-input" placeholder="Web app, API, mobile app..." required />
                    </div>
                    <div className="contact-field">
                      <label className="text-secondary" style={{fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block'}}>Message</label>
                      <textarea name="message" className="contact-input" placeholder="Share details about scope, deadlines, and expectations." style={{minHeight: '140px', resize: 'vertical'}} required></textarea>
                    </div>
                    <button type="submit" className="btn-link btn-primary mt-2" style={{width: '100%', padding: '1.2rem', fontSize: '1.05rem', fontWeight: 700}}>
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* ===== FOOTER SECTION ===== */}
            <section className="unified-section border-top-subtle">
              {/* Top: Big brand line */}
              <div className="footer-brand-section">
                <div className="footer-brand">
                  <span className="footer-logo-text">VS</span>
                  <div className="footer-brand-info">
                    <h3 className="footer-brand-name">VIVEK SAWJI</h3>
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
                    <Globe size={14} className="text-accent" />
                    <span>vivekx11.in</span>
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

              {/* Bottom: Copyright + Socials */}
              <div className="footer-bottom">
                <div className="footer-bottom-left">
                  <p className="footer-copyright">© 2026 VIVEK SAWJI. All rights reserved.</p>
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
                </div>
              </div>
            </section>
            
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
