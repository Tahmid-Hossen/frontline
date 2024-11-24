import {motion} from "framer-motion";
import OurSolutions from "@/components/homepage/OurSolutions";
import Banner from "@/components/homepage/Banner";
import {useInView} from "@/hooks/useInView";
import AboutUs from "@/components/homepage/AboutUs.jsx";
import ValuableClients from "@/components/homepage/ValuableClients.jsx";
import OurBlogs from "@/components/homepage/OurBlogs.jsx";
import AddSections from "@/components/homepage/AddSections.jsx";
import GetinTouch from "@/components/homepage/GetinTouch.jsx";

const fadeUpVariant = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

export default function Home() {
  const [solutionsRef, isSolutionsVisible] = useInView({threshold: 0.2});
  const [partneringRef, isPartneringVisible] = useInView({threshold: 0.2});
  const [achievementsRef, isAchievementsVisible] = useInView({threshold: 0.2});

  return (
    <>
      <Banner/>
      <motion.div
        ref={solutionsRef}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isSolutionsVisible ? "visible" : "hidden"}
      >
        <OurSolutions/>
      </motion.div>
      
      <motion.div
        ref={partneringRef}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isPartneringVisible ? "visible" : "hidden"}
      >
        <AboutUs/>
      </motion.div>
      
      <motion.div
        ref={achievementsRef}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isAchievementsVisible ? "visible" : "hidden"}
      >
        <ValuableClients/>
      </motion.div>
      
      <motion.div
        ref={solutionsRef}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isSolutionsVisible ? "visible" : "hidden"}
      >
        <AddSections/>
      </motion.div>
      
      <motion.div
        ref={solutionsRef}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isSolutionsVisible ? "visible" : "hidden"}
      >
        <OurBlogs/>
      </motion.div>
      
      <motion.div
        ref={solutionsRef}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isSolutionsVisible ? "visible" : "hidden"}
      >
        <GetinTouch/>
      </motion.div>
      
      {/*<motion.div*/}
      {/*  ref={achievementsRef}*/}
      {/*  variants={fadeUpVariant}*/}
      {/*  initial="hidden"*/}
      {/*  animate={isAchievementsVisible ? "visible" : "hidden"}*/}
      {/*>*/}
      {/*  <OurAchievements/>*/}
      {/*</motion.div>*/}
      
      
      {/*<motion.div*/}
      {/*  ref={clientsRef}*/}
      {/*  variants={fadeUpVariant}*/}
      {/*  initial="hidden"*/}
      {/*  animate={isClientsVisible ? "visible" : "hidden"}*/}
      {/*>*/}
      {/*  <OurValuedClients/>*/}
      {/*</motion.div>*/}
      
      {/*<motion.div
                ref={feedbackRef}
                variants={fadeUpVariant}
                initial="hidden"
                animate={isFeedbackVisible ? "visible" : "hidden"}
            >
                <OurCustomerFeedback />
            </motion.div>*/}
    </>
  );
}
