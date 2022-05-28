export type Job = {
  id: string;
  companyName: string;
  jobTitle: string;
  jobPeriod: string;
  jobDescription: string[];
  isSelected: boolean;
};

export const list: Job[] = [
  {
    id: "1",
    companyName: "Eukarya",
    jobTitle: "Software Engineer",
    jobPeriod: "June 2022 - Present",
    jobDescription: [
      "Front end graphical user interface design.",
      "Software testing and quality assurance.",
      "Object-oriented Design and Analysis.",
      "Design, code and debug applications in various software languages.",
    ],
    isSelected: true,
  },
  {
    id: "2",
    companyName: "InfoStellar",
    jobTitle: "Software Engineer",
    jobPeriod: "February - June 2022",
    jobDescription: [
      "Built highly scalable distributed solutions that enable positive user experiences and measurable business growth",
      "Worked with agile development methodologies, adhering to best practices and pursuing continued learning opportunities.",
      "Developed new features and infrastructure development in support of rapidly emerging business and project requirements.",
    ],
    isSelected: false,
  },
  {
    id: "3",
    companyName: "Kokus Japan",
    jobTitle: "Front-end Engineer",
    jobPeriod: "August 2020 - February 2022",
    jobDescription: [
      "Developed and shipped highly interactive web applications using Angular and React",
      "Architected and implemented the front-end of many web applications",
      "Worked with a variety of different languages, platforms, frameworks, and cloud services such as JavaScript, TypeScript, Angular, React, Python, GraphQL, and AWS",
    ],
    isSelected: false,
  },
];
