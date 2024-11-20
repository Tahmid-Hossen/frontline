import {Suspense, useEffect, useRef} from 'react';
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import ContactUsForm from "@/components/contactus/ContactUsForm";
import GoogleMap from "@/components/common/GoogleMap";
import AnimatedSpinner from "@/components/common/AnimatedSpinner";
import AnimatedSection from "@/components/common/AnimatedSection";
import {Mail, Phone} from "lucide-react";
import {Link, useLocation} from "react-router-dom";

const contactOptions = [
  {
    title: "Looking for job?",
    linkText: "Openings",
    link: "/life-at-a-glance/career",
    icon: "search_icon.svg",
  },
  {
    title: "Business Alliance",
    linkText: "info@nexdecade.com",
    link: "mailto:info@nexdecade.com",
    icon: "business-partner.svg",
  },
  {
    title: "Have Queries?",
    linkText: "FAQ",
    link: "#",
    icon: "queries.svg",
  },
  {
    title: "Everything Else",
    linkText: "info@nexdecade.com",
    link: "mailto:info@nexdecade.com",
    icon: "everything_else.svg",
  },
];

const ContactUsContent = () => {
  const location = useLocation();
  const contactUsFormRef = useRef(null);

  // Helper function to parse query parameters
  const getQueryParams = (queryString) => {
    const params = new URLSearchParams(queryString);
    return Object.fromEntries(params.entries());
  };

  // Scroll to the Contact Us section if the query param is present
  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    if (queryParams.scrollTo === 'contactUsForm' && contactUsFormRef.current) {
      const element = contactUsFormRef.current;
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({top: topOffset, behavior: 'smooth'});
    }
  }, [location.search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className={`heading1 `}>
            Who <span className="text-gradiant">Are You Looking for?</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactOptions.map((option, index) => (
              <AnimatedSection key={index} index={index} variant={"fadeUpVariant"}
                               className={"min-w-[300px] md:min-w-[330px]"}>
                <Link
                  to={option.link}
                  className="flex items-center justify-center gap-6 border border-gray-300 bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all"
                >
                  <img
                    className="w-6 md:w-8 h-6 md:h-8 object-cover"
                    src={option.icon ? `/images/contact-us/${option.icon}` : '/images/contact-us/queries.svg'}
                    alt={'About Nexdecade'}
                    width={48}
                    height={48}
                  />
                  <div>
                    <h2 className="font-semibold text-base md:text-lg truncate">{option.title}</h2>
                    <p className="text-blue-500">{option.linkText}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col items-center justify-center gap-8 my-5">
          <h1 className={`heading1`}>
            Our <span className="text-gradiant">Location</span>
          </h1>
          <div className="grid grid-cols-1">
            <GoogleMap width={''} height={''}
                       style={"md:w-[768px] md:h-[400px] lg:w-[1024px] lg:h-[450px] xl:w-[1170px] xl:h-[500px] rounded-lg"}/>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div ref={contactUsFormRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8">
          <div className="">
            <h1 className={`text-center md:text-start font-medium heading1 `}>
              Contact Us
            </h1>
            <div
              className="text-base sm:text-lg flex flex-col items-center text-center md:text-left md:items-start justify-center gap-6">
              <p className={"mt-4"}>We would love to hear from you! <br/> For any inquiries, feedback, or
                support, please reach out to us: </p>
              <p className={"flex items-center gap-2"}><Mail size={16}/> Email: <Link to={"mailto:info@nexdecade.com"}
                                                                                      className={"text-primary font-medium hover:underline"}>info@nexdecade.com</Link>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16}/> Call For Support : <Link to="tel:+8801713189710"
                                                            className="text-primary font-medium hover:underline">+8801713189710</Link>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16}/> Call For Sales : <Link to="tel:+8801711204695"
                                                          className="text-primary font-medium hover:underline">+8801711204695</Link>
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>We'll get back to you as soon as possible!</p>
            </div>
          </div>
          <ContactUsForm/>
        </div>
      </AnimatedSection>
    </div>
  );
};

const ContactUs = () => {
  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'Contact Us'},
  ];

  return (
    <section className="bg-white">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={"Contact Our team"}
        description="Nexdecade leads the way in next-generation IT services, technological solutions, and digital transformations. Our mission is to empower businesses to thrive in tomorrow's marketplace. We are dedicated to fostering innovation by delivering cutting-edge technology solutions worldwide. Join us in spearheading your digital transformation journey with Nexdecade, on a global scale."
        breadcrumbs={breadcrumbs}
      />
      <Suspense fallback={<AnimatedSpinner/>}>
        <ContactUsContent/>
      </Suspense>
    </section>
  );
};

export default ContactUs;
