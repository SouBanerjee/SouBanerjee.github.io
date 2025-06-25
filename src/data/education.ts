export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2018—2025",
    institution: "Indian Institute of Technology Kanpur",
    degree: "Ph.D. in Computer Science and Engineering",
    advisor: "Prof. Piyush Rai & Prof. Vinay P. Namboodiri (University of Bath/External)",
    thesis: "Adaptable and Efficient AI Systems via Lifelong Learning and Unlearning",
  },
  {
    year: "2018—2023",
    institution: "Indian Institute of Technology Kanpur",
    degree: "M.Tech. in Computer Science and Engineering",
    advisor: "Prof. Piyush Rai & Prof. Vinay P. Namboodiri (University of Bath/External)",
    thesis: "Self-Supervision meets Active Learning",
  },
  {
    year: "2016—2018",
    institution: "Banaras Hindu University",
    degree: "M.Sc. in Computer Science",
    // thesis: "A Medoid-Based Weighting Scheme for Qualitative Improvement of Nearest Neighbor Decision Rule",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2013—2016",
    institution: "Ramakrishna Mission Vidyamandira",
    degree: "B.Sc. in Computer Science (H)",
  },
];
