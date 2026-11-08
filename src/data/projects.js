const projects = [
  {
    id: "paper-haven",
    name: "Paper Haven",
    image: "/images/projects/paper-haven.png",
    description:
      "An online library application where users can add books, explore collections, borrow books, and manage their reading activities.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Express.js", "MongoDB"],
    liveLink: "https://paper-haven-web-client.vercel.app/",
    clientRepo: "https://github.com/pranta77/Paper-Haven-Website-Client",
    serverRepo: "#",
    challenges: [
      "Implementing user authentication and private routes.",
      "Managing book availability and borrowing functionality.",
      "Connecting the frontend with the MongoDB backend.",
    ],
    improvements: [
      "Add book reviews and ratings.",
      "Improve book search and filtering.",
      "Add reading history and recommendations.",
    ],
  },
  {
    id: "bazar-dor",
    name: "Bazar Dor",
    image: "/images/projects/bazar-dor.png",
    description:
      "A grocery price tracking platform that helps users explore product categories and stay informed about market prices.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "API Integration",
      "Better Auth",
    ],
    liveLink: "https://bazar-dor-website-a07.vercel.app/",
    clientRepo: "https://github.com/pranta77/Bazar-Dor-Website-A07",
    serverRepo: "#",
    challenges: [
      "Integrating external APIs and handling dynamic data.",
      "Building category-based product navigation.",
      "Implementing authentication and deployment.",
    ],
    improvements: [
      "Add historical price comparisons.",
      "Improve product search functionality.",
      "Add price notifications.",
    ],
  },
  {
    id: "fit-log",
    name: "Fit-Log",
    image: "/images/projects/fit-log.png",
    description:
      "A fitness tracking application that helps users organize workout plans and manage their fitness activities.",
    technologies: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "JavaScript"],
    liveLink: "https://fit-log-app-a06.vercel.app/",
    clientRepo: "https://github.com/pranta77/Fit-Log-App-A06",
    serverRepo: "#",
    challenges: [
      "Managing workout plan state.",
      "Creating a responsive dashboard.",
      "Organizing workout data efficiently.",
    ],
    improvements: [
      "Add workout progress charts.",
      "Introduce personalized workout recommendations.",
      "Add workout history tracking.",
    ],
  },
];

export default projects;
