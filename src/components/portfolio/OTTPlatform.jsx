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
    description1: "An inventory platform is a crucial tool for businesses to efficiently manage and track their stock throughout the supply chain. It encompasses features such as real-time inventory tracking, order management, and warehouse optimization to streamline operations. Key components include robust reporting and analytics for informed decision-making, integration capabilities with other business systems, and the use of barcode or RFID technology for accurate inventory control. The platform supports forecasting and demand planning, ensuring optimal inventory levels, compliance with regulatory standards, and scalability to accommodate business growth. Overall, an inventory platform enhances efficiency, reduces costs, and improves customer satisfaction by optimizing inventory management processes.",
  }
];

const ottChallengesJson = [
  {
    name: "Platform Diversity",
    description: "Developing for multiple platforms such as Android, iOS, web browsers, and smart TVs requires knowledge of different programming languages, frameworks, and design principles. Ensuring a consistent user experience across these platforms while leveraging their unique capabilities can be challenging."
  },
  {
    name: "Scalability and Performance",
    description: "OTT platforms must handle large volumes of concurrent users, especially during peak times such as live events or popular content releases. Developers need to design scalable architectures, optimize content delivery networks (CDNs), and ensure smooth streaming performance across varying network conditions."
  },
  {
    name: "Content Security and DRM",
    description: "Protecting content from piracy and ensuring compliance with content rights agreements are critical. Developers must implement robust digital rights management (DRM) solutions, encryption techniques, and secure communication protocols to safeguard content and user data."
  },
  {
    name: "User Interface and Experience",
    description: "OTT applications must provide intuitive navigation, seamless playback transitions, and responsive design across devices. Balancing functionality with simplicity while meeting user expectations for customization and accessibility poses a continuous challenge."
  },
  {
    name: "Monetization Integration",
    description: "Implementing diverse monetization models (subscription, advertising, pay-per-view) requires integrating with payment gateways, ad networks, and analytics platforms. Developers must ensure secure transactions, optimize ad serving algorithms, and track user engagement effectively."
  },
  {
    name: "Regulatory Compliance",
    description: "OTT platforms often operate across multiple jurisdictions, each with its own regulations concerning data privacy, content censorship, and consumer rights. Developers need to stay updated on legal requirements and implement features to comply with these regulations."
  },
  {
    name: "Continuous Innovation",
    description: "To stay competitive, OTT developers must innovate continuously by adopting new technologies (like AI for content recommendations), enhancing user engagement features, and improving backend infrastructure efficiency."
  }
];

const contentPlatformChallengesJson = [
  {
    name: "Content Strategy",
    description: "Secure diverse, high-quality content and localize offerings to appeal to regional markets effectively."
  },
  {
    name: "Technical Infrastructure",
    description: "Implement scalable cloud-based solutions and optimize performance to ensure smooth streaming experiences."
  },
  {
    name: "User Acquisition and Retention",
    description: "Develop targeted marketing campaigns, personalized content strategies, and regular updates to engage and retain subscribers."
  },
  {
    name: "Monetization Strategies",
    description: "Advise on and implement effective monetization models and optimize ad placements for revenue generation."
  },
  {
    name: "Regulatory Compliance",
    description: "Provide guidance on legal requirements, data privacy laws, and content censorship to ensure compliance."
  },
  {
    name: "Quality Assurance and Support",
    description: "Offer robust customer support systems and proactive monitoring to maintain high-quality service delivery."
  },
  {
    name: "Innovation and Differentiation",
    description: "Integrate innovative technologies and foster strategic partnerships to enhance platform features and maintain a competitive edge."
  }
];

