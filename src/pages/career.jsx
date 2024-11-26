import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import {ArrowRight} from 'lucide-react';
import CardsComponent from "@/components/services/subservices/CardsComponent";
import jobData from "@/data/jobData.json";
import {Link} from "react-router-dom";

const cards = {
  "cards_list": [
    {
      "id": 1,
      "title": "Call for Scheduling",
      "icon": "/images/life-here/career/icons/call_for_scheduling.png"
    },
    {
      "id": 2,
      "title": "Interview Phase",
      "icon": "/images/life-here/career/icons/interview.png"
    },
    {
      "id": 3,
      "title": "Practical Assessment",
      "icon": "/images/life-here/career/icons/practical_assessment.png"
    },
    {
      "id": 4,
      "title": "Job Offer",
      "icon": "/images/life-here/career/icons/job_offer.png"
    },

  ]
}
/*const jobData = [
    {
        department: "Engineering",
        title: "Network Infrastructure Lead",
        jobType: "Full Time",
        vacancies: 1,
        deadline: "October 27, 2024",
        context: "Nexdecade Technology (Pvt.) Ltd. is a leading value-added service provider in Bangladesh, working with all mobile telecom operators for over 12 years. We manage more than 20 million customers and are pioneers in developing OTT/IPTV/IOT platforms in Bangladesh. With a team of 200+ employees, we are a licensed operator from BTRC and a member of BASIS.",
        description: "We are seeking a highly skilled Network Infrastructure Lead with deep expertise in Linux systems to manage, design, and maintain our distributed network infrastructure and storage systems. The successful candidate will lead the deployment and troubleshooting of complex network and storage solutions, ensuring seamless integration with multiple Internet International Gateways (IIGs). This role also requires proficiency in OTT streaming infrastructure, containerization using Docker and Kubernetes, and the management of Linux-based systems, making the candidate a key player in optimizing network and streaming performance.",
        keyResponsibilities: [
            "Lead the design and deployment of distributed network infrastructure, focusing on routing, switching, and storage integration.",
            "Seamlessly integrate the network with multiple IIGs and efficiently manage the data path.",
            "Troubleshoot complex network issues involving routing, switching, storage, and application layers.",
            "Expert-level management of Linux systems for networking, storage, and security services.",
            "Deploy, configure, and manage NFS storage servers and mount storage endpoints.",
            "Manage network configurations using Cisco SDN, including F5 Load Balancer and NGINX web server environments for high availability.",
            "Implement advanced Linux kernel tuning and network stack optimizations to ensure maximum performance and security."
        ],
        additionalRequirements: [
            "Proven expertise in Linux system administration, including network services, storage management, and security.",
            "Deep understanding of routing and switching protocols and deployment in distributed environments.",
            "Hands-on experience with NFS storage server configuration, deployment, and management.",
            "Strong knowledge of Cisco SDN network management, F5 Load Balancer, and NGINX web server configuration.",
            "Proficiency in managing and optimizing OTT streaming infrastructure with applications like Wowza, Nimble, Zixi and others streaming applications.",
            "Experience with Docker and Kubernetes for containerized applications.",
            "Advanced troubleshooting skills using Linux-based diagnostic tools like tcpdump, iptables, iostat, netstat, and strace.",
            "Strong background in Docker and Kubernetes, with hands-on experience deploying containerized applications."
        ],
        education: "Bachelor's degree in Computer Science, Information Technology, or a related field (or equivalent experience).",
        experience: "10 years of experience in network infrastructure management.",
        compensation: {
            salary: "Negotiable, Most competitive & attractive package in the industry.",
            salaryReview: "Yearly",
            festivalBonus: "2 (Two)"
        },
        otherBenefits: [
            "As per company policy and rules.",
            "An excellent culture that encourages collaboration, growth, and learning.",
            "A competitive salary and consideration for equity.",
            "An ability to directly influence the direction of Nexdecade's product and business.",
            "An autonomous and flexible role where you will be trusted with key tasks.",
            "An opportunity to have real impact and be part of a company with purpose.",
            "A flexible workplace environment."
        ],
        workplace: "Work at office",
        employmentStatus: "Full Time",
        jobLocation: "Dhaka (PanthaPath)"
    },
    {
        department: "Customer Service",
        title: "Executive, Customer Care",
        jobType: "Full Time",
        vacancies: 3,
        deadline: "Not specified",
        educationalRequirements: "Minimum Graduate from a reputed University or A levels.",
        jobRequirements: [
            "Age 20 to 30 year(s).",
            "Male & Female both are allowed to apply.",
            "Must have ability to work on roster schedule including government holidays.",
            "Ensure quality customer service through hotline.",
            "Follow up on customer complaints.",
            "Identify the customer’s needs.",
            "Excellent communication skills with a strong sense of responsibility.",
            "Self-motivated and able to work under pressure in a fast-paced working environment.",
            "Experience with Microsoft Office applications and email.",
            "Be responsible, loyal, self-motivated, proactive, and result-oriented.",
            "Fluent in listening and spoken English, good at written English."
        ],
        experienceRequirements: "Fresher are highly encouraged to apply. Job experience from Mobile operator, ISP, or service provider will get preference.",
        jobNature: "Full-Time",
        salaryRange: "Negotiable",
        otherBenefits: [
            "As per company policy and rules."
        ],
        jobLocation: "Panthapath, Dhaka"
    }
];*/

