import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import servicesData from "@/data/serviceData.json"
import AnimatedSection from "@/components/common/AnimatedSection";
import {Link} from "react-router-dom";

const Services = () => {
  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'Services'},
  ];
  return (
    <section className="bg-white md:mb-20">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={"OUR SERVICES"}
        description="Prioritizing Innovation, Reliability, and Client Satisfaction: Let's Accelerate Towards Your Goals with Our Premier Software & IT Services Today."
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-4 lg:px-8 text-center">
        {servicesData.map((service, index) => (
          <AnimatedSection key={index} className={"first:md:mt-10 md:mt-20"}>
            <div className="space-y-5 md:space-y-10">
              {/* Title Section */}
              <h3 className="service-title">{service.title}</h3>
              {/* Image and Text Content */}
              <div
                className={`md:flex justify-between items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Image Section */}
                <div className="relative w-full h-full">
                  <img
                    className="!aspect-video w-full h-80 rounded-[10px] shadow-xl object-cover"
                    src={service.image ? `/images/services/${service.image}` : "/images/default/default-service.png"}
                    alt={service.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/default/default-service.png';
                    }}
                    width={500}
                    height={296}
                  />
                  {/* Subcomponents below the image */}
                  <div
                    className={`absolute  ${service.subComponents.length > 3 ? '-bottom-14' : '-bottom-9 '} left-0 right-0 text-black w-11/12 mx-auto hidden md:grid grid-cols-3 gap-6 items-center justify-center bg-white p-3 rounded-[5px] shadow-custom2`}>
                    {service.subComponents.map((sub, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center space-x-2 p-2 ${idx === service.subComponents.length - 1 ? 'border-r-0' : (idx === 2 ? 'border-r-0' : 'border-r border-r-black')}`}
                      >
                        <img
                          src={sub.icon ? `/images/services/subcomponents/${sub.icon}` : "/images/default/default-icon.svg"}
                          alt={`${sub.name} icon`}
                          className="w-5 h-5"
                          width={32}
                          height={32}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/default/default-icon.svg';
                          }}
                        />
                        <span className="portfolio-sub-description truncate">{sub.name}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`md:hidden mt-6 text-black w-full mx-auto grid grid-cols-1 items-center justify-center bg-white px-3 rounded-[5px] shadow-custom2 divide-y`}>
                    {service.subComponents.map((sub, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center space-x-2 p-2 py-8}`}
                      >
                        <img
                          src={sub.icon ? `/images/services/subcomponents/${sub.icon}` : "/images/default/default-icon.svg"}
                          alt={`${sub.name} icon`}
                          className="w-5 h-5"
                          width={32}
                          height={32}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/default/default-icon.svg';
                          }}
                        />
                        <span className="portfolio-sub-description truncate">{sub.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-6 text-justify order-1">
                  <p className="text-gray-600 mb-4 text-justify">
                    {service.description}
                  </p>
                  <Link to={`/services/${service.slug}`}
                        className="mt-4 md:py-2.5 btn-large-rounded"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Services;