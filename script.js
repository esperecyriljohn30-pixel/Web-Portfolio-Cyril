/* ============================================================
   ✏️  DATA — Edit here to personalise your portfolio
   ============================================================ */

const SKILLS = [
  {
    category: "Front-End",
    icon: "🌐",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript ", level: 75 },
      { name: "React Native", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚙️",
    items: [
      { name: "Bootstrap", level: 70 },
      { name: "React (learning)", level: 45 },
      { name: "Tailwind CSS (learning)", level: 40 },
      { name: "Laravel", level: 60 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    items: [
      { name: "VS Code", level: 90 },
      { name: "Github Copilot", level: 70 },
      { name: "Git/GitHub", level: 65 },
      { name: "Figma", level: 50 },
    ],
  },
  {
    category: "Back-End",
    icon: "🗄️",
    items: [
      { name: "PHP", level: 40 },
      { name: "MySQL", level: 45 },
      { name: "Node.js (learning)", level: 35 },
    ],
  },
];

const PROJECTS = [
  {
    type: "Capstone Project",
    emoji: "1",
    title: "Project PACE: A Web-Based Payroll, Installment Monitoring, and Business Management System for Z-LICZ Appliances and Furniture",
    desc: "A comprehensive web application designed to streamline payroll processing, installment tracking, and overall business management for Z-LICZ Appliances and Furniture. Built with a focus on user-friendly interfaces and efficient data handling.",
    tags: ["HTML", "CSS Tailwind", "JavaScript", "PHP", "Laravel", "MySQL"],
    demo: "#",
    repo: "#",
    
  },
  {
    type: "Mini-Capstone Project",
    emoji: "2",
    title: "Clinic Management System",
    desc: "A web application that allows clinics to manage patient records, appointments, and billing. Features include a responsive design, secure authentication, and an intuitive dashboard for healthcare providers.",
    tags: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    demo: "#",
    repo: "#",
  },
  {
    type: "Portfolio Project",
    emoji: "3",
    title: "Web Portfolio Template",
    desc: "A sleek and modern portfolio template built with HTML, CSS, and JavaScript. It features a responsive design, smooth animations, and a clean layout to showcase projects and skills effectively.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    repo: "#",
  },
  
  

];

const ACHIEVEMENTS = [
  {
    icon: "🏅",
    title: "Java Fundamentals Certificate",
    issuer: "A basic programming course that introduces the core concepts of java, including variables, loops, conditionals, object-oriented programming, and basic data structures.",
    date: "",
  },
  {
    icon: "🎖️",
    title: "Completion of SAP",
    issuer: "A certification or acknowledgment for successfully completing the SAP (Systems, Applications, and Products) training program, which focuses on enterprise software solutions for business management.",
    date: "",
  },
  {
    icon: "🥇",
    title: "NCII in Computer System Servicing",
    issuer: "A vocational qualification that certifies an individual's competence in providing technical support and maintenance for computer systems, including hardware and software troubleshooting, installation, and repair.",
    date: "",
  },
  
];

/* ============================================================
   RENDER — You don't need to edit below this line
   ============================================================ */

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Hamburger
const ham = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
ham.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

// Skills
const skillsGrid = document.getElementById("skillsGrid");
SKILLS.forEach((cat, ci) => {
  const card = document.createElement("div");
  card.className = `skill-card reveal reveal-delay-${(ci % 3) + 1}`;
  card.innerHTML = `
    <div class="skill-card-head">
      <div class="skill-icon">${cat.icon}</div>
      <h3>${cat.category}</h3>
    </div>
    ${cat.items
      .map(
        (s) => `
      <div class="skill-bar-wrap">
        <div class="skill-bar-label"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
      </div>
    `,
      )
      .join("")}
  `;
  skillsGrid.appendChild(card);
});

// Projects
const projectsGrid = document.getElementById("projectsGrid");
PROJECTS.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = `project-card reveal reveal-delay-${(i % 3) + 1}`;
  card.innerHTML = `
    <div class="project-thumb">
      <div class="thumb-bg"></div>
      <div class="thumb-label">${p.emoji}</div>
    </div>
    <div class="project-body">
      <div class="project-type">${p.type}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="project-links">
        <a href="${p.demo}" class="project-link" target="_blank">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>
        <a href="${p.repo}" class="project-link" target="_blank">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          GitHub
        </a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});

// Achievements
const achievementsGrid = document.getElementById("achievementsGrid");
ACHIEVEMENTS.forEach((a, i) => {
  const card = document.createElement("div");
  card.className = `achievement-card reveal reveal-delay-${(i % 3) + 1}`;
  card.innerHTML = `
    <div class="ach-icon">${a.icon}</div>
    <div class="ach-body">
      <h3>${a.title}</h3>
      <p>${a.issuer}</p>
      <div class="ach-date">${a.date}</div>
    </div>
  `;
  achievementsGrid.appendChild(card);
});

// Intersection Observer — reveal + skill bars
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
          bar.style.width = bar.dataset.level + "%";
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