const Career = () => {
  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'Life at a Glance', href: '/life-at-a-glance'},
    {label: 'Career'},
  ];
  return (
    <section className="bg-white">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={"Find Job That Suit Your"}
        backButton={true}
        backURL={"/life-at-a-glance"}
        description="In our company, fostering a positive and inclusive environment is paramount. We prioritize teamwork, diversity, and employee well-being to drive innovation and success."
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-4 lg:px-8 lg:py-8 mb-4 lg:mb-8 text-center">
        <div className="text-center">
          <h2 className="heading1">Current <span
            className="text-gradiant">Openings</span></h2>
          <p className="text-center description mt-4">Welcome to Our job portal. Apply your desired jobs that best fit
            your
            skills and passions from below.</p>
        </div>
        <div className=" mt-6 flex flex-col items-start justify-between divide-y-2 gap-6">
          {jobData.map((job, index) => (
            <div key={index} className="w-full first:pt-0 pt-5">
              <div className="flex justify-between items-center gap-2 md:gap-3 p-2 rounded-lg hover:bg-accent">
                <Link to={`/life-at-a-glance/career/${job.title.replace(/\s+/g, '_').toLowerCase()}`}
                      className="w-full ">
                  <div className="text-start w-full">
                    <h5 className="mb-1.5 text-base md:text-lg lg:text-xl font-semibold">{job.department}</h5>
                    <h5 className="text-gradiant text-xl md:text-2xl xl:text-3xl">{job.title}</h5>
                    <div
                        className="mt-1.5 w-full md:w-1/2 flex justify-between items-center text-[#7B7B7B] text-[11px] sm:text-sm ">
                      <p>Job Type: {job.jobNature ?? 'N/A'}</p>
                      <p>Vacancies: {job.vacancies ?? 1}</p>
                      <p>Deadline: {job.applicationDeadline ?? 'Not specified'}</p>
                    </div>
                  </div>
                </Link>
                <Link to={`/life-at-a-glance/career/${job.title.replace(/\s+/g, '_').toLowerCase()}`}
                      className="btn-small-rounded">
                  <ArrowRight fontSizeAdjust={"text-xs md:text-lg"} strokeWidth={2.4}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="text-white text-center flex flex-col items-center justify-center bg-cover bg-no-repeat h-60 sm:h-72 md:h-80 lg:h-[332px] xl:h-[332px]"
        style={{
          backgroundImage: `url('/images/banner/life-here-banner-bg.png')`,
        }}
      >
        <div className="md:mt-4 px-4 w-full space-y-6">
          <div className="container ">
            <h2
              className="text-center text-[20px] sm:text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[26px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] xl:leading-[46px] font-bold">
              Recruitment Process
            </h2>
            <p className="text-center text-white font-normal description my-2 line-clamp-2 md:line-clamp-4">
              Apply to submit your CV and wait for a call from our Recruitment team.<br/>The application
              process
              at <strong className={"italic"}>Frontline</strong> is conducted in several stages. Lets explore.
            </p>
          </div>
          <CardsComponent data={cards} colNumber={3.5} imageWidth={48} imageHeight={48}
                          imageStyle={"rounded-full bg-white object-scale-down p-1"} titleStyle={"text-center"}/>
        </div>
      </div>
    </section>
  );
};

export default Career;