document.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;
  const lastPart = pathname.split('/').pop();
  const isDirPath = pathname.endsWith('/') || !lastPart.includes('.');
  const pathParts = pathname.split('/').filter(Boolean);
  if (!isDirPath) pathParts.pop(); 
  const pathLevel = pathParts.length === 0 ? './' : '../'.repeat(pathParts.length);
  
  // Create Header
  const header = document.createElement('header');
  header.id = 'global-header';
  
  const currentPath = window.location.pathname;
  const isWork = currentPath.includes('/work/') || currentPath.endsWith('index.html') || currentPath.endsWith('/');
  const isPlayground = currentPath.includes('/playground/');
  const isAbout = currentPath.includes('/about/');

  header.innerHTML = `
    <a href="${pathLevel}index.html" class="header-logo-link">
      <img src="${pathLevel}Assets/system/brand/logo.svg" alt="ruini.site" class="logo-img">
    </a>
    <div class="header-right">
      <nav>
        <a href="${pathLevel}work/index.html" class="${isWork && !isPlayground && !isAbout ? 'active' : ''}">Work</a>
        <a href="${pathLevel}playground/index.html" class="${isPlayground ? 'active' : ''}">Playground</a>
        <a href="${pathLevel}about/index.html" class="${isAbout ? 'active' : ''}">About</a>
      </nav>
      <button class="theme-btn" id="theme-btn" aria-label="Toggle dark mode">
        <svg class="cat-icon" viewBox="0 0 455 549" preserveAspectRatio="xMidYMid meet" fill="currentColor">
          <g transform="translate(0.000000,549.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M808 5153 l-3 -67 -56 3 c-34 1 -60 -2 -64 -9 -6 -10 -11 -51 -14 -112 -1 -15 -11 -18 -66 -18 l-65 0 0 -65 0 -65 -65 0 -64 0 -3 -132 -3 -133 -67 -3 -68 -3 0 -464 0 -464 68 -3 67 -3 3 -132 3 -133 64 0 65 0 0 -65 0 -65 64 0 c42 0 65 -4 68 -12 2 -7 4 -69 4 -138 l-1 -125 -67 -3 -68 -3 -2 -332 -3 -332 -62 -3 -63 -3 -2 -262 -3 -262 -67 -3 -68 -3 0 -329 0 -329 68 -3 67 -3 3 -68 3 -68 127 3 127 3 3 68 3 67 64 0 64 0 3 133 3 132 63 -1 62 -1 0 133 0 134 70 0 69 0 3 67 3 68 65 0 65 0 3 -67 3 -68 134 0 135 0 0 -65 0 -65 65 0 65 0 0 -535 0 -535 65 0 64 0 3 -68 3 -67 195 0 195 0 3 67 3 68 64 0 65 0 0 265 0 264 68 3 67 3 3 203 2 203 198 -2 197 -2 3 66 3 67 269 0 269 0 3 -67 3 -68 60 0 60 0 3 -67 3 -68 64 0 65 0 0 -65 0 -64 133 -3 132 -3 5 -65 5 -65 127 -3 127 -3 3 68 3 68 68 3 67 3 0 194 0 194 -67 3 -68 3 -3 133 -3 132 -64 0 -65 0 0 135 0 134 -67 3 -68 3 -3 127 -3 127 -62 3 -62 3 0 69 0 70 62 -3 62 -2 3 68 3 68 68 3 67 3 0 529 0 530 -65 0 -65 0 -2 533 -3 532 -197 3 -198 2 0 -65 0 -65 -65 0 -65 0 0 -65 0 -65 -335 0 c-261 0 -335 3 -335 13 -1 6 -2 64 -3 127 l-2 115 -67 3 -67 3 -3 67 -3 67 -195 0 -195 0 -3 -67 -3 -68 -64 0 -65 0 0 -133 0 -133 -65 4 -65 4 0 -331 c0 -269 -3 -333 -14 -337 -7 -3 -127 -6 -267 -7 l-254 -2 -3 -67 -3 -67 -132 -3 -132 -3 -3 -62 -3 -63 -64 0 -65 0 0 65 0 65 -70 0 -70 0 0 135 0 135 -65 0 -65 0 0 270 0 270 65 0 65 0 0 135 0 135 70 0 70 0 0 65 0 65 200 0 200 0 0 -200 0 -200 130 0 129 0 3 68 3 67 68 3 67 3 0 194 0 195 -70 0 -70 0 0 69 0 68 -62 -1 -63 0 -3 67 -3 67 -329 0 -329 0 -3 -67z m2002 -1673 l0 -270 -64 0 c-49 0 -65 4 -70 16 -8 21 -8 509 1 517 3 4 35 7 70 7 l63 0 0 -270z m800 0 l0 -270 -65 0 c-45 0 -65 4 -65 13 0 6 0 125 -1 262 -1 138 -1 253 0 258 0 4 30 7 66 7 l65 0 0 -270z"/>
          </g>
        </svg>
      </button>
    </div>
  `;

  // Inject global CSS
  const globalCss = document.createElement('link');
  globalCss.rel = 'stylesheet';
  globalCss.href = pathLevel + 'css/global-ui.css';
  document.head.appendChild(globalCss);

  // Create Footer
  const footer = document.createElement('footer');
  footer.className = 'global-footer';
  footer.innerHTML = `
    <div class="footer-top">
      <a href="mailto:ruiniohhh@gmail.com" class="footer-connect">Let's connect</a>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <div class="footer-status-line">
          <span class="local-time" id="local-time"></span>
          <span class="status-indicator">
            <span class="pulse-dot"></span>
            <span class="status-text" id="status-text"></span>
          </span>
        </div>
        <p>© ruini oh | made in 2026</p>
      </div>
      <div class="footer-links">
        <a href="https://www.behance.net/rannieoh" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/rannie-ou/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  `;

  // Insert into page
  const pageContainer = document.querySelector('.page');
  if (pageContainer) {
    const existingHeader = pageContainer.querySelector('header');
    if (existingHeader) {
      existingHeader.replaceWith(header);
    } else {
      pageContainer.insertBefore(header, pageContainer.firstChild);
    }
    pageContainer.appendChild(footer);
  }

  // Re-bind theme btn logic
  const html = document.documentElement;
  const btn = document.getElementById('theme-btn');
  const lbl = document.getElementById('theme-label');
  
  function applyTheme(t) {
    html.dataset.theme = t; 
    if(lbl) lbl.textContent = t === 'dark' ? 'Light' : 'Dark';
  }

  const savedTheme = localStorage.getItem('ruini-theme') || 'light';
  applyTheme(savedTheme);

  if (btn) {
    btn.addEventListener('click', () => { 
      const n = html.dataset.theme === 'dark' ? 'light' : 'dark'; 
      localStorage.setItem('ruini-theme', n); 
      applyTheme(n); 
    });
  }

  // Footer Clock and Status logic
  const updateClock = () => {
    const timeEl = document.getElementById('local-time');
    if(timeEl) {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      timeEl.textContent = `${timeString} - Shanghai`;
    }
  };
  setInterval(updateClock, 1000);
  setTimeout(updateClock, 0);

  const setStatus = () => {
    const statusEl = document.getElementById('status-text');
    if(statusEl) {
      const hour = new Date().getHours();
      const isDay = hour >= 6 && hour < 22;
      const dayStatuses = [
        "baking chiffon cake", "sending it on the wall", "over-thinking pixels",
        "making weird stuff", "hitting drums, not deadlines", "iterating on something new"
      ];
      const nightStatuses = [
        "dreaming in Figma", "pretending to rest", "rendering tomorrow",
        "asleep, probably", "chasing random thoughts", "lost in a rabbit hole"
      ];
      const pool = isDay ? dayStatuses : nightStatuses;
      statusEl.textContent = pool[Math.floor(Math.random() * pool.length)];
    }
  };
  setTimeout(setStatus, 0);
});
