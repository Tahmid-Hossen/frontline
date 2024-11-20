"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {getVariant} from "@/utils/utils";
// Animation settings
const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const AnimatedSection = ({ children,variant,index,className }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variant ? getVariant(variant,index) : animationVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;