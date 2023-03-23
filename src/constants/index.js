import {
  frontend,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  go,
  bootstrap,
  nodejs,
  mongodb,
  git,
  photoshop,
  python,
  nielit,
  unipune,
  udemy,
  cohsem,
  dalle,
  covid,
  songarin,
  c_lang,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C",
    icon: c_lang,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Bachelor of Computer Applications",
    company_name: "Modern College • Pune University",
    icon: unipune,
    iconBg: "#383E56",
    date: "July 2019 - Sept 2022",
    points: [
      "Year 1: Computer organization, Programming in C, RDBMS, Mathematics, Communication skills",
      "Year 2: OOPs using C++, RDBMS, Software Engineering, Networking, Web Technology, Cloud Computing",
      "Year 3: Java, Operating System, Software Testing, Project Management, Internet of Things",
    ],
  },
  {
    title: "Higher Secondary Education",
    company_name: "ACHSS, Ukhrul • COHSEM",
    icon: cohsem,
    iconBg: "#E6DEDD",
    date: "July 2017 - June 2019",
    points: [
      "Not the brightest student but I enjoyed the companionship of both my peers and educators during my academic years.",
      "One of the best learning institution available in town, coupled with green and friendly neighbourhood.",
      "Well structured syllabus and favourable learning environment for students.",
    ],
  },
];
const certifications = [
  {
    title: "Web Development Bootcamp",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#383E56",
    date: "September 2021 - March 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, MongoDB and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Hands on practice and projects.",
    ],
  },
  {
    title: "Course on Computer Concept",
    company_name: "NIELIT",
    icon: nielit,
    iconBg: "#E6DEDD",
    date: "August 2017",
    points: [
      "My knowledge about Computers expanded during the 80 hours short term course.",
      "Exposure to Microsoft Office tools likes Word, Excel, Presentation.",
      "Introduced to the world of Web Technologies and Cyber Security.",
    ],
  },
];

const projects = [
  {
    name: "Dall-E Clone",
    description:
      "An AI image generator made using a popular OpenAI API DALL-E. Generate imaginative and stunning images through DALL-E AI and share it with the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/LightSSSDark/Dall-e-Clone",
  },
  {
    name: "Covid Outbreak Simulation",
    description:
      "A small project to simulate the behaviour of Covid virus showing real time graph of infected, dead and recovered data.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Linux",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    source_code_link: "https://github.com/LightSSSDark/COVID-outbreak-simulation",
  },
  {
    name: "My Portfolio Website",
    description:
      "A detailed information about my educational background, certifications, projects and skills. This website is still in development. More infomation to be added.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: songarin,
    source_code_link: "https://github.com/LightSSSDark/song",
  },
];

export { services, technologies, experiences, certifications, projects };