const ottProblemsJson = [
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

const ottUpdateJson = [
  {
    name: "Content Strategy",
    description: "Forge exclusive partnerships and expand global content licensing for a diverse and compelling content library."
  },
  {
    name: "Technical Infrastructure",
    description: "Integrate edge computing and AI-driven optimizations to enhance streaming performance and user experience."
  },
  {
    name: "User Acquisition and Retention",
    description: "Utilize advanced analytics and interactive content features to personalize user engagement and improve retention rates."
  },
  {
    name: "Monetization Strategies",
    description: "Offer bundled subscriptions and innovate with ad tech solutions to maximize revenue from diverse monetization models."
  },
  {
    name: "Regulatory Compliance",
    description: "Implement automated compliance tools to ensure ongoing adherence to global regulatory requirements."
  },
  {
    name: "Quality Assurance and Support",
    description: "Enhance 24/7 support accessibility and quality of experience monitoring to deliver superior customer service."
  },
  {
    name: "Innovation and Differentiation",
    description: "Explore immersive technologies like VR/AR and consider blockchain integration for content rights management and transparency."
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
    "description1": "The Nexdecade Vehicle Tracking Service (VTS) platform offers comprehensive features designed to enhance vehicle monitoring and management. It utilizes satellite GPS and GSM communication to provide real-time tracking, monitoring, and control of vehicles. Key features include:",
    "details": [
      "Real-time Tracking: Monitor vehicle position, speed, and engine status on a map via mobile app or website.",
      "Security Features: Remote services like engine shutdown in emergencies or theft situations.",
      "Customizable Settings: Set geo-fences, speed limits, and receive notifications for violations.",
      "Reports and Analytics: Detailed reports on trip counts, fuel consumption, driving behavior, and more.",
      "Integration and Support: API integration, 24/7 support, and dedicated technician services ensure reliable operation."
    ],
    "description2": "The platform is certified and approved, offering extensive coverage with over 2000,000 POIs, unlimited geo-fences, and various alert types. It aims to improve efficiency, reduce costs, enhance security, and promote environmental sustainability through its advanced tracking and management capabilities."
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
  }
]

const OttPlatform = ({portfolioId}) => {
  const breadcrumbs = [
    {label: 'Portfolio', href: '/portfolio'},
    {label: `${portfolioId}`},
  ];
  return (
    <>
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title="OTT Platform"
        backURL={"/portfolio"}
        backButton={true}
        description="Prioritizing Innovation, Reliability, and Client Satisfaction: Let's Accelerate Towards Your Goals with Our Premier Software & IT Services Today ."
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <PortfolioOverview title='Glee Glee'
                           description='The growth of OTT services was made possible through improvements in the broadband environment and distribution channel expansion strategies of contents providers, including Pay TV operators. Through such expansion strategies, OTT service platforms have reached out from the traditional TV to mobile devices (smart phones, tablets, and etc.), and Pay TV operators are rushing to expand OTT services to their subscribers in order to provide them with plenty of contents and to enrich their TV experiences with ease. In order to lead the market trends and meet the ever-changing demands of subscribers, we have secured the state of the art OTT platforms, especially in OTT with Android TV, which are extending VOD experiences to second devices along with the live TV.'
                           image={'/images/portfolio/overview/ott-overview.png'}/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Explore/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Summary summaryJson={summaryJson} image={'/images/portfolio/summary/ott-summary.png'}/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Challenges
          challengesJson={ottChallengesJson}
          image={'/images/portfolio/challenges/challenges-ott.png'}
          gridComponent={false}
          imageWidth={1052}
          imageHeight={364}
          order={''}
          isReverse={true}
        />
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Solutions
          solutionJson={contentPlatformChallengesJson}
          image={'/images/portfolio/solution/solution-ott.png'}
          description={"Here's the solutions to address challenges faced by developers in the vehicle tracking systems industry:"}
          gridComponent={false}
          imageWidth={1052}
          imageHeight={364}
          order={''}
          isReverse={true}
        />
      </div>

      <Problems problemsJson={ottProblemsJson}/>

      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <Updates
          updatesJson={ottUpdateJson}
          image={'/images/portfolio/updates/update-ott.png'}
          description={'The features that will be updated'}
          gridComponent={true}
          title={'OTT platform'}
        />
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Why image={'/images/portfolio/why/why-ott.png'} title={'NEX OTT Platform?'} whyJson={whyJson}/>
      </div>

      <Impact impactJson={impactJson}/>

      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <TechnologyStacks stacks={stacks}/>
      </div>

    </>
  );
};

export default OttPlatform;