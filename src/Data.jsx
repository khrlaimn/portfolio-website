// Importing project images
import Project1 from "./assets/project1.jpeg";
import Project2 from "./assets/project2.jpg";

// Navigation links
export const links = [
  {
    name: "Home",
    path: "home",
  },

  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },

  {
    name: "Resume",
    path: "resume",
  },

  {
    name: "Contact",
    path: "contact",
  },
];

// Skills data
export const skills = [
  {
    id: 1,
    name: "Web Development",
    title: "Back-End & Front-End",
    description:
      "Skilled in front-end technologies like Bootstrap and React.js as well as back-end development using Laravel, PHP, and MySQL.",
  },
  {
    id: 2,
    name: " Apps Development ",
    title: " iOS & Android ",
    description:
      "Capable of developing cross-platform mobile applications using Xamarin and stable backend solutions with Google Firebase.",
  },
  {
    id: 3,
    name: " Programming ",
    title: " Python, C++ & Java ",
    description:
      " Proficient in Java, C++, and Python to build scalable, efficient solutions that can be tailored to a variety of programming needs. ",
  },
  {
    id: 4,
    name: " UI/UX Design ",
    title: " Figma ",
    description:
      " Experience in Figma UI/UX design and expertise at designing aesthetically pleasing and intuitive interfaces that improve the user experience. ",
  },
  {
    id: 5,
    name: " Others ",
    title: " Git, Github & VS Code ",
    description:
      "Knowledgeable about GitHub for team development, Git for version control, and VS Code for efficient coding and project management.",
  },
];

// Project data
export const projects = [
  {
    id: 1,
    img: Project1,
    category: "Web App",
    title: "ITMS: Software Project Management",
    description:
      "Software project management system, to be used by ITMS to monitor all software projects and its status.",
    link: "https://github.com/khrlaimn/SoftwareProjectManagement",
  },
  {
    id: 2,
    img: Project2,
    category: "Mobile App",
    title: "NutriTrack",
    description:
      "NutriTrack is a mental health mobile app that assists university students in tracking their meal expenses and finding healthy and affordable meal options on campus.",
    link: "https://github.com/khrlaimn/NutriTrack",
  },
  // {
  //   id: 3,
  //   img: Project3,
  //   category: "Programming",
  //   title: "Explore",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
  // {
  //   id: 4,
  //   img: Project4,
  //   category: "Machine Learning",
  //   title: "Mozar",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  // },
];

// CV data
export const cv = [
  {
    id: 1,
    title: "University Tenaga Nasional",
    subtitle: "Bachelor of Software Engineering Hons.",
    date: "2022 - 2024",
    description:
      "I explored a variety of subjects during my degree programmes, such as Web Application Development, Machine Learning and Data Analytics, Mobile Application Development, Parallel Computing, and Java Programming. Apart from enhancing my skills, this comprehensive subject has assisted me in obtaining my current CGPA of 3.73, which demonstrates my commitment to comprehending complex software engineering principles. ",
    category: "education",
  },

  {
    id: 2,
    title: "University Tenaga Nasional",
    subtitle: "Diploma in Computer Science",
    date: "2019 - 2021",
    description:
      "I learned about Database Systems, Data Structures and Algorithms, Object-Oriented Programming, and many other subjects during my Diploma in Computer Science studies. My overall CGPA of 3.82 indicates my dedication to understanding the core concepts of computer science.",
    category: "education",
  },

  {
    id: 3,
    title: "Internship Trainee",
    subtitle: "Star Fortune Global",
    date: "Jun 2021 - August 2021",
    description:
      "I completed an internship during my diploma studies as a graphic designer, enhancing my creative capacity, design skills, and collaborative abilities. This experience has granted me a renewed perspective on software engineering projects, empowering me to concentrate on delivering solutions that are not only user-centric but also aesthetically pleasing. ",
    category: "experience",
  },
];
