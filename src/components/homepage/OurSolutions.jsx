import {motion} from "framer-motion";
import {ArrowRight} from 'lucide-react';
import {getVariant} from "@/utils/utils";
import {Link} from "react-router-dom";
import React from "react";


const solutions = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Comprehensive software engineering services: web and mobile development, bespoke solutions, innovation, scalability.",
    icon: "service-1.png",
    slug: "software-design",
  },
  {
    id: 2,
    title: "Outdoor Branding",
    description: "We specialize in complex PCB design with comprehensive engineering services, FPGA expertise, and firmware development.",
    icon: "service-2.png",
    slug: "hardware-design",
  },
  {
    id: 3,
    title: "Media Buying",
    description: "Nexdecade leads OTT expansion in Bangladesh, integrating advanced platforms for enhanced content accessibility.",
    icon: "service-3.png",
    slug: "ott",
  },
  {
    id: 4,
    title: "Influencer Marketing",
    description: "Real-time monitoring, route optimization, fleet management and theft prevention with focus on accuracy and efficiency.",
    icon: "service-4.png",
    slug: "vehicle-tracking-system",
  }
];

const OurSolutions = () => {
  return (
    <section className="section solution pt-12 md:pt-24">
      <div className='relative'>
        <div className="container">
          <div className="row justify-between text-center lg:text-start">
            <div className="solution text-center mx-auto space-y-4 text-dark">
              <h2 className="heading1 text-left text-[48px] font-bold font-">Our Services</h2>
            </div>
          </div>
          <div className="key-feature-grid mt-10 grid grid-cols-1 gap-7 md:grid-cols-3 xl:grid-cols-4">
            {
              solutions?.map((solution, index) => (
                <motion.div
                  variants={getVariant('fadeUpVariant')}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.4,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="group relative w-full min-h-[455px] card-container"
                  key={solution?.id}
                >
                  {/* Card inner container for flipping effect */}
                  <div className="relative h-full w-full">
                    {/* Front Side */}
                    <div
                      className="absolute w-full h-full bg-white">
                      <div className="flex flex-col justify-around gap-4 h-full">
                        <img
                          width={317} height={419}
                          className="mx-auto border rounded-md shadow-lg hover:shadow-xl backface-hidden w-[317px] h-[360px]"
                          src={`/images/icons/${solution?.icon}`}
                          alt={`${solution?.title} icon`}
                        />
                        <div className="text-left">
                          <div className="text-[16px] lg:text-[18px] font-normal">{solution?.title}</div>
                          <Link to="/service-details"
                                className="inline-flex items-center justify-center h-[40px] btn bg-[#fff] font-normal text-[16px] lg:text-[18px] text-black border border-black rounded-full btn-sm mt-3">
                            View Details <span className='pl-[10px]'> <svg width="27" height="25" viewBox="0 0 27 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.1243 11.5L12.1789 6.13598L13.7461 4.72198L22.3672 12.5L13.7461 20.278L12.1789 18.864L18.1243 13.5H4.63293V11.5H18.1243Z"
                                fill="black"/>
                            </svg> </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;