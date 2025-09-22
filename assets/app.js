// Config: LinkedIn-derived placeholders (update later with real API or manual JSON)
const profileConfig = {
  fullName: "Subham Kumar Das",
  headline: "Aspiring Data Scientist | AI/ML Engineer",
  photoUrl: "https://media.licdn.com/dms/image/D4D03AQH-PLACEHOLDER/profile-displayphoto-shrink_200_200/0?e=00000000&v=beta&t=",
  summary:
    "Aspiring Data Scientist and AI/ML Engineer with strong foundations in Python, ML, and data-driven problem solving. Passionate about building end-to-end AI solutions and exploring MLOps and scalable analytics.",
  skills: [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "SQL", icon: "🛢️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Machine Learning (SVM, RF, KNN, Ensemble)", icon: "🤖" },
    { name: "Model Evaluation & Tuning", icon: "🧪" },
    { name: "Deep Learning (NN, CNN)", icon: "🧠" },
    { name: "TensorFlow / Keras", icon: "🔶" },
    { name: "Scikit-learn", icon: "📈" },
    { name: "Pandas", icon: "📊" },
    { name: "NumPy", icon: "📐" },
    { name: "EDA & Feature Engineering", icon: "🧩" },
    { name: "Matplotlib / Seaborn", icon: "📊" },
    { name: "Power BI", icon: "📊" },
    { name: "Flask / REST APIs", icon: "🌐" },
    { name: "Streamlit", icon: "🧵" },
    { name: "SQLAlchemy", icon: "🧱" },
    { name: "Git & GitHub", icon: "🔧" }
  ],
  timeline: [
    {
      type: "Internship",
      title: "Data Analyst Intern",
      org: "Unified Mentor",
      period: "Jan 2024 – Jun 2024",
      desc: "Analyzed Amazon sales data, built interactive Power BI dashboards, and improved reporting via preprocessing and trend analysis."
    },
    {
      type: "Education",
      title: "MCA – Master of Computer Application",
      org: "Odisha University of Technology and Research, Bhubaneswar, Odisha",
      period: "—",
      desc: "Focused on data science, machine learning, algorithms, and software engineering."
    }
  ],
  projects: [
    {
      name: "Diabetes Prediction Model",
      description: "Logistic/ML model with Flask UI for diabetes risk prediction; includes dataset, notebooks, and app.",
      url: "https://github.com/Subham9Kumar3Das/DiabetesPrediction-model",
      language: "Python",
      tags: ["ai-ml", "data-science"]
    },
    {
      name: "Forest Fire Analysis",
      description: "Notebook-driven analysis/prediction around forest fire data; focuses on EDA and modeling.",
      url: "https://github.com/Subham9Kumar3Das/Forest_Fire",
      language: "Jupyter",
      tags: ["data-science"]
    },
    {
      name: "Web Scraping Project",
      description: "Flask app with scrapers and logs; extracts data from target pages and serves results.",
      url: "https://github.com/Subham9Kumar3Das/Web_Scrapping-Project",
      language: "Python",
      tags: ["web"]
    },
    {
      name: "Car Resale Price Predictor",
      description: "ML pipeline to predict car resale values; training, feature engineering, and simple serving layer.",
      url: "https://github.com/Subham9Kumar3Das/Car_Resale",
      language: "Python",
      tags: ["ai-ml"]
    },
    {
      name: "IPL Win Predictor",
      description: "Cricket match win probability model; data processing and predictive modeling for IPL.",
      url: "https://github.com/Subham9Kumar3Das/IPL-Win-Predictor",
      language: "Python",
      tags: ["ai-ml", "data-science"]
    }
  ]
};

// Utilities
function $(sel) { return document.querySelector(sel); }
function createEl(tag, cls = "", html = "") { const el = document.createElement(tag); if (cls) el.className = cls; if (html) el.innerHTML = html; return el; }

// Theme toggle with localStorage persistence
const themeToggle = () => {
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
    icon.textContent = '🌞';
  }
  btn.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    icon.textContent = isDark ? '🌞' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
};

