import {motion} from "framer-motion";
import OurSolutions from "@/components/homepage/OurSolutions";
import OurAchievements from "@/components/homepage/OurAchievements";
import OurValuedClients from "@/components/homepage/OurValuedClients";
import Banner from "@/components/homepage/Banner";
import {useInView} from "@/hooks/useInView";

const fadeUpVariant = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

export default function Home() {
  const [solutionsRef, isSolutionsVisible] = useInView({threshold: 0.2});
  const [partneringRef, isPartneringVisible] = useInView({threshold: 0.2});
  const [achievementsRef, isAchievementsVisible] = useInView({threshold: 0.2});
  const [clientsRef, isClientsVisible] = useInView({threshold: 0.2});
  const [feedbackRef, isFeedbackVisible] = useInView({threshold: 0.2});

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

      {/*<motion.div
                ref={partneringRef}
                variants={fadeUpVariant}
                initial="hidden"
                animate={isPartneringVisible ? "visible" : "hidden"}
            >
                <PartneringAcrossIndustries />
            </motion.div>*/}

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
