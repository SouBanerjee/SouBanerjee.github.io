export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Soumya Banerjee",
  title: "Postdoc Associate",
  institution: "Duke University",
  // Note that links work in the description
  description:
    "Hi! I'm a Postdoctoral Associate in the \
    <a href='https://www.ece.duke.edu/'>Department of Electrical and Computer Engineering</a> \
    at <a href='https://www.duke.edu/'>Duke University</a>, working under the supervision of \
    <a href='https://ece.duke.edu/faculty/lawrence-carin'>Prof. Lawrence Carin</a>. \
    My research focuses on generative modeling and computer vision, particularly understanding \
    the role of transformers attention block in implementing functional gradient descent (GD) inference for contextual data with categorical outcomes. \
    Additionally, I am exploring how to adapt pretrained diffusion models, such as Stable Diffusion, \
    for conditional generation of unseen classes or concepts using multimodal prompts and retrieval augmented generation. \
    Previously, I was a PhD student in the <a href='www.cse.iitk.ac.in'>Department of Computer Science and Engineering</a> \
    at <a href='www.iitk.ac.in'>IIT Kanpur</a>, advised by <a href='https://www.cse.iitk.ac.in/users/piyush/'>Prof. Piyush Rai</a> \
    and <a href='https://vinaypn.github.io/'>Prof. Vinay P. Namboodiri</a> \
    (<a href='https://www.bath.ac.uk/departments/department-of-computer-science/'>University of Bath</a>). \
    Before that, I completed my Master's in <a href='https://bhu.ac.in/Site/UnitHomeTemplate/2_8_1146_Faculty-of-Science-Computer-Science'>Computer Science</a> \
    from <a href='https://bhu.ac.in/Site/Home/1_2_16_Main-Site'>Banaras Hindu University</a> \
    and my Bachelor's from <a href='https://vidyamandira.ac.in/'>Ramakrishna Mission Vidyamandira</a>.",
  email: "[first_name]dot[last_name]@duke.edu",
  imageUrl:"/images/IMG_webpage.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=p7BoMpMAAAAJ&hl=en",
  githubUsername: "soubanerjee",
  linkedinUsername: "soubanerjee",
  twitterUsername: "SouBanerjeecse",
  //blogUrl: "https://",
  cvUrl: "https://www.dropbox.com/scl/fi/t4bv1gzw9m9dasib53muk/cv.pdf?rlkey=ouyw0nsqx1vlg691zdxxj0c1t&st=j6fqr5wo&dl=0",
  institutionUrl: "https://www.duke.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
