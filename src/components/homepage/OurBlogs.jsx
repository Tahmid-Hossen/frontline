import {motion} from "framer-motion";
import {ArrowRight} from 'lucide-react';
import {getVariant} from "@/utils/utils";
import {Link} from "react-router-dom";


const blogs = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Comprehensive software engineering services: web and mobile development, bespoke solutions, innovation, scalability.",
    icon: "1.png",
    slug: "software-design",
  },
  {
    id: 2,
    title: "Outdoor Branding",
    description: "We specialize in complex PCB design with comprehensive engineering services, FPGA expertise, and firmware development.",
    icon: "2.png",
    slug: "hardware-design",
  },
  {
    id: 3,
    title: "Media Buying",
    description: "Nexdecade leads OTT expansion in Bangladesh, integrating advanced platforms for enhanced content accessibility.",
    icon: "3.png",
    slug: "ott",
  },
  {
    id: 4,
    title: "Influencer Marketing",
    description: "Real-time monitoring, route optimization, fleet management and theft prevention with focus on accuracy and efficiency.",
    icon: "4.png",
    slug: "vehicle-tracking-system",
  }
];

const OurBlogs = () => {
  return (
    <section className="section solution pt-12 md:pt-24">
      <div className='relative'>
        <div className="container">
          <div className="row justify-between text-center lg:text-start">
            <div className="solution text-center mx-auto space-y-4 text-dark">
              <h2 className="text-center text-[48px] font-bold">Explore Trends and Insights in Advertising</h2>
            </div>
          </div>
          <div className="key-feature-grid mt-10 grid grid-cols-1 gap-7 md:grid-cols-3 xl:grid-cols-4">
            {
              blogs?.map((blog, index) => (
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
                  key={blog?.id}
                >
                      <div className="flex flex-col justify-around gap-4 h-full">
                        <img
                          width={285} height={177}
                          className="mx-auto border rounded-md shadow-lg hover:shadow-xl backface-hidden w-[285px] h-[177px]"
                          src={`/images/blogs/${blog?.icon}`}
                          alt={`${blog?.title} icon`}
                        />
                        <div className="text-left">
                          <h3 className="text-[20px] font-roboto font-bold py-3">A guide to voice Search Optimazation</h3>
                          <p className="text-[16px] font-roboto font-normal">Lorem ipsum dolor sit amet consectetur. Pharetra lobortis a condimentum facilisis. A eget adipiscing lorem in sed.
                            <Link to="/contact-us" className="text-[#46266A] underline  decoration-solid">Read More</Link>
                          </p>
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

export default OurBlogs;