// Populate bio and about text from config (proxy for LinkedIn)
function populateProfile() {
  const autoBio = document.getElementById('autoBio');
  const aboutText = document.getElementById('aboutText');
  autoBio.textContent = profileConfig.summary;
  aboutText.textContent = profileConfig.summary + ' I enjoy solving real-world problems with data and building robust ML systems.';
  document.getElementById('year').textContent = new Date().getFullYear();
  renderAboutStats();
  const img = document.getElementById('profileImg');

  if (img) {
    // Always load from static folder
    img.src = '/static/Subham.jpg';  // change path to your actual image
  }
}

// Skills grid
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  profileConfig.skills.forEach(skill => {
    const card = createEl('div', 'flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 card-anim');
    card.innerHTML = `<span class="text-lg">${skill.icon}</span><span class="text-sm">${skill.name}</span>`;
    grid.appendChild(card);
  });
}

// Timeline
function renderTimeline() {
  const list = document.getElementById('timeline');
  list.innerHTML = '';
  profileConfig.timeline.forEach(item => {
    const li = createEl('li', 'relative');
    li.innerHTML = `
      <span class="absolute -left-[9px] top-1.5 w-3 h-3 rounded-full bg-amber-500 timeline-dot"></span>
      <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div class="flex items-center justify-between">
          <h3 class="font-semibold">${item.title} · <span class="text-amber-600 dark:text-amber-400">${item.org}</span></h3>
          <span class="text-xs text-slate-500">${item.period}</span>
        </div>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${item.desc}</p>
      </div>`;
    list.appendChild(li);
  });
}

