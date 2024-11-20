import { useEffect, useRef, useState } from "react";

export const useInView = (options = { threshold: 0.2 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null); // Use useRef for the DOM element reference

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target); // Unobserve once the section is visible
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]); // No need to include ref in dependencies

    return [ref, isVisible];
};
