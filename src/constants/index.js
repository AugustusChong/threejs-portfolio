import {
  immersed,
  linkedin,
  csharp,
  dotnet,
  html5,
  javascript,
  react,
  redux,
  threejs,
  css3,
  tailwind,
  sass,
  git,
  analyticsDashboard,
  threejsPortfolio,
  tetrisRedux,
} from "../assets";

export const resumeUrl =
  "https://docs.google.com/document/d/1LWTTC8dtXyYUog7hMWBIbREp3tQdb8EgQQaym9bglRM/edit?usp=sharing";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "/lottie/70888-website.lottie",
  },
  {
    title: "Frontend Developer",
    icon: "/lottie/68658-creative-3d-visual-animation-website-development.lottie",
  },
  {
    title: "Backend Developer",
    icon: "/lottie/99804-backend-blue.lottie",
  },
  {
    title: "Software Engineer",
    icon: "/lottie/63487-programming-computer.lottie",
  },
];

const experiences = [
  {
    title: "Full Stack Software Engineer",
    companyName: "Immersed",
    icon: immersed,
    iconBg: "#e0e0e0",
    date: "Aug 2022 - Present",
    points: [
      "Develop and maintain an analytics dashboard for system administrators using React, .NET, and SQL.",
      "Implement responsive design and ensure cross-browser compatibility.",
      "Design and maintain a SQL relational database with multiple tables, stored procedures, and streamlined queries.",
      "Build and implement RESTful APIs using .NET and C#.",
      "Optimize performance and scalability for front-end and back-end.",
      "Debug and troubleshoot issues across the entire stack.",
      "Collaborate with a Scrum team to engage in code reviews, provide status updates, and offer constructive feedback to other developers.",
    ],
  },
];

const linkedinData = {
  url: "https://www.linkedin.com/in/augustuschong/details/experience/",
  icon: linkedin,
};

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "HTML 5",
    icon: html5,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "CSS 3",
    icon: css3,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Git",
    icon: git,
  },
];

const projects = [
  {
    name: "Analytics Dashboard",
    description:
      "An analytics dashboard for Immersed, that allows system administrators to quickly see dynamically generated statistics in a visual format.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dotnet",
        color: "neon-purple-text-gradient",
      },
      {
        name: "sqlserver",
        color: "bright-red-text-gradient",
      },
    ],
    image: analyticsDashboard,
    githubRepo: "https://github.com/AugustusChong/immersed",
  },
  {
    name: "This Website",
    description:
      "An interactive portfolio website utilizing Three.js to display animated 3D computer graphics. I had a lot of fun building this website and I hope you enjoy it!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "bright-blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: threejsPortfolio,
    githubRepo: "https://github.com/AugustusChong/threejs-portfolio",
  },
  {
    name: "Tetris Redux",
    description:
      "A Tetris clone built with React and Redux Toolkit. I built this project to learn more about Redux Toolkit and to practice using it to make a classic game.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "light-purple-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: tetrisRedux,
    githubRepo: "https://github.com/AugustusChong/tetris-react",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  experiences,
  linkedinData,
  technologies,
  projects,
  testimonials,
};
