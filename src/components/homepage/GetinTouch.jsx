import { motion } from "framer-motion";
import {getVariant} from "@/utils/utils.js";


const GetinTouch = () => {
  return (
    <section className="section partner relative py-12 md:py-24">
      <div className='relative'>
        <div className="container">
          <div className="partner text-center mx-auto space-y-4 text-dark md:flex justify-between bg-[#A68BFF] rounded-[45px] p-[40px]">
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
                  <h2 className="font-medium text-[28px] text-white">Get In Touch!</h2>
                  <p className="font-arial font-normal text-[22px] text-white py-6">
                    Let’s make your vision a reality. Contact us today and let’s discuss how we can help you innovate and grow.
                  </p>
                  <form className="md:w-[378px]">
                    <div className="flex items-center border-b border-white">
                      <input
                        className="bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Whats your name?*"
                        aria-label="Full name"
                      />
                    </div>
                    <div className="flex items-center border-b border-white pt-9">
                      <input
                        className="bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="phone"
                        placeholder="Whats your phone number?*"
                        aria-label="phone number"
                      />
                    </div>
                    <div className="flex items-center border-b border-white pt-9">
                      <input
                        className="bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="email"
                        placeholder="Whats your email?"
                        aria-label="email address"
                      />
                    </div>
                    <div className="flex items-center border-b border-white pt-9">
                      <input
                        className="bg-transparent border-none w-full text-white placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text-area"
                        placeholder="Describe your interest"
                        aria-label="interest"
                      />
                    </div>
                    <button type="btn" className="bg-[#1B1B1B] text-white font-normal text-[20px] font-arial w-full py-[15px] rounded-[18px] mt-9">
                      Submit
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
            <div className="addsection-right md:w-[40%]">
              <img src="/images/about-us/get-touch.png" height={483} width={483} alt="logo"
                   className="w-[483px] md:[483px]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;