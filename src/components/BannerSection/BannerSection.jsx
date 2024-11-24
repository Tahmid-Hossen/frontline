import React from 'react';
import AnimatedSection from "@/components/common/AnimatedSection.jsx";

const BannerSection = ({title, backgroundImage}) => {
    return (
        <div className="container relative mx-auto">
            <AnimatedSection className={"shadow-lg"}>
                <img className={"w-full mx-auto rounded-lg"} src={backgroundImage}
                     alt={title?? '....'}/>
                <div
                    className="absolute -bottom-8 left-5 py-5 px-6 min-w-52 flex items-center justify-center font-bold text-[20px] leading-[23px] z-10 text-black bg-[#F8F1FF] rounded-md shadow">
                    {title ?? ''}
                </div>
            </AnimatedSection>
        </div>
    );
};

export default BannerSection;