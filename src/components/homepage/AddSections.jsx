import { motion } from "framer-motion";
import {getVariant} from "@/utils/utils.js";
import {Link} from "react-router-dom";

const AddSections = () => {
  return (
    <section className="section partner relative pt-12 md:pt-24">
      <div className='relative'>
        <div className="container">
          <div className="partner text-center mx-auto space-y-4 text-dark md:flex justify-between items-center">
            <div className="about-us-right md:w-[50%]">
              <div className="addsection-left-content text-left">
                  <motion.div
                    variants={getVariant('fadeUpVariant')}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="group relative w-full"
                  >
                    <h2 className="text-[64px] font-black font-arial leading-[64px]">
                      Discover The <br/> <span className="text-[#46266A]">Perfect <br/> Spots</span> <br/> For Your AD
                    </h2>
                    <p className="text-[14px] font-normal py-6">
                      Find the right out of home canvas in your desired city or community.Search for media by address or
                      unit number today.
                    </p>
                    <Link to="/contact-us"
                          className="inline-flex items-center justify-center h-[40px] btn bg-[#46266A] text-white border rounded-full btn-sm">
                      Hire US
                    </Link>
                  </motion.div>
              </div>
            </div>
            <div className="addsection-right md:w-[40%]">
              <img src="/images/about-us/addsection.png" height={641} width={577} alt="logo"
                   className="w-[577px] md:[641px]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
);
};

export default AddSections;