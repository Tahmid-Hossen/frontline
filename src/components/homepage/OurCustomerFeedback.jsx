import OurCustomerFeedbackSlider from "@/components/sliders/OurCustomerFeedback/OurCustomerFeedbackSlider";


const OurCustomerFeedback = () => {
  return (
    <section className="container relative">
      <div className="">
        <div className="grid grid-cols-1 justify-between text-center lg:text-start">
          <div className="partner text-center mx-auto space-y-4 text-dark">
            <div
              className="heading1 text-center">Our
              Customer <span className="text-gradiant">Feedback</span>
            </div>
            <p className="text-center description">We recognize that modern companies need to
              develop customized software products to stay ahead in the competitive market.</p>
          </div>
        </div>
      </div>
      <div className="" >
        <OurCustomerFeedbackSlider/>
      </div>
    </section>
  );
};

export default OurCustomerFeedback;