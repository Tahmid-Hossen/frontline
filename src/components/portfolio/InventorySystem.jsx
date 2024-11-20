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

const inventoryChallengesJson = [
  {
    name: "Integration Complexity",
    description: "Integrating with existing ERP systems, CRM systems, and other third-party applications can be complex due to varying data formats and protocols."
  },
  {
    name: "Scalability",
    description: "Designing the platform to handle large volumes of inventory data and transactions while maintaining performance and responsiveness."
  },
  {
    name: "Real-Time Data Processing",
    description: "Ensuring real-time updates and accurate synchronization of inventory data across multiple locations and systems."
  },
  {
    name: "User Interface Design",
    description: "Creating intuitive and user-friendly interfaces that cater to different user roles and requirements, including warehouse staff, managers, and administrators."
  },
  {
    name: "Customization",
    description: "Meeting diverse customer needs and industry-specific requirements through customizable features and configurations."
  },
  {
    name: "Data Accuracy",
    description: "Maintaining high data accuracy and integrity, especially in environments with frequent inventory movements and updates."
  },
  {
    name: "Mobile Compatibility",
    description: "Developing mobile applications that provide seamless access to inventory data and management functionalities on various devices and platforms."
  },
  {
    name: "Regulatory Compliance",
    description: "Ensuring compliance with industry regulations and standards related to inventory management, data privacy, and security."
  }
];

const inventorySolutionJson = [
  {
    name: "Integration Framework",
    description: ""
  },
  {
    name: "Scalable Architecture",
    description: ""
  },
  {
    name: "Real-Time Data Processing",
    description: ""
  },
  {
    name: "User-Centered Design",
    description: ""
  },
  {
    name: "Security Measures",
    description: ""
  },
  {
    name: "Customization Options",
    description: ""
  },
  {
    name: "Data Accuracy and Validation",
    description: ""
  },
  {
    name: "Mobile-Friendly Applications",
    description: ""
  },
  {
    name: "Compliance Assurance",
    description: ""
  },
  {
    name: "Training and Support",
    description: ""
  }
];

const inventoryProblemsJson = [
  {
    name: "Multi-Location Coordination",
    description: "Managing inventory across multiple corporate offices or branches, each with its own inventory needs and challenges."
  },
  {
    name: "Centralized Control",
    description: "Ensuring centralized control and visibility of inventory data while allowing for decentralized operations and decision-making."
  },
  {
    name: "Integration with ERP Systems",
    description: "Seamless integration with Enterprise Resource Planning (ERP) systems used at the corporate level for finance, procurement, and sales to synchronize data and streamline operations."
  },
  {
    name: "Security and Access Control",
    description: "Implementing robust security measures to protect sensitive inventory data and ensuring role-based access control (RBAC) to manage permissions effectively across different corporate offices."
  },
  {
    name: "Standardization of Processes",
    description: "Establishing standardized inventory management processes and workflows across all corporate offices to ensure consistency and efficiency."
  },
  {
    name: "Real-Time Reporting and Analytics",
    description: "Providing real-time reporting and analytics capabilities to corporate managers for better decision-making and strategic planning."
  },
  {
    name: "Compliance and Audit",
    description: "Ensuring compliance with corporate policies, industry regulations, and audit requirements related to inventory management practices."
  }
];

const inventoryUpdateJson = [
  {
    name: "Feature Enhancements .",
    description: ""
  },
  {
    name: "Performance Optimization.",
    description: ""
  },
  {
    name: "User Interface (UI/UX) Improvements .",
    description: ""
  },
  {
    name: "Integration Updates .",
    description: ""
  },
  {
    name: "Compliance Updates .",
    description: ""
  },
  {
    name: "Mobile Compatibility",
    description: ""
  },
  {
    name: "Training and Documentation",
    description: ""
  }
];

