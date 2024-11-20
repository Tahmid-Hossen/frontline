"use client"
import { motion } from "framer-motion";
import {getVariant} from "@/utils/utils";
import Image from "next/image";


const partners = [
  {
    id: 1,
    title: "Healthcare",
    description: "",
    icon: "healthcare.svg",
    slug: "healthcare"
  },
  {
    id: 2,
    title: "Telecom",
    description: "",
    icon: "telecom.svg",
    slug: "telecom"
  },
  {
    id: 3,
    title: "Software",
    description: "",
    icon: "software.svg",
    slug: "software"
  },
  {
    id: 4,
    title: "Automotive",
    description: "",
    icon: "automotive.svg",
    slug: "automotive"
  },
  {
    id: 5,
    title: "Non-profit",
    description: "",
    icon: "non-profit.svg",
    slug: "non-profit"
  },
  {
    id: 6,
    title: "Hosted Platform",
    description: "",
    icon: "hosted-platform.svg",
    slug: "hosted-platform"
  },
  {
    id: 7,
    title: "Enterprise",
    description: "",
    icon: "enterprise.svg",
    slug: "enterprise"
  },
  {
    id: 8,
    title: "Logistics",
    description: "",
    icon: "logistics.svg",
    slug: "logistics"
  }
];


const PartneringAcrossIndustries = () => {
  return (
    <section className="section partner relative bg-[#EEF8FF] py-6 md:py-12">
      <div className="container">
        <div className="row justify-between text-center lg:text-start">
          <div className="partner text-center mx-auto space-y-4 text-dark">
            <div
              className="heading1 text-center">Partnering <span
              className="text-gradiant">Across Industries</span></div>
            <p className="text-center description">Bridging Your Business to the Virtual
              Sphere.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-4 justify-center items-center">
          {
            partners?.map((partner,index) => (
              <motion.div
                  key={index+1}
                  variants={getVariant('fadeUpVariant')}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.3,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className=" flex flex-col justify-between rounded-lg bg-white p-10 shadow-lg hover:shadow-xl hover:border-transparent text-black"
                  // className="group flex flex-col justify-between rounded-lg bg-white p-10 shadow-lg hover:bg-gradient-card hover:cursor-pointer hover:shadow-xl hover:border-transparent text-black"
              >
                <Image width={48} height={48}
                       className="mx-auto mb-3 group-hover:filter group-hover:grayscale group-hover:invert group-hover:brightness-0"
                       src={`/images/icons/${partner?.icon}`} alt={partner?.title}/>
                <div className="text-center">
                  <div className="text-base text-center group-hover:text-white">{partner?.title}</div>
                  <p className="text-[14px]  group-hover:text-white ">{partner?.description}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default PartneringAcrossIndustries;