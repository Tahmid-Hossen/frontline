import TestimonialSlider from "@/components/sliders/CommonSlider/TestimonialSlider.jsx";
import GridSliderPartnerShip from "@/components/sliders/GridSlider/GridSliderPartnerShip.jsx";


const TestimonialCard = ({data}) => {
    return (
        <div className="">
            <h1 className={"text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] text-center my-6"}>Successful Stories<span className={"text-gradiant"}></span>
            </h1>
            <TestimonialSlider data={data}/>
        </div>
)
    ;
};

export default TestimonialCard;