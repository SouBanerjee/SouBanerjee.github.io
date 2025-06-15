export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [  
  {
    "year": "2024",
    "conference": "British Machine Vision Conference (BMVC)",
    "title": "RISSOLE: Parameter-efficient Diffusion Models via Block-wise Generation and Retrieval-Guidance",
    "authors": "Mukherjee, A; Banerjee, S; Rai, P; Namboodiri, VP",
    "paperUrl": "https://arxiv.org/pdf/2408.17095"
  },
  {
    "year": "2024",
    "conference": "International Conference on Robotics and Automation (ICRA)",
    "title": "Verse: Virtual-gradient Aware Streaming Lifelong Learning with Anytime Inference",
    "authors": "Banerjee, S; Verma, VK; Mukherjee, A; Gupta, D; Namboodiri, VP; Rai, P",
    "paperUrl": "https://arxiv.org/pdf/2309.08227",
  },
  {
    "year": "2023",
    "conference": "International Conference on Robotics and Automation (ICRA)",
    "title": "Streaming LifeLong Learning With Any-Time Inference",
    "authors": "Banerjee, S; Verma, VK; Namboodiri, VP",
    "paperUrl": "https://arxiv.org/pdf/2301.11892",
  },
  {
    "year": "2024",
    "conference": "Atmospheric Environment",
    "title": "A Hybrid Approach for Integrating Micro-Satellite Images and Sensors Network-Based Ground Measurements Using Deep Learning for High-Resolution Prediction of Fine Particulate Matter (PM2.5) over an Indian City, Lucknow",
    "authors": "Tripathi, Sachchida; Jain, Vaishali; Mukherjee, Avideep; Madhwal, Sandeep; Bergin, Michael H.; Bhave, Prakash; Carlson, David; Jiang, Ziyang; Rai, Piyush",
  },
  
  {
    "year": "2023",
    "conference": "European Geosciences Union - General Assembly",
    "title": "Predicting PM2.5 based on micro-satellite imagery and low-cost sensor network using CNN-RT-RF Joint Model",
    "authors": "Tripathi, S; Jain, V; Mukherjee, A; Banerjee, S; Rai, P; Madhwal, S",
    "paperUrl": "https://ui.adsabs.harvard.edu/abs/2023EGU12345T/abstract",
  },
];
