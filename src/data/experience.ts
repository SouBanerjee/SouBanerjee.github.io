export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "January 2025 - Present",
    title: "Postdoc Associate",
    company: "EECE @ Duke University",
    description:
      "Working on Transformers, Generative Modelling and Computer Vision",
    advisor: "Prof. Lawrence Carin",
    // companyUrl: "https://www.ece.duke.edu/",
  },
  {
    date: "June 2022 - December 2024",
    title: "Senior Student Research Associate",
    company: "Indian Institute of Technology Kanpur",
    description:
      "Developed novel algorithms for prediction of PM 2.5 concentration in the environment.",
    advisor: "Prof. Sachida Nand Tripathi & Prof. Piyush Rai",
    // companyUrl: "https://iitk.ac.in",
  },
  {
    date: "May 2021 - November 2021",
    title: "AI / ML Intern",
    company: "Verisk Analytics",
    description:
      "Worked on developing active learning methods.",
    // manager: "Vipin Gupta",
    // companyUrl: "https://www.verisk.com/",
  },
  // {
  //   date: "Summer 2017",
  //   title: "Summer Intern",
  //   company: "Indian Statistical Institute, Kolkata",
  //   description:
  //     "Worked on developing classical solutions to unconstrained video recognition using SIFT and HOG features.",
  //   advisor: "Prof. Partha Pratim Mohanty",
  //   companyUrl: "https://isical.ac.in",
  // },
];