const whyJson = [
  {
    description1: "The Nexdecade Vehicle Tracking Service (VTS) platform offers comprehensive features designed to enhance vehicle monitoring and management using satellite GPS and GSM communication for real-time tracking.",
    features: [
      "<li>1. Customization and Flexibility: Offering highly customizable features and configurations that cater to specific industry needs and business processes, allowing for tailored solutions.</li>",
      "<li>2. Integration Capabilities: Seamless integration with a wide range of ERP systems, CRM platforms, and other third-party applications, facilitating comprehensive data synchronization and workflow optimization.</li>",
      "<li>3. Advanced Reporting and Analytics: Providing powerful reporting tools and advanced analytics capabilities that offer deep insights into inventory trends, forecasting accuracy, and operational efficiencies.</li>",
      "<li>4. Real-Time Visibility: Ensuring real-time tracking and visibility of inventory across multiple locations and systems, enhancing decision-making and responsiveness to market demands.</li>",
      "<li>5. User Experience: Intuitive user interface design with user-friendly navigation, responsive design for mobile access, and personalized dashboards that enhance user productivity and satisfaction.</li>",
      "<li>6. Security and Compliance: Robust security measures, including encryption, role-based access control, and compliance with industry standards and regulations, ensuring data protection and regulatory adherence.</li>"
    ]
  }
];

const impactJson = [
  {
    "description1": "The Nexdecade inventory management system is designed to streamline operations and empower users with advanced capabilities. ",
    "details": [
      "Real-time visibility into inventory levels ensures optimal stock management and minimizes stockouts.",
      "The system promotes cost savings through improved procurement practices and reduced carrying costs.",
      "Enhanced customer service is achieved with faster order processing and accurate information.",
      "Robust analytics support strategic decision-making, while stringent security measures ensure compliance and data protection.",
      "Scalability accommodates business growth seamlessly."
    ],
    "description2": " Overall, Nexdecade's system boosts operational efficiency, cost-effectiveness, and strategic agility, driving substantial benefits for businesses."
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
  {
    "id": 7,
    "name": "Cloud",
    "image": "/images/portfolio/technology/gcp.png"
  }
]

// eslint-disable-next-line react/prop-types
const InventorySystem = ({portfolioId}) => {
  const breadcrumbs = [
    {label: 'Portfolio', href: '/portfolio'},
    {label: `${portfolioId}`},
  ];
  return (
    <>
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title="Inventory System"
        backURL={"/portfolio"}
        backButton={true}
        description="Prioritizing Innovation, Reliability, and Client Satisfaction: Let's Accelerate Towards Your Goals with Our Premier Software & IT Services Today ."
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <PortfolioOverview title='Nex Inventory'
                           description='A vehicle tracking system design involves developing a robust infrastructure to monitor and manage the movement of vehicles in real-time. It includes components like GPS receivers, communication interfaces, databases for storing location data, and user interfaces for visualization and control. The design aims to ensure accuracy, reliability, and efficiency in tracking vehicle locations, enabling functionalities such as route optimization, fleet management, and theft prevention.'
                           image={'/images/portfolio/overview/inventory-overview.png'}/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Explore/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Summary summaryJson={summaryJson} image={'/images/portfolio/summary/inventory-summary.png'}/>
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Challenges
          challengesJson={inventoryChallengesJson}
          image={'/images/portfolio/challenges/challenges-inventory.png'}

        />
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Solutions
          solutionJson={inventorySolutionJson}
          image={'/images/portfolio/solution/solution-inventory.png'}
          description={"Here's the solutions to address challenges faced by developers in the vehicle tracking systems industry:"}
          gridComponent={true}
          imageWidth={504}
          imageHeight={364}
          order={'order-2'}
        />
      </div>

      <Problems client={'VTS'} problemsJson={inventoryProblemsJson}/>

      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <Updates
          updatesJson={inventoryUpdateJson}
          image={'/images/portfolio/updates/update-inventory.png'}
          description={'The features that will be updated'}
          gridComponent={true}
          title={'Inventory System'}
        />
      </div>

      <div className="container mx-auto px-4 pb-[90px] space-y-[90px]">
        <Why image={'/images/portfolio/why/why-nex.png'} title={'Inventory System?'} whyJson={whyJson}/>
      </div>

      <Impact impactJson={impactJson}/>

      <div className="container mx-auto px-4 py-[90px] space-y-[90px]">
        <TechnologyStacks stacks={stacks}/>
      </div>

    </>
  );
};

export default InventorySystem;