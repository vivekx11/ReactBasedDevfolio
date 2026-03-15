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
  Sun
} from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, setTheme] = useState('dark');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const containerRef = useRef(null);
  
  // Interactive experience section state
  const [activeExp, setActiveExp] = useState(0);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TechCorp Inc.",
      duration: "2026 - PRESENT",
      description: "Built scalable React + Node.js features and optimised SQL queries."
    },
    {
      title: "Web Development Intern",
      company: "StartupX",
      duration: "2025",
      description: "Built UI components and assisted in backend endpoints."
    },
    {
      title: "Frontend Projects",
      company: "Personal Work",
      duration: "2024",
      description: "Created responsive websites using HTML, CSS, and JavaScript."
    },
    {
      title: "Programming Student",
      company: "College",
      duration: "2023",
      description: "Learned core programming concepts in C++, Java, and Python."
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
      description: "Practical patterns with useState, useEffect and custom hooks to keep components predictable and clean."
    },
    {
      category: "NODE.JS * APIS",
      title: "Building Scalable Node.js APIs",
      description: "Using Express, modular routing and middleware to design predictable, extendable REST services."
    },
    {
      category: "TRENDS",
      title: "Future of Web Development",
      description: "Exploring Web3, AI integrations and how PWAs are reshaping experience design."
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

  const categories = {
    "Featured": ["Node.js", "Flutter", "Tailwind CSS", "TypeScript", "React"],
    "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    "Backend & APIs": ["Node.js", "Python", "FastAPI", "Java", "Dart", "MongoDB", "REST APIs"],
    "AI & Dev Tools": ["Claude", "Claude Code", "Perplexity", "Comet", "VS Code", "Git", "GitHub"]
  };

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
    const interactiveElements = document.querySelectorAll('a, button, .project-frame');
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
          </div>
        </div>
      </nav>

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
            
            {/* HERO SECTION */}
            <section className="unified-section" id="home">
              <div className="title-section border-bottom">
                <div className="badge primary-badge mb-4">The Developer</div>
                <div className="title-content" style={{flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem'}}>
                  <h1 className="hero-title hero-title-text" style={{lineHeight: '0.9', margin: 0}}>
                    {splitText("Vivek")}
                  </h1>
                  <h1 className="hero-title hero-title-text text-accent" style={{lineHeight: '0.9', margin: 0}}>
                    {splitText("Sawji")}
                  </h1>
                </div>
                
                <h3 className="hero-subtitle mt-6 mb-6" style={{maxWidth: '850px'}}>
                  Developer, problem solver, and tech enthusiast crafting performant, scalable web experiences.
                </h3>
                
                <div className="hero-badges mt-2">
                  <div className="badge large-badge">Clean Code & Performance</div>
                  <div className="badge large-badge">
                    <span className="pulse-dot-accent-large"></span>
                    Lottie animation
                  </div>
                </div>
              </div>

              <div className="info-grid border-bottom">
                <div className="image-col">
                  <div className="image-col-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                      alt="Vivek Workspace" 
                      className="profile-image"
                    />
                    <div className="image-overlay">
                      <span>Website * Flutter Application * Chrome Extensions</span>
                    </div>
                  </div>
                </div>
                <div className="content-col">
                  <div className="badge primary-badge">Overview</div>
                  <div className="bio-wrapper mt-4">
                    <p className="hero-bio">
                      Focused on clean architecture, smooth UX, and reliable systems across the stack from REST APIs and data models to polished, animated frontends.
                    </p>
                    <p className="hero-bio mt-4 text-accent" style={{fontWeight: 500}}>
                      Working with JavaScript, React, Node.js, MongoDB, Dart and modern tooling to ship robust web and mobile solutions.
                    </p>
                  </div>
                  
                  <div className="hero-buttons mt-6" style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                    <a href="#projects" className="btn-link">View Projects &rarr;</a>
                    <a href="#contact" className="btn-link" style={{borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', background: 'transparent'}}>Hire Me &rarr;</a>
                    <a href="resume.pdf" className="btn-link"><Download size={16} /> Download Resume</a>
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

            {/* ABOUT ME SECTION */}
            <section className="unified-section border-top-subtle" id="about">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">ABOUT</div>
                <h2 className="section-title mt-4 text-gradient">A developer focused on impactful products</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  From small interactive games to full-stack applications, the focus is on clarity, scalability and a strong user experience.
                </p>
              </div>
              
              <div className="grid-2col scroll-fade-up">
                <div className="subcard glass-panel hover-glow">
                  <Terminal size={32} className="text-accent mb-4" />
                  <h3 style={{fontSize:'1.6rem', marginBottom:'1rem'}}>Identity</h3>
                  <p className="text-secondary" style={{lineHeight: 1.6}}>Developer crafting reliable solutions with an eye for detail and a user-first mindset.</p>
                </div>
                <div className="subcard glass-panel hover-glow">
                  <Code2 size={32} className="text-accent mb-4" />
                  <h3 style={{fontSize:'1.6rem', marginBottom:'1rem'}}>Professional</h3>
                  <p className="text-secondary" style={{lineHeight: 1.6}}>Experience across frontend and backend: React, Node.js, SQL, PHP and clean REST API design.</p>
                </div>
                <div className="subcard glass-panel hover-glow">
                  <BookOpen size={32} className="text-accent mb-4" />
                  <h3 style={{fontSize:'1.6rem', marginBottom:'1rem'}}>Education</h3>
                  <p className="text-secondary" style={{lineHeight: 1.6}}>BSc Computer Science from Mumbai University with a strong core in development, website flutter app & chrome extensions.</p>
                </div>
                <div className="subcard glass-panel hover-glow">
                  <User size={32} className="text-accent mb-4" />
                  <h3 style={{fontSize:'1.6rem', marginBottom:'1rem'}}>Interests</h3>
                  <p className="text-secondary" style={{lineHeight: 1.6}}>Gaming, travel and exploring new tech from UI patterns to AI-powered tools.</p>
                </div>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
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
                  <p className="exp-desc mt-6">{experiences[activeExp].description}</p>
                </div>
              </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="unified-section border-top-subtle" id="skills">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">TECHNOLOGY STACK</div>
                <h2 className="section-title mt-4">MODERN TECH STACK</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Explore cutting-edge technologies powering the next generation of web development.
                </p>
              </div>
              
              <div className="scroll-fade-up" style={{padding: '4rem'}}>
                {Object.entries(categories).map(([category, items], idx) => (
                  <div key={idx} className="skill-category" style={{marginBottom: '3rem'}}>
                    <h3 className="text-accent mb-4" style={{fontSize: '1.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', fontWeight: 600}}>
                      {category}
                    </h3>
                    <div className="chips-flex" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                      {items.map((item, i) => (
                        <div key={i} className="badge chip-badge hover-glow" style={{padding: '0.6rem 1.2rem'}}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section className="unified-section border-top-subtle" id="projects">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">PROJECTS</div>
                <h2 className="section-title mt-4">Featured work</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  A snapshot of production-ready and experimental builds demonstrating front-to-back thinking.
                </p>
              </div>
              
              <div className="projects-grid scroll-fade-up">
                {projects.map((project, index) => (
                  <div key={index} className={`project-frame ${index !== projects.length - 1 ? 'border-bottom' : ''}`}>
                    <div className="project-image-wrapper">
                      <div className="project-image-inner">
                        <img src={project.img} alt={project.title} />
                      </div>
                    </div>
                    <div className="project-details">
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

            {/* BLOG SECTION */}
            <section className="unified-section border-top-subtle" id="blog">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">BLOG</div>
                <h2 className="section-title mt-4">Sharing what is learned</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Writing about practical patterns in React, Node.js, and upcoming trends keeps concepts solid.
                </p>
              </div>
              
              <div className="blog-grid scroll-fade-up">
                {blogs.map((blog, ix) => (
                  <div key={ix} className="glass-panel hover-glow" style={{padding: '3rem', display: 'flex', flexDirection: 'column'}}>
                    <div className="badge mb-4" style={{padding: '0.4rem 0.8rem', border: 'none', background: 'rgba(255, 215, 0, 0.1)', color: 'var(--accent-primary)'}}>{blog.category}</div>
                    <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>{blog.title}</h3>
                    <p className="text-secondary mb-6" style={{flexGrow: 1, lineHeight: 1.6, fontSize: '1.05rem'}}>{blog.description}</p>
                    <a href="#blog" className="text-accent" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
                      Read More &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIALS SECTION */}
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
                    <p className="text-primary mb-6" style={{fontStyle: 'italic', fontSize: '1.2rem', lineHeight: '1.7'}}>"{test.quote}"</p>
                    <div style={{borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem'}}>
                      <h4 className="text-accent" style={{fontSize: '1.3rem', marginBottom: '0.2rem'}}>{test.name}</h4>
                      <span className="text-secondary" style={{fontSize: '0.85rem'}}>{test.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="unified-section border-top-subtle" id="contact">
              <div className="title-section bg-secondary border-bottom scroll-fade-up">
                <div className="badge primary-badge">CONTACT</div>
                <h2 className="section-title mt-4">Let's build something together</h2>
                <p className="hero-bio mt-4" style={{maxWidth: '800px'}}>
                  Share a brief about your idea, timeline and tech preferences; a detailed response follows shortly.
                </p>
              </div>

              <div className="info-grid scroll-fade-up">
                <div className="content-col border-right" style={{background: 'var(--bottom-section-bg)'}}>
                  <form className="contact-form" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <label className="text-secondary" style={{fontWeight: 500}}>Name</label>
                      <input type="text" className="contact-input" placeholder="John Doe" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <label className="text-secondary" style={{fontWeight: 500}}>Email</label>
                      <input type="email" className="contact-input" placeholder="you@example.com" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <label className="text-secondary" style={{fontWeight: 500}}>Project Type</label>
                      <input type="text" className="contact-input" placeholder="Web app, API, mobile app..." />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                      <label className="text-secondary" style={{fontWeight: 500}}>Message</label>
                      <textarea className="contact-input" placeholder="Share details about scope, deadlines, and expectations." style={{minHeight: '160px', resize: 'vertical'}}></textarea>
                    </div>
                    <button className="btn-link mt-2" style={{background: 'var(--accent-primary)', color: '#000', border: 'none', width: '100%', padding: '1.2rem', fontSize: '1.05rem'}}>
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                </div>
                
                <div className="content-col grid-center">
                  <div style={{textAlign: 'center'}}>
                    <div className="logo mb-6" style={{justifyContent: 'center', fontSize: '4rem'}}>
                      <span className="logo-text text-accent">VS</span>
                    </div>
                    <h2 style={{fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)', letterSpacing: '-1px'}}>VIVEK SAWJI</h2>
                    <p className="text-secondary" style={{fontSize: '1.2rem'}}>The Developer * Mumbai, IN</p>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </div>

        {/* BOTTOM NAV / FOOTER */}
        <footer style={{maxWidth: '1400px', margin: '0 auto', width: '80%', padding: '2rem 0', display: 'flex', justifyContent: 'center'}}>
          <div className="glass-panel" style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 4rem'}}>
            <div>
              <div className="badge primary-badge mb-4">NAVIGATE</div>
              <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                <a href="#about" className="text-secondary hover-glow" style={{fontWeight: 500}}>About &rarr;</a>
                <a href="#projects" className="text-secondary hover-glow" style={{fontWeight: 500}}>Projects &rarr;</a>
                <a href="#skills" className="text-secondary hover-glow" style={{fontWeight: 500}}>Skills &rarr;</a>
                <a href="#blog" className="text-secondary hover-glow" style={{fontWeight: 500}}>Blog &rarr;</a>
                <a href="#contact" className="text-secondary hover-glow" style={{fontWeight: 500}}>Contact &rarr;</a>
              </div>
            </div>
            
            <div style={{textAlign: 'right'}}>
              <div className="social-icons-container mb-3" style={{justifyContent: 'flex-end', gap: '1rem'}}>
                <a href="https://github.com/vivekx11" target="_blank" rel="noreferrer" className="social-icon" style={{width: '36px', height: '36px'}}><Github size={16}/></a>
                <a href="https://www.linkedin.com/in/vivek-sawji-050a942b8" target="_blank" rel="noreferrer" className="social-icon" style={{width: '36px', height: '36px'}}><Linkedin size={16}/></a>
                <a href="https://twitter.com/viveksawji" target="_blank" rel="noreferrer" className="social-icon" style={{width: '36px', height: '36px'}}><Twitter size={16}/></a>
                <a href="https://instagram.com/vivekx___" target="_blank" rel="noreferrer" className="social-icon" style={{width: '36px', height: '36px'}}><Instagram size={16}/></a>
              </div>
              <p className="text-primary" style={{fontSize: '0.85rem', fontWeight: 500}}>© 2025 Vivek Sawji. All rights reserved.</p>
              <p className="text-secondary" style={{fontSize: '0.8rem', marginTop: '0.3rem'}}>Crafted with ❤️, GSAP, Tailwind and caffeine.</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
