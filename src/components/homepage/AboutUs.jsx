import { motion } from "framer-motion";
import {getVariant} from "@/utils/utils.js";

const aboutlist = [
  {
    id: 1,
    title: "100+",
    description: "Media Partner",
    subdescription: "Explore Media",
  },
  {
    id: 2,
    title: "14.1K",
    description: "Weekly Impression",
    subdescription: "Find Your Audience",
  },
  {
    id: 3,
    title: "65+",
    description: "Creatives",
    subdescription: "Get Your Creative Work Done",
  },
];

const AboutUs = () => {
  return (
    <section className="section partner relative pt-12 md:pt-24">
      <div className="partner text-center mx-auto space-y-4 text-dark">
        <div className="about-us-right bg-red-500 flex justify-between items-center">
          <div className="w-[40%]">
          </div>
          <div className="about-us-right-content text-left w-[60%]">
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
                      {aboutlist?.subdescription}
                    </p>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="about-us-left">
          <img src="/images/about-us/aboutus.png" height={562} width={657} alt="logo"
               className="w-[745px] md:h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;