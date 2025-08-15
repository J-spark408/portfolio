import { Project } from "../types";
import gabin_logo from "../components/images/gabin_logo.jpg";
import tip_image from "../components/images/tip_image.jpg";
import weekly_todo from "../components/images/weekly_todo.jpg";

export const projects: Project[] = [
  {
    id: 1,
    title: "Web Creation Platform",
    description:
      "A modern, SEO-optimized restaurant website built using Wix Studio, featuring an interactive menu, reservation system, and e-commerce integration.",
    longDescription:
      "This project involved designing and launching a website for a newly established restaurant using Wix Studio. The platform's drag-and-drop functionality allowed for efficient layout creation, but the project extended beyond visual design. I implemented basic SEO indexing to enhance search visibility and integrated essential restaurant features, including a full digital menu, restaurant background information, Yelp-based reservation links, and a Toast-powered gift card purchasing option.",
    image: gabin_logo,
    category: "web",
    tags: ["Wix Studio", "Web Design"],
    features: [
      "Built using Wix Studio with custom layout and design.",
      "SEO indexing for better online visibility.",
      "Integrated full restaurant menu with responsive design.",
      "Collaborative design process with direct client feedback and revisions.",
    ],
    githubUrl: null,
    liveUrl: "https://www.gabinkoreangrill.com",
  },
  {
    id: 2,
    title: "Educational Game (ShakeIt Up)",
    description:
      "An educational 2D game built in GameMaker Language that simulates cocktail creation.",
    longDescription:
      "This project is a 2D educational game developed using GameMaker Language (GML) that teaches users how to mix cocktails through interactive simulation. Featuring custom-designed graphics, animated sprites, and intuitive gameplay, the game offers a visually engaging experience. A core feature of the project is its modular recipe system, which allows for easy expansion—new cocktails and ingredients can be added with minimal effort.",
    image:
      "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "game",
    tags: ["GML"],
    features: [
      "Built using GameMaker Language (GML) for a robust development environment",
      "2D graphics with custom sprites and animations for an engaging visual style",
      "Educational gameplay focused on cocktail mixing and recipe accuracy",
      "Modular drink system for easy addition of new recipes and ingredients",
      "Designed with future scalability in mind",
    ],
    githubUrl: "https://github.com/J-spark408/Shakeitup",
    liveUrl: "https://jsparkk.itch.io/shakeit-up",
  },
  {
    id: 3,
    title: "Daily Task Calendar",
    description:
      "A full-stack web application for personalized event and checklist management.",
    longDescription:
      "This application allows users to create accounts, log in, and securely manage weekly events and checklists. Events can be created, edited, deleted, and pinned. User authentication and data persistence are handled through a secured backend.",
    image: weekly_todo,
    category: "web",
    tags: ["React", "JavaScript", "Node.js", "MongoDB"],
    features: [
      "User authentication and personalized event storage",
      "CRUD operations using Axios for HTTP requests",
      "Full functionality to Create, Read, Update, and Delete events",
      "Storing Data in MongoDB for reliability",
    ],
    githubUrl: "https://github.com/J-spark408/TodoApp",
    liveUrl: "http://weeklytodo.netlify.app",
  },
  {
    id: 4,
    title: "Daily Tip Organizer Mobile App",
    description: "A mobile application to log and track daily work tips.",
    longDescription:
      "The Daily Tip Organizer is a cross-platform mobile application developed using React Native, designed to help service industry workers efficiently track their daily earnings. Users can log the tips they receive at the end of each shift by entering the amount, date, and shift type (lunch or dinner). The app aggregates this data and displays earnings summaries on a daily, weekly, and monthly basis, making it easy to monitor income trends over time.",
    image: tip_image,
    category: "mobile",
    tags: ["React Native", "Node.js"],
    features: [
      "React Native for cross-platform mobile support",
      "Input system for logging daily tips",
      "Earnings tracker summary",
      "Intuitive interface for fast data entry",
      "Local state management for real-time data display and performance",
    ],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    id: 5,
    title: "Connect Four with AI (Project)",
    description:
      "A browser-based Classic Connect Four game featuring player vs AI mode.",
    longDescription:
      "This project is a web-based implementation of the classic Connect Four game, developed using HTML, CSS, and JavaScript. It features a challenging AI opponent powered by the minimax algorithm with alpha-beta pruning, ensuring efficient and optimal decision-making.",
    image:
      "https://www.sciencebuddies.org/51bmjfuB2tMQUMzB1_Pafdt13-k=/750x419/-/https/www.sciencebuddies.org/cdn/Files/20146/8/connect-4-game-tree-diagram.png",
    category: "web",
    tags: ["React", "JavaScript", "HTML DOM", "CSS"],
    features: [
      "Developed using HTML, CSS, and JavaScript for cross-browser compatibility",
      "AI opponent powered by the minimax algorithm with alpha-beta pruning",
      "Responsive design with clear UI transitions and dynamic screen updates",
      "Efficient DOM manipulation for gameplay interactions and visual feedback",
      "Classic Connect Four mechanics with a modern, interactive twist",
    ],
    githubUrl: "https://github.com/J-spark408/AI_4CONNECT",
    liveUrl: "https://jspark4connect.netlify.app",
  },
];
