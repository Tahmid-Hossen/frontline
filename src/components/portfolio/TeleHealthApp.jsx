import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import PortfolioOverview from "@/components/portfolio/ui/PortfolioOverview.jsx";
import Explore from "@/components/portfolio/ui/Explore.jsx";
import Summary from "@/components/portfolio/ui/Summary.jsx";
import Challenges from "@/components/portfolio/ui/Challenges.jsx";
import Solutions from "@/components/portfolio/ui/Solutions.jsx";
import Problems from "@/components/portfolio/ui/Problems.jsx";
import Updates from "@/components/portfolio/ui/Updates.jsx";
import Why from "@/components/portfolio/ui/Why.jsx";
import Impact from "@/components/portfolio/ui/Impact.jsx";
import TechnologyStacks from "@/components/portfolio/ui/TechnologyStacks.jsx";


const summaryJson = [
  {
    description1: "The Nexdecade Vehicle Tracking Service (VTS) platform offers comprehensive features designed to enhance vehicle monitoring and management using satellite GPS and GSM communication for real-time tracking.",
    features: [
      "<li>1. Real-time Tracking: Monitor vehicle position, speed, and engine status on a map via mobile app or website.</li>",
      "<li>2. Security Features: Remote services like engine shutdown in emergencies or theft situations.</li>",
      "<li>3. Customizable Settings: Set geo-fences, speed limits, and receive notifications for violations.</li>",
      "<li>4. Reports and Analytics: Detailed reports on trip counts, fuel consumption, driving behavior, and more.</li>",
      "<li>5. Integration and Support: API integration, 24/7 support, and dedicated technician services ensure reliable operation.</li>"
    ],
    description2: "The platform is certified and approved, offering extensive coverage with over 200,000 POIs, unlimited geo-fences, and various alert types. It aims to improve efficiency, reduce costs, enhance security, and promote environmental sustainability through its advanced tracking and management capabilities."
  }
];

const challengesJson = [
  {
    name: "Integration Complexity of App",
    description: "Integrating with various vehicle types & models can be complex due to different hardware interfaces and protocols."
  },
  {
    name: "Data Security",
    description: "Ensuring the security of sensitive vehicle data (location, speed, etc.) against cyber threats and unauthorized access."
  },
  {
    name: "Accuracy & Reliability",
    description: "Maintaining accurate and reliable real-time tracking and data reporting despite varying network conditions and GPS signal strengths."
  },
  {
    name: "User Interface Design",
    description: "Designing intuitive and user-friendly interfaces for both mobile apps and web platforms that cater to diverse user needs and technical abilities."
  },
  {
    name: "Regulatory Compliance",
    description: "Adhering to local and international regulations regarding data privacy, vehicle tracking, and telecommunications."
  },
  {
    name: "Maintenance and Support",
    description: "Providing ongoing maintenance, updates, and 24/7 technical support to ensure system reliability and customer satisfaction."
  },
  {
    name: "Scalability",
    description: "Scaling the system to handle a growing number of vehicles and users without compromising performance or data integrity."
  },
  {
    name: "Cost Management",
    description: "Balancing development costs with affordability for customers while ensuring profitability for the service provider."
  }
];

const teleHealthSolutionsJson = [
  {
    name: "Integration Complexity",
    description: "Standardize protocols, provide APIs, and ensure compatibility with diverse vehicle types."
  },
  {
    name: "Data Security",
    description: "Implement strong encryption, access controls, and regular audits to protect sensitive information."
  },
  {
    name: "Accuracy and Reliability",
    description: "Use redundant systems, advanced GPS technology, and proactive monitoring to ensure continuous and accurate tracking."
  },
  {
    name: "User Interface Design",
    description: "Design intuitive interfaces, gather user feedback, and offer customization options for better user experience."
  },
  {
    name: "Regulatory Compliance",
    description: "Stay updated with regulations, conduct compliance audits, and adhere to data privacy and telecommunications laws."
  },
  {
    name: "Maintenance and Support",
    description: "Offer 24/7 support, proactive monitoring, and scalable cloud infrastructure for reliable system operation."
  },
  {
    name: "Scalability",
    description: "Utilize modular architecture, scalable cloud solutions, and agile development practices to accommodate growth efficiently."
  },
  {
    name: "Cost Management",
    description: "Optimize development processes, leverage economies of scale, and manage costs effectively while maintaining service quality."
  }
];

const teleHeathProblemsJson = [
  {
    name: "Complexity Of Installation",
    description: "Difficulty in installing and configuring tracking devices on vehicles, especially for large fleets."
  },
  {
    name: "User Interface Understanding",
    description: "Resistance or challenges in training staff to use the VTS platform effectively."
  },
  {
    name: "Adaptability",
    description: "Maintaining accurate and reliable real-time tracking and data reporting despite varying network conditions and GPS signal strengths."
  },
  {
    name: "User Interface Design",
    description: "Designing intuitive and user-friendly interfaces for both mobile apps and web platforms that cater to diverse user needs and technical abilities."
  },
  {
    name: "Cost Management",
    description: "Adhering to local and international regulations regarding data privacy, vehicle tracking, and telecommunications."
  },
  {
    name: "Maintenance and Support",
    description: "Providing ongoing maintenance, updates, and 24/7 technical support to ensure system reliability and customer satisfaction."
  },
  {
    name: "Data Privacy Concerns",
    description: "Worries about data security and privacy compliance, especially with sensitive location and vehicle usage data."
  },
  {
    name: "System Downtime",
    description: "Impact of system outages or downtime on fleet operations and productivity."
  }
];