// Contact form (mailto fallback)
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');
  const toast = document.getElementById('toast');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) { status.textContent = 'Please fill all fields.'; status.className = 'text-red-600'; return; }
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:subham@example.com?subject=Portfolio Inquiry&body=${body}`;
    status.textContent = 'Opening your email client...'; status.className = 'text-slate-500';
    if (toast) { toast.classList.remove('hidden'); setTimeout(() => toast.classList.add('hidden'), 2200); }
  });
}

// GitHub: fetch repos, pick featured, render cards, filters, and stats
const GITHUB_USERNAME = 'Subham9Kumar3Das';

function inferTagsFromRepo(repo) {
  const name = (repo.name || '').toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const topics = (repo.topics || []).map(t => t.toLowerCase());
  const text = `${name} ${desc} ${topics.join(' ')}`;
  const tags = [];
  if (/ml|machine[- ]learning|pytorch|tensorflow|sklearn|classifier|regression|cnn|rnn|nlp|llm/.test(text)) tags.push('ai-ml');
  if (/data|pandas|numpy|etl|analysis|analytics|visualization|eda|kaggle|dataset/.test(text)) tags.push('data-science');
  if (/dsa|algorithm|leetcode|cp|problem[- ]solving|graph|tree|dp\b/.test(text)) tags.push('dsa');
  if (/web|react|node|express|api|frontend|backend|flask|django|fastapi/.test(text)) tags.push('web');
  return tags.length ? tags : ['web'];
}

function projectCard(repo) {
  const tags = inferTagsFromRepo(repo);
  const badges = tags.map(t => `<span class="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-700">${t}</span>`).join(' ');
  const lang = repo.language ? `<span class="px-2 py-0.5 rounded-md text-xs bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">${repo.language}</span>` : '';
  const stars = typeof repo.stargazers_count === 'number' ? `⭐ ${repo.stargazers_count}` : '';
  return `
  <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-soft transition-shadow">
    <div class="flex items-start justify-between gap-3">
      <h3 class="font-semibold text-lg">${repo.name}</h3>
      <a href="${repo.html_url}" target="_blank" class="text-sky-600 dark:text-sky-400 text-sm">GitHub →</a>
    </div>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${repo.description || ''}</p>
    <div class="mt-4 flex flex-wrap gap-2 items-center">
      ${lang}
      ${badges}
      <span class="ml-auto text-xs text-slate-500">${stars}</span>
    </div>
  </div>`;
}

async function fetchRepos() {
  const headers = { 'Accept': 'application/vnd.github+json' };
  // Try to include topics via preview header
  headers['Accept'] = 'application/vnd.github.mercy-preview+json, application/vnd.github+json';
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { headers });
  if (!res.ok) throw new Error('Failed to fetch GitHub repos');
  const repos = await res.json();
  return repos.filter(r => !r.fork);
}

async function fetchUserStats() {
  const headers = { 'Accept': 'application/vnd.github+json' };
  const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
  const user = await userRes.json();
  return { public_repos: user.public_repos, followers: user.followers, following: user.following, public_gists: user.public_gists };
}

function rankFeatured(repos) {
  const score = (r) => {
    const tags = inferTagsFromRepo(r);
    let s = 0;
    if (tags.includes('ai-ml')) s += 5;
    if (tags.includes('data-science')) s += 4;
    if (tags.includes('dsa')) s += 3;
    s += Math.min(5, r.stargazers_count || 0);
    s += Math.min(5, Math.floor((Date.now() - new Date(r.pushed_at).getTime()) / (1000*60*60*24)) < 60 ? 5 : 0);
    return s;
  };
  return [...repos].sort((a,b) => score(b) - score(a)).slice(0, 6);
}

function renderProjects(repos) {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  repos.forEach(r => {
    const card = createEl('div');
    card.innerHTML = projectCard(r);
    card.dataset.tags = inferTagsFromRepo(r).join(' ');
    grid.appendChild(card);
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('projectsGrid');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    Array.from(grid.children).forEach(card => {
      const tags = (card.dataset.tags || '').split(' ');
      const show = filter === 'all' || tags.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  }));
}

function renderStats(stats) {
  const container = document.getElementById('stats');
  container.innerHTML = '';
  const items = [];
  items.forEach(i => {
    const card = createEl('div', 'p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800');
    card.innerHTML = `<div class="text-2xl font-bold">${i.value}</div><div class="text-xs text-slate-500">${i.label}</div>`;
    container.appendChild(card);
  });
}

function renderCuratedProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  profileConfig.projects.forEach(p => {
    const card = createEl('div');
    const badges = (p.tags || []).map(t => `<span class=\"px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-700\">${t}</span>`).join(' ');
    const lang = p.language ? `<span class=\"px-2 py-0.5 rounded-md text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300\">${p.language}</span>` : '';
    card.innerHTML = `
      <div class=\"p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-soft transition-shadow card-anim\">
        <div class=\"flex items-start justify-between gap-3\">
          <h3 class=\"font-semibold text-lg\">${p.name}</h3>
          <a href=\"${p.url}\" target=\"_blank\" class=\"text-amber-600 dark:text-amber-400 text-sm\">GitHub →</a>
        </div>
        <p class=\"mt-2 text-sm text-slate-600 dark:text-slate-300\">${p.description || ''}</p>
        <div class=\"mt-4 flex flex-wrap gap-2 items-center\">
          ${lang}
          ${badges}
        </div>
      </div>`;
    card.dataset.tags = (p.tags || []).join(' ');
    grid.appendChild(card);
  });
  grid.classList.add('stagger');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  themeToggle();
  populateProfile();
  renderSkills();
  renderTimeline();
  setupContactForm();
  setupFilters();
  renderCuratedProjects();
  setupRevealOnScroll();
  startNameTypewriter();
});

// On-scroll reveal
function setupRevealOnScroll() {
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.id === 'projects') {
          const grid = document.getElementById('projectsGrid');
          grid && grid.classList.add('visible');
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

// Smooth typewriter for name
function startNameTypewriter() {
  const target = document.getElementById('nameType');
  if (!target) return;
  const full = 'Subham Kumar Das';
  let i = 0;
  const speed = 60;
  function step() {
    if (i <= full.length) {
      target.textContent = full.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

// About quick stats badges
function renderAboutStats() {
  const el = document.getElementById('aboutStats');
  if (!el) return;
  el.innerHTML = '';
  const items = [
    { label: 'Projects', value: String(profileConfig.projects.length) },
    { label: 'Key Skills', value: String(profileConfig.skills.length) },
    { label: 'Internship', value: 'Unified Mentor' }
  ];
  items.forEach(i => {
    const badge = createEl('div', 'px-3 py-1.5 rounded-lg text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40');
    badge.textContent = `${i.label}: ${i.value}`;
    el.appendChild(badge);
  });
}


