import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import RenderBasedOnSubService from "@/components/services/RenderBasedOnSubService.jsx";

const data = {
  "title": "Electronics",
  "title_highlight": "System Design",
  "description": "As part of our total product design portfolio, Nexdecade provides professional baseband, embedded and user interface, electronics design, and testing services for companies that are designing products requiring excellent hardware performance. Nexdecade’s combination of baseband expertise and hardware laboratory facilities offers professional services for design and testing purposes.",
  "image": "",
  "cards_list": [
    {
      "id": 1,
      "title": "Hardware Conceptualization and Definition",
      "icon": ""
    },
    {
      "id": 2,
      "title": "Hardware User Interface Design",
      "icon": ""
    },
    {
      "id": 3,
      "title": "Embedded Electronics Design",
      "icon": ""
    },
    {
      "id": 4,
      "title": "Hardware performance testing and verification",
      "icon": ""
    }
  ]
}
const development_services = {
  "title": "Hardware",
  "title_highlight": "Development Services",
  "sub_title": "We Ensure",
  "description": "Hiring a software development firm provides businesses of all sizes with cost-effective and high-quality services, crucial for achieving customer satisfaction in a competitive market. Partnering with such firms offers various additional benefits, ensuring business sustainability. Therefore, engaging a custom software development company with the necessary skills and expertise is essential.",
  "image": "/images/services/sub-services/development_services.png",
  "services": [
    {
      "id": 1,
      "title": "Board design from specifications, prototype development, board bring up and integration in products."
    },
    {
      "id": 2,
      "title": "FPGA Board Designs for performance evaluation."
    },
    {
      "id": 3,
      "title": "Board Redesigns/Respins to replace obsolete components, value engineering for cost."
    },
    {
      "id": 4,
      "title": "Reduction or performance improvements."
    },
    {
      "id": 5,
      "title": "Firmware development including Post/Diagnostics, Boot Code, Board Support Packages (BSPs)."
    },
    {
      "id": 6,
      "title": "Device drivers for a wide variety of on-board and external interfaces."
    }
  ]
}
const previous_projects = {
  "title": "The Solution We've Engineered:",
  "title_highlight": "Tailored for Success",
  "description": "",
  "image": "",
  "projects": [
    {
      "title": "Grameenphone Vehicle Tracking Software Platform (GP VTS)",
      "image": "gp_vts_portfolio.png",
      "category": ["vts"],
      "description": "Our advanced GP Vehicle Tracking Software provides precise real-time tracking and monitoring capabilities for vehicles and assets.",
      "href": "/portfolio/gp-vts"
    },
    {
      "title": "Nexdecade Vehicle Tracking Software Platform",
      "image": "nexdecade_vts_portfolio.png",
      "category": ["vts"],
      "description": "Nexdecade's tracking platform offers efficient vehicle tracking with customizable alerts and detailed analytics.",
      "href": "/portfolio/nexdecade-vts"
    },
    {
      "title": "Vehicle Management System Software",
      "image": "vehicle_management_portfolio.png",
      "category": ["vms"],
      "description": "A robust system to manage and track vehicles efficiently, ensuring optimal fleet performance.",
      "href": "/portfolio/vehicle-management"
    },
    {
      "title": "Banglalink Entertainment Platform (Toffee)",
      "image": "toffee_portfolio.png",
      "category": ["ott"],
      "description": "Banglalink's OTT platform, Toffee, provides a diverse range of entertainment options with seamless streaming and user-friendly features.",
      "href": "/portfolio/toffee"
    },
    {
      "title": "Billing Management Software",
      "image": "billing_management_portfolio.png",
      "category": ["billing"],
      "description": "This software ensures smooth and efficient billing operations with integrated features for invoice management and payment tracking.",
      "href": "/portfolio/billing-management"
    },
    {
      "title": "Customer Management Software",
      "image": "customer_management_portfolio.png",
      "category": ["customer-management"],
      "description": "Manage customer interactions and data effectively with a centralized platform that offers detailed insights and analytics.",
      "href": "/portfolio/customer-management"
    },
    {
      "title": "Ticketing Software",
      "image": "ticketing_software_portfolio.png",
      "category": ["ticketing"],
      "description": "An intuitive ticketing system that streamlines the process of selling, managing, and distributing tickets for events and services.",
      "href": "/portfolio/ticketing"
    }
  ]
}


// eslint-disable-next-line react/prop-types
const SubService = ({category, service, subService}) => {
  function capitalizedPath(category) {
    return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
  }
  const capitalizedCategoryName = capitalizedPath(category);
  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'Services', href: '/services'},
    {label: capitalizedCategoryName},
  ];

  return (
    <section className="bg-white">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={subService?.title || "No Title Found"}
        button={"Ask For Demo"}
        backButton={true}
        description=""
        breadcrumbs={breadcrumbs}
      />
      <RenderBasedOnSubService data={data} subService={subService} service={service}/>
    </section>
  );
};

export default SubService;