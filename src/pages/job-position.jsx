import jobData from "@/data/jobData.json"
import {useParams} from "react-router-dom";
import PositionDetails from "@/components/career/PositionDetails.jsx";

const jobDetails = {
  title: "Senior Python Developer",
  jobContext: "As a Senior Python Developer, you will be responsible for implementing Website’s functionality and translating design ideas, concepts, and requirements into a functional and engaging game experience.",
  responsibilities: [
    "Planned, designed, and implemented high-quality features while working as part of the development team.",
    "Transform design specification into functional game assets.",
    "Establish an effective strategy and development pipeline.",
    "Design, build, and maintain efficient, reusable, and reliable code.",
    "Ensure the best performance, quality, and responsiveness of applications and games."
  ],
  educationRequirements: [
    "B.Sc. in Computer Science and Engineering from any reputed public or private university.",
  ],
  keyRequirements: [
    "3+ years of experience with Python development.",
    "Proficiency in Python frameworks and libraries like Django, Flask, and NumPy.",
    "Familiarity with front-end technologies like JavaScript, HTML5, and CSS3."
  ],
  salary: ["Negotiable (based on experience and skills)"],
  workPlace: ["Chandrashila Suvastu Tower, Panthapath, Dhaka"],
  compensationBenefits: [
    "Annual performance evaluation and increment.",
    "Festival bonus.",
    "Maternity and paternity leave."
  ],
  applicationProcess: [
    "Call for scheduling.",
    "Interactive interview.",
    "Assessment.",
    "Job offer."
  ]
};
const jobDetailsFullStack = {
  title: "Full Stack Developer",
  jobContext: "As a Full Stack Developer, you will be responsible for designing, building, and maintaining scalable web applications using both front-end and back-end technologies, while ensuring performance, security, and efficiency.",
  responsibilities: [
    "Design, develop, and maintain robust APIs and web applications.",
    "Collaborate with cross-functional teams to define, design, and ship new features.",
    "Optimize the performance of front-end and back-end systems.",
    "Work on both client-side and server-side components.",
    "Ensure the best security practices are followed to protect applications and user data."
  ],
  educationRequirements: [
    "B.Sc. in Computer Science and Engineering or equivalent field."
  ],
  keyRequirements: [
    "3+ years of experience with full-stack development.",
    "Proficiency in front-end technologies like React.js, Vue.js, or Angular.",
    "Strong knowledge of back-end frameworks such as Node.js, Express.js, or Django.",
    "Experience with databases like MongoDB, MySQL, or PostgreSQL."
  ],
  salary: ["Negotiable (based on experience and skills)"],
  workPlace: ["Chandrashila Suvastu Tower, Panthapath, Dhaka"],
  compensationBenefits: [
    "Annual performance evaluation and increment.",
    "Festival bonus.",
    "Flexible working hours."
  ],
  applicationProcess: [
    "Call for scheduling.",
    "Technical assessment.",
    "Interactive interview.",
    "Job offer."
  ]
};
const jobDetailsProductMarketing = {
  title: "Product Marketing",
  jobContext: "As a Product Marketing Specialist, you will be responsible for developing marketing strategies to promote the company's products, analyzing market trends, and driving customer engagement to boost product sales.",
  responsibilities: [
    "Develop and execute marketing strategies to increase product awareness.",
    "Collaborate with product teams to highlight key features and benefits in marketing campaigns.",
    "Analyze market trends and customer feedback to adjust marketing efforts.",
    "Design and implement marketing initiatives that align with product launch schedules.",
    "Ensure consistent brand messaging across all platforms."
  ],
  educationRequirements: [
    "BBA/MBA in Marketing or a related field from a reputed institution."
  ],
  keyRequirements: [
    "2+ years of experience in product marketing or a similar role.",
    "Strong understanding of digital marketing strategies.",
    "Excellent written and verbal communication skills.",
    "Proficiency in marketing tools like Google Analytics, HubSpot, or Mailchimp."
  ],
  salary: ["Negotiable (based on experience and skills)"],
  workPlace: ["Chandrashila Suvastu Tower, Panthapath, Dhaka"],
  compensationBenefits: [
    "Annual performance evaluation and increment.",
    "Festival bonus.",
    "Health insurance."
  ],
  applicationProcess: [
    "Call for scheduling.",
    "Interactive interview.",
    "Case study presentation.",
    "Job offer."
  ]
};

const JobPosition = () => {
  const {position} = useParams()
  const positionDetails = jobData.filter((data) => {
    return data?.title?.replace(/[\s,]+/g, '_').toLowerCase() === position?.replace(/[\s,]+/g, '_').toLowerCase();
  });

  return (
    <>
      <PositionDetails position={position} positionDetails={positionDetails}/>
    </>
  );
};

export default JobPosition;
