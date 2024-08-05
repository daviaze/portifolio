export interface Portifolio {
  title: string;
  description: string;
  general: string;
  tecnologies: string[];
  problemDescription: string;
  solutionDescription: string;
  responsibility: string;
}

export function getAllPortifolio(): Portifolio[] {
  return [
    {
      "title": "Website Development",
      "description": "Developed a responsive website for a local business.",
      "general": "Web Development Project",
      "tecnologies": ["HTML", "CSS", "JavaScript", "React"],
      "problemDescription": "The client needed a modern, responsive website to attract more customers.",
      "solutionDescription": "Created a fully responsive website using React, with a modern design and user-friendly interface.",
      "responsibility": "Full-stack development, including design, implementation, and testing."
    },
    {
      "title": "Mobile App Development",
      "description": "Developed a mobile app for a fitness startup.",
      "general": "Mobile Development Project",
      "tecnologies": ["Flutter", "Dart"],
      "problemDescription": "The startup needed a mobile app to engage users with their fitness programs.",
      "solutionDescription": "Developed a cross-platform mobile app using Flutter, with features for tracking workouts and nutrition.",
      "responsibility": "Front-end and back-end development, as well as deployment to app stores."
    },
    {
      "title": "E-commerce Platform",
      "description": "Built an e-commerce platform for an online retailer.",
      "general": "E-commerce Project",
      "tecnologies": ["Magento", "PHP", "MySQL"],
      "problemDescription": "The retailer required a robust platform to manage online sales and inventory.",
      "solutionDescription": "Implemented an e-commerce solution using Magento, with custom features for inventory management and order processing.",
      "responsibility": "Platform customization, database management, and integration with payment gateways."
    },
    {
      "title": "Data Analysis Tool",
      "description": "Created a data analysis tool for a financial firm.",
      "general": "Data Analysis Project",
      "tecnologies": ["Python", "Pandas", "NumPy", "Matplotlib"],
      "problemDescription": "The firm needed a tool to analyze large datasets and generate reports.",
      "solutionDescription": "Developed a tool using Python and related libraries to process data and create visualizations.",
      "responsibility": "Data processing, analysis, and visualization."
    },
    {
      "title": "Social Media Integration",
      "description": "Integrated social media platforms for a marketing company.",
      "general": "Integration Project",
      "tecnologies": ["Node.js", "Express", "MongoDB"],
      "problemDescription": "The company needed to manage multiple social media accounts from a single platform.",
      "solutionDescription": "Developed a backend system using Node.js to integrate various social media APIs.",
      "responsibility": "API integration, backend development, and database management."
    }
  ];
}
