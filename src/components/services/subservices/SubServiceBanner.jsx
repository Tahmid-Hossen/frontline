import React from 'react';
import AnimatedSection from "@/components/common/AnimatedSection.jsx";
import CardsComponent from "@/components/services/subservices/CardsComponent.jsx";


const SubServiceBanner = ({cards}) => {
    return (
        <AnimatedSection>
            <div
                className="text-white text-center flex flex-col items-center justify-center bg-cover bg-no-repeat bg-main py-12"
            >
                <div className="md:mt-4 px-4 w-full space-y-6">
                    <div className="container ">
                        <h2
                            className="text-center text-[20px] sm:text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[26px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] xl:leading-[46px] font-bold">
                            {cards?.title ?? ''} <p className={"text-gradiant"}>{cards?.sub_title ?? ''}</p>
                        </h2>
                    </div>
                    <div className="container">
                        <CardsComponent data={cards}  imageWidth={84} imageHeight={84}
                                        imageStyle={" bg-transparent object-fit"}
                                        titleStyle={"text-center"} descriptionStyle={"text-center text-base mt-6"}/>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default SubServiceBanner;