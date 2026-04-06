
// this file represent the whole ui ux and colour palate of the site 

const fs = require('fs');
const path = require('path');

const indexCssPath = 'c:\\Users\\Vivek\\OneDrive\\Desktop\\DOCS\\parallex\\r\\portfolio\\src\\index.css';
const newIndexCss = `:root {
  /* Common Variables */
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  
  /* Initial default to Dark (Modern Slate & Tech Blue) */
  --accent-primary: #38bdf8;
  --accent-secondary: #818cf8;
  --accent-primary-rgb: 56, 189, 248;
  
  --bg-primary: #000000;
  --bg-secondary: #09090b;
  --card-bg: rgba(255, 255, 255, 0.03);
  --glass-bg: rgba(9, 9, 11, 0.6);
  --glass-panel: rgba(255, 255, 255, 0.04);
  
  --border-color: rgba(255, 255, 255, 0.08); 
  --border-glow: rgba(56, 189, 248, 0.15);
  --border-hover: rgba(56, 189, 248, 0.3);
  
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  
  --nav-bg: rgba(0, 0, 0, 0.7);
  --nav-border: rgba(255, 255, 255, 0.06);

  --btn-hover-bg: #f8fafc;
  --btn-hover-text: #000000;

  --noise-opacity: 0.03;
  --image-overlay: rgba(0,0,0,0.8);
  --bottom-section-bg: rgba(0,0,0,0.5);
  
  --glow-1: rgba(56, 189, 248, 0.07);
  --glow-2: rgba(129, 140, 248, 0.07);
  --panel-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

[data-theme="light"] {
  --accent-primary: #0284c7;
  --accent-secondary: #4f46e5;
  --accent-primary-rgb: 2, 132, 199;
  
  --bg-primary: #fcfcfd;
  --bg-secondary: #f1f5f9;
  --card-bg: rgba(255, 255, 255, 0.9);
  --glass-bg: rgba(252, 252, 253, 0.8);
  --glass-panel: rgba(255, 255, 255, 0.95);
  
  --border-color: rgba(15, 23, 42, 0.08);
  --border-glow: rgba(2, 132, 199, 0.15);
  --border-hover: rgba(2, 132, 199, 0.3);
  
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  
  --nav-bg: rgba(252, 252, 253, 0.85);
  --nav-border: rgba(15, 23, 42, 0.06);

  --btn-hover-bg: #0f172a;
  --btn-hover-text: #ffffff;

  --noise-opacity: 0.015;
  --image-overlay: rgba(252, 252, 253, 0.7);
  --bottom-section-bg: rgba(15, 23, 42, 0.02);

  --glow-1: rgba(2, 132, 199, 0.05);
  --glow-2: rgba(79, 70, 229, 0.05);
  --panel-shadow: 0 8px 32px rgba(2, 132, 199, 0.05);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.4s ease, color 0.4s ease;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}

a {
  text-decoration: none;
  color: inherit;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-primary);
}
::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border: 1px solid var(--accent-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s;
}

.custom-cursor.hovering {
  width: 50px;
  height: 50px;
  background-color: var(--border-glow);
}

.custom-cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: transform 0.2s, background 0.3s;
}

.custom-cursor-dot.hovering {
  transform: translate(-50%, -50%) scale(0);
}

.noise-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  pointer-events: none;
  z-index: 9998;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: var(--noise-opacity);
  transition: opacity 0.4s ease;
}

.glow-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: 
    radial-gradient(circle at 15% 30%, var(--glow-1), transparent 40%),
    radial-gradient(circle at 85% 70%, var(--glow-2), transparent 40%);
  filter: blur(80px);
}

.text-gradient {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-panel {
  background: var(--glass-panel);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: var(--panel-shadow);
  transition: all 0.4s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 30px var(--border-glow);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}
`;
// the above is colour grid ..
fs.writeFileSync(indexCssPath, newIndexCss);

const appCssPath = 'c:\\Users\\Vivek\\OneDrive\\Desktop\\DOCS\\parallex\\r\\portfolio\\src\\App.css';
let appCss = fs.readFileSync(appCssPath, 'utf8');

// Replace hardcoded Gold
appCss = appCss.replace(/rgba\(255,\s*215,\s*0,\s*([0-9.]+)\)/g, 'rgba(var(--accent-primary-rgb), $1)');
appCss = appCss.replace(/#FFD700/gi, 'var(--accent-primary)');

// Replace hardcoded Secondary Gold
appCss = appCss.replace(/rgba\(255,\s*140,\s*0,\s*([0-9.]+)\)/g, 'rgba(var(--accent-primary-rgb), $1)');
appCss = appCss.replace(/#FF8C00/gi, 'var(--accent-secondary)');

// Replace hardcoded Purple
appCss = appCss.replace(/rgba\(124,\s*58,\s*237,\s*([0-9.]+)\)/g, 'rgba(var(--accent-primary-rgb), $1)');
appCss = appCss.replace(/#7c3aed/gi, 'var(--accent-primary)');
appCss = appCss.replace(/#a855f7/gi, 'var(--accent-secondary)');

console.log('Successfully applied new modern themes to App.css and index.css.');
