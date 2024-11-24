import {motion} from "framer-motion";
import {ArrowRight} from 'lucide-react';
import {getVariant} from "@/utils/utils";
import {Link} from "react-router-dom";

const solutions = [
  {
    id: 1,
    title: "Software Design",
    description: "Comprehensive software engineering services: web and mobile development, bespoke solutions, innovation, scalability.",
    icon: "software-design.svg",
    slug: "software-design",
  },
  {
    id: 2,
    title: "Hardware Design",
    description: "We specialize in complex PCB design with comprehensive engineering services, FPGA expertise, and firmware development.",
    icon: "hardware-design.svg",
    slug: "hardware-design",
  },
  {
    id: 3,
    title: "Over The Top (OTT)",
    description: "Nexdecade leads OTT expansion in Bangladesh, integrating advanced platforms for enhanced content accessibility.",
    icon: "ott.svg",
    slug: "ott",
  },
  {
    id: 4,
    title: "Vehicle Tracking System",
    description: "Real-time monitoring, route optimization, fleet management and theft prevention with focus on accuracy and efficiency.",
    icon: "vehicle-tracking.svg",
    slug: "vehicle-tracking-system",
  },
  {
    id: 5,
    title: "Fleet Management System",
    description: "Fleet management software optimizes costs, enhances safety, and improves operational efficiency for organizations.",
    icon: "fleet-management.svg",
    slug: "fleet-management",
  },
  {
    id: 6,
    title: "GSM Attendance",
    description: "GSM-based digital solution for secure attendance and access control across diverse environments.",
    icon: "gsm-attendance.svg",
    slug: "gsm-attendance",
  },
  {
    id: 7,
    title: "Set Top Box",
    description: "Transformation of television broadcasting: digital shift, diverse content, STB market dominance.",
    icon: "set-top-box.svg",
    slug: "set-top-box",
  },
  {
    id: 8,
    title: "Internet Of Things (IOT)",
    description: "Nexdecade specializes in digital transformation and IoT services, focusing on quality, innovation, and client satisfaction.",
    icon: "iot.svg",
    slug: "iot",
  }
];

const OurSolutions = () => {
  return (
    <section className="section solution py-10 md:pt-[120px] md:pb-[50px]">
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
                  className="group relative w-full min-h-[214px] card-container"
                  key={solution?.id}
                >
                  {/* Card inner container for flipping effect */}
                  <div
                    className="relative h-full w-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                    {/* Front Side */}
                    <div
                      className="absolute w-full h-full bg-white p-5 shadow-lg hover:shadow-xl border rounded-md backface-hidden">
                      <div className="flex flex-col justify-around gap-4 h-full">
                        <img
                          width={68} height={68}
                          className="mx-auto"
                          src={`/images/icons/${solution?.icon}`}
                          alt={`${solution?.title} icon`}
                        />
                        <div className="text-center">
                          <div className="text-lg lg:text-lg font-semibold">{solution?.title}</div>
                        </div>
                      </div>
                    </div>
                    {/* Back Side (content shown on hover) */}
                    <div
                      className="absolute z-20 w-full h-full bg-gradient-card p-5 transform group-hover:rotate-y-180 backface-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-md">
                      <div className="text-center text-white">
                        <div className="text-lg lg:text-lg font-semibold">{solution?.title}</div>
                        <p className="text-[14px] mt-4 line-clamp-3">{solution?.description}</p>
                      </div>
                      <Link
                        to={`/services/${solution?.slug}`}
                        className="flex items-center justify-center gap-2 mt-4 text-white font-medium text-[18px] capitalize rounded-lg hover:drop-shadow w-40 px-2 py-0.5 mx-auto hover:bg-blue-200 hover:text-zinc-800"
                      >
                        Read More <ArrowRight size={20}/>
                      </Link>
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