// Importing project images
import Project1 from "./assets/project1.jpeg";
import Project2 from "./assets/project2.jpg";
import SGH from "./assets/SGHLogo.png";
import Cart from "./assets/cart.jpg";

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
      "Skilled in front-end technologies like Bootstrap and React.js as well as back-end development using Laravel and Flask.",
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
  {
    id: 3,
    img: SGH,
    category: "Web App",
    title: "SGH: Seri Gemilang Hub",
    description:
      "Developed a Laravel Framework web app to streamline school operations, featuring user management, real-time attendance tracking, teacher's whereabouts, and notice board.",
    link: "https://github.com/khrlaimn/SeriGemilangHub",
  },
  {
    id: 4,
    img: Cart,
    category: "Machine Learning",
    title: "Customer's Purchasing Intention",
    description:
      "To predicts customer purchasing intentions, featuring models like Random Forest, Logistic Regression, and KNN, with hyperparameter tuning and performance assessment.",
    link: "https://github.com/khrlaimn/Customer-Purchasing-Intention",
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
      "I explored a variety of subjects during my degree programmes, such as Web Application Development, Machine Learning and Data Analytics, Mobile Application Development, Parallel Computing, and Java Programming. Apart from enhancing my skills, this comprehensive subject has assisted me in obtaining my current CGPA of 3.71, which demonstrates my commitment to comprehending complex software engineering principles. ",
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
    title: "Star Fortune Global",
    subtitle: "Internship Trainee",
    date: "Jun 2021 - August 2021",
    description:
      " Managed the company's Facebook page, creating engaging content and introducing weekly 'Fun Fact Friday' and 'Wiki Wednesday' posters, which significantly enhanced audience interaction. Produced visually striking event posters that boosted the company's online presence, leading to a 195.2% increase in post engagement, a 346% rise in page visits, and a 193.2% growth in page followers. ",
    category: "experience",
  },

  {
    id: 3,
    title: "Intel Corporation",
    subtitle: "Software Engineering Internship",
    date: "July 2024 - Present",
    description:
      "Implemented tailored IT solutions for the Test Engineering department, optimizing workflows and integrating OEE metrics through a Flask-based web dashboard for real-time monitoring, resulting in a 60% enhancement in workstation quality and up to 80% improvement in productivity. ",
    category: "experience",
  },
];
