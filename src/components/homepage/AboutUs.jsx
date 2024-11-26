import { motion } from "framer-motion";
import {getVariant} from "@/utils/utils.js";

const aboutlist = [
  {
    id: 1,
    title: "100+",
    description: "Media Partner",
    sub_description: "Explore Media",
  },
  {
    id: 2,
    title: "14.1K",
    description: "Weekly Impression",
    sub_description: "Find Your Audience",
  },
  {
    id: 3,
    title: "65+",
    description: "Creatives",
    sub_description: "Get Your Creative Work Done",
  },
];

const AboutUs = () => {
  return (
    <section className="relative py-10 md:py-20 my-10">
      <div className="about-us-right bg-[#F8F1FF] flex justify-end items-center py-8">
        <div className="about-us-right-content text-left w-full md:w-[60%]">
          <h2 className="font-bold text-5xl">About US</h2>
          <p className="text-2xl font-normal py-6">Frotline is an Indonesian ad-tech startup providing impactful and
            accessible advertising solutions. Its innovative platform helps brands effectively reach and engage
            audiences in their daily journeys, maximizing visibility and interaction.</p>
          <div className="md:flex justify-between items-center">
            {
              aboutlist?.map((aboutlist, index) => (
                  <motion.div
                      variants={getVariant('fadeUpVariant')}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        delay: index * 0.4,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="group relative w-full"
                      key={aboutlist?.id}
                  >
                    <h3 className="text-[#46266A] text-[40px] font-bold">
                      {aboutlist?.title}
                    </h3>
                    <span className="font-bold text-[18px]">
                       {aboutlist?.description}
                     </span>
                    <p className="text-[14px] font-normal">
                      {aboutlist?.sub_description}
                    </p>
                  </motion.div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="about-us-left hidden md:flex absolute inset-y-0 z-10">
        <img src="/images/about-us/aboutus.png" alt="logo"
             className="w-auto md:h-[500px] self-center"/>
      </div>
    </section>
  );
};

export default AboutUs;