const teleHealthUpdateJson = [
  {
    name: "Front-end Design & Visualization for User & Driver Panel",
    description: ""
  },
  {
    name: "Backend Data Visualization for Both Sides",
    description: ""
  },
  {
    name: "Back-end API for Student & Teacher Panel",
    description: ""
  },
  {
    name: "UI/UX Design",
    description: ""
  },
  {
    name: "Wireframing",
    description: ""
  }
];

const whyJson = [
  {
    description1: "The Nexdecade Vehicle Tracking Service (VTS) platform offers comprehensive features designed to enhance vehicle monitoring and management using satellite GPS and GSM communication for real-time tracking.",
    features: [
      "<li>1. Real-time Tracking: Monitor vehicle position, speed, and engine status on a map via mobile app or website.</li>",
      "<li>2. Security Features: Remote services like engine shutdown in emergencies or theft situations.</li>",
      "<li>3. Customizable Settings: Set geo-fences, speed limits, and receive notifications for violations.</li>",
      "<li>4. Reports and Analytics: Detailed reports on trip counts, fuel consumption, driving behavior, and more.</li>",
      "<li>5. Integration and Support: API integration, 24/7 support, and dedicated technician services ensure reliable operation.</li>"
    ],
    description2: "The platform is certified and approved, offering extensive coverage with over 200,000 POIs, unlimited geo-fences, and various alert types. It aims to improve efficiency, reduce costs, enhance security, and promote environmental sustainability through its advanced tracking and management capabilities."
  }
];

const impactJson = [
  {
    "description1": "Vehicle Tracking Systems (VTS) like Nexdecade offer substantial benefits to users across industries. These systems streamline fleet management by providing real-time tracking capabilities that optimize resource allocation and operational efficiency. By monitoring vehicle locations, speeds, and statuses.",
    "details": [
      "locations",
      "speeds",
      "statuses"
    ],
    "description2": "VTS helps reduce operational costs significantly, including fuel expenditures, maintenance expenses, and insurance premiums, through better control and management. Enhanced security features such as remote engine shutdown and geofencing contribute to preventing vehicle theft and unauthorized use, bolstering overall fleet security. Moreover, VTS promotes safer driving behaviors among drivers, ensuring compliance with regulatory standards and improving overall road safety. By delivering accurate ETAs and enabling responsive customer service, these systems enhance customer satisfaction and operational reliability. Data-driven insights derived from detailed analytics empower users to make informed decisions, further improving operational strategies and maintenance planning. Additionally, VTS supports environmental sustainability efforts by optimizing routes and reducing carbon emissions, making it a crucial tool for modern fleet management solutions."
  }
];

const stacks = [
  {
    "id": 1,
    "name": "Mobile",
    "image": "/images/portfolio/technology/react-native.png"
  },
  {
    "id": 2,
    "name": "Front-End",
    "image": "/images/portfolio/technology/c-node.png"
  },
  {
    "id": 3,
    "name": "Back-End",
    "image": "/images/portfolio/technology/objective-c.png"
  },
  {
    "id": 4,
    "name": "UI/UX",
    "image": "/images/portfolio/technology/azure.png"
  },
  {
    "id": 5,
    "name": "QA",
    "image": "/images/portfolio/technology/cplus.png"
  },
  {
    "id": 6,
    "name": "Database",
    "image": "/images/portfolio/technology/azure.png"
  },
]

// eslint-disable-next-line react/prop-types
const TeleHealthApp = ({portfolioId}) => {
  const breadcrumbs = [
    {label: 'Portfolio', href: '/portfolio'},
    {label: `${portfolioId}`},
  ];
  return (
    <>
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title="Tele-Health app"
        backURL={"/portfolio"}
        backButton={true}
        description="Prioritizing Innovation, Reliability, and Client Satisfaction: Let's Accelerate Towards Your Goals with Our Premier Software & IT Services Today ."
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <PortfolioOverview title='Nex - Health'
                           description='The growth of OTT services was made possible through improvements in the broadband environment and distribution channel expansion strategies of contents providers, including Pay TV operators. Through such expansion strategies, OTT service platforms have reached out from the traditional TV to mobile devices (smart phones, tablets, and etc.), and Pay TV operators are rushing to expand OTT services to their subscribers in order to provide them with plenty of contents and to enrich their TV experiences with ease. In order to lead the market trends and meet the ever-changing demands of subscribers, we have secured the state of the art OTT platforms, especially in OTT with Android TV, which are extending VOD experiences to second devices along with the live TV.'
                           image={'/images/portfolio/overview/tele-health-overview.png'}/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Explore/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Summary summaryJson={summaryJson} image={'/images/portfolio/summary/telehealth-summary.png'}/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Challenges challengesJson={challengesJson} image={'/images/portfolio/challenges/challenges-tele-health.png'}/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Solutions
          solutionJson={teleHealthSolutionsJson}
          image={'/images/portfolio/solution/solution-tele-health.png'}
          description={"Here's the solutions to address challenges faced by developers in the vehicle tracking systems industry:"}
          gridComponent={false}
        />
      </div>

      <Problems problemsJson={teleHeathProblemsJson}/>

      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <Updates
          updatesJson={teleHealthUpdateJson}
          image={'/images/portfolio/updates/update-telehealth.png'}
          description={'The features that will be updated'}
          gridComponent={true}
          title={'Tele-health App'}
        />
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Why image={'/images/portfolio/why/why-telehealth.png'} title={'this App?'} whyJson={whyJson}/>
      </div>

      <Impact impactJson={impactJson}/>

      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <TechnologyStacks stacks={stacks}/>
      </div>

    </>
  );
};

export default TeleHealthApp;