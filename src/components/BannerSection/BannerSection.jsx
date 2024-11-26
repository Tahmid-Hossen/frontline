import React from 'react';
import AnimatedSection from "@/components/common/AnimatedSection.jsx";

const BannerSection = ({title, backgroundImage}) => {
    return (
        <div className="container relative mx-auto mt-4">
            <AnimatedSection className={"shadow-lg"}>
                <img className={"w-full mx-auto rounded-lg"} src={backgroundImage}
                     alt={title ?? '....'}/>
                <div
                    className="absolute -bottom-8 left-5 md:left-10 lg:left-16 py-3 px-4 sm:py-4 sm:px-6 min-w-[200px] max-w-[90%] sm:min-w-[250px] md:min-w-[300px] flex items-center justify-center font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-tight z-10 text-black bg-[#F8F1FF] rounded-md shadow-lg"
                >
                    {title ?? ''}
                </div>
            </AnimatedSection>
        </div>
    );
};

export default BannerSection;