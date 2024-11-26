import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Overview from "@/components/services/subservices/Overview";
import ApprovedBy from "@/components/services/subservices/ApprovedBy";
import CardsComponent from "@/components/services/subservices/CardsComponent";
import DevelopmentServices from "@/components/services/subservices/DevelopmentServices";
import SliderCardsComponent from "@/components/services/subservices/SliderCardsComponent";
import TeamOverview from "@/components/services/subservices/TeamOverview";
import Features from "@/components/services/subservices/Features";
import NotFound from "@/components/NotFound.jsx";
import OurWorkOverView from "@/components/portfolio/ui/OurWorkOverView.jsx";
import {Suspense, useState} from "react";
import Spinner from "@/components/ui/Spinner.jsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import Projects from "@/components/services/subservices/Projects.jsx";
import OurWorksData from "@/data/OurWorksData.json"
import SubServiceBanner from "@/components/services/subservices/SubServiceBanner.jsx";
import NumberTicker from "@/components/magicui/number-ticker.jsx";
import SubscribeSection from "@/components/SubscribeSection/SubscribeSection.jsx";
import Partnership from "@/components/services/subservices/Partnership.jsx";
import {Link} from "react-router-dom";
import TestimonialSlider from "@/components/sliders/CommonSlider/TestimonialSlider.jsx";
import TestimonialCard from "@/components/services/subservices/TestimonialCard.jsx";

const cards = {
  "title_header": "How To Advertise With",
  "sub_title": "FRONTLINE",
  "cards_list": [
    {
      "id": 1,
      "title": "",
      "description": "Tell us about your idea and the campaign you want to start",
      "icon": "/images/services/sub-services/sub-service-banner/campaign.png"
    },
    {
      "id": 2,
      "title": "",
      "description": "We will analyze and get back to you as soon  as possible",
      "icon": "/images/services/sub-services/sub-service-banner/analyze.png"
    },
    {
      "id": 3,
      "title": "",
      "description": "We’ll handle all printing, production and activation of the campaign",
      "icon": "/images/services/sub-services/sub-service-banner/productivity.png"
    },
    {
      "id": 4,
      "title": "",
      "description": "Monitor your campaign activity with Frontline help",
      "icon": "/images/services/sub-services/sub-service-banner/monitoring.png"
    },

  ]
}
const cards2 = {
  "title_header": "How To Marketing With",
  "sub_title": "FRONTLINE",
  "cards_list": [
    {
      "id": 1,
      "title": "",
      "description": "Brief & Goals",
      "icon": "/images/services/sub-services/sub-service-banner/goals.png"
    },
    {
      "id": 2,
      "title": "",
      "description": "Influencer Matching",
      "icon": "/images/services/sub-services/sub-service-banner/influencer.png"
    },
    {
      "id": 3,
      "title": "",
      "description": "Campaign Strategy",
      "icon": "/images/services/sub-services/sub-service-banner/strategy.png"
    },
    {
      "id": 4,
      "title": "",
      "description": "Execution & Collaboration",
      "icon": "/images/services/sub-services/sub-service-banner/execution.png"
    },

  ]
}
const testimonials = [
  {
    name: "Shagufta Begum",
    role: "Customer",
    testimonial: "The team at Frontline understood our vision and connected us with influencers who truly resonated with our brand.",
    rating: 5,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Topu Biswas",
    role: "Customer",
    testimonial: "As a satisfied customer of Frontline, I want to share my positive experience with others. They helped us expand our reach beyond our target audience and increased engagement by 40%.",
    rating: 5,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Torikul Islam",
    role: "Customer",
    testimonial: "The team at Frontline understood our vision and connected us with influencers who truly resonated with our brand.",
    rating: 5,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Shagufta Begum",
    role: "Customer",
    testimonial: "The team at Frontline understood our vision and connected us with influencers who truly resonated with our brand.",
    rating: 5,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Topu Biswas",
    role: "Customer",
    testimonial: "As a satisfied customer of Frontline, I want to share my positive experience with others. They helped us expand our reach beyond our target audience and increased engagement by 40%.",
    rating: 5,
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Torikul Islam",
    role: "Customer",
    testimonial: "The team at Frontline understood our vision and connected us with influencers who truly resonated with our brand.",
    rating: 5,
    image: "https://via.placeholder.com/150"
  },
];

// Animation settings
const animationVariants = {
  hidden: {opacity: 0, y: 50},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}},
};

// eslint-disable-next-line react/prop-types
const AnimatedSection = ({children}) => {
  const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};
// eslint-disable-next-line react/prop-types
const RenderBasedOnSubService = ({subService, data}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", ...new Set(OurWorksData?.cards?.flatMap(card => card.category))];

  // Filter cards based on selected category
  const filteredCards = selectedCategory === "all"
      ? OurWorksData.cards
      : OurWorksData.cards.filter(card => card.category.includes(selectedCategory));

  return (
    <>
      {!!subService && (
        <>
          {(() => {
            switch (subService?.slug) {
              case 'digital-marketing':
                return (
                    <>
                      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                        <AnimatedSection>{!!subService?.overview &&
                            <OurWorkOverView isButton={true} isImage={true}
                                             overview={subService?.overview}/>}</AnimatedSection>
                        <AnimatedSection>
                          <div className="">
                            <h1 className="text-[18px] leading-[22px] md:text-[24px] md:leading-[28px] text-center my-6"> Our Latest Works </h1>
                            <h1 className={"text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] text-center my-6"}>Your Social Media Potentials
                              with Our Proven Serives</h1>
                            <Tabs defaultValue="all" className="">
                              <TabsList
                                  className={"w-full text-black bg-transparent gap-2.5 justify-center md:justify-center items-center"}>
                                <div
                                    className="flex items-center self-center justify-self-center gap-2.5 py-2 px-4 rounded-md border border-[#46266A]">
                                  {categories.map((category, index) => {
                                    // Count the number of cards in the selected category
                                    const count = category === "all"
                                        ? OurWorksData?.cards?.length // Count all cards when "all" is selected
                                        : OurWorksData?.cards?.filter(card => card?.category?.includes(category))?.length;

                                    return (
                                        <TabsTrigger
                                            key={index}
                                            className={"btn-tab Capitalize font-medium"}
                                            value={category}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                          {/*{category.charAt(0).toUpperCase() + category.slice(1)} <span className={"tab-count"}>&nbsp;({count})</span>*/}
                                          {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </TabsTrigger>
                                    );
                                  })}
                                </div>
                              </TabsList>

                              {/* Use Suspense to show spinner while loading */}
                              <Suspense fallback={<Spinner/>}>
                                <TabsContent className={"mt-0"} value={selectedCategory}>
                                  <Suspense fallback={<Spinner/>}>
                                    <Projects Cards={filteredCards}/>
                                  </Suspense>
                                </TabsContent>
                              </Suspense>
                            </Tabs>
                          </div>
                        </AnimatedSection>
                      </div>
                      <SubServiceBanner cards={cards}/>
                      <AnimatedSection>
                        <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Card 1 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={56} extra="%"/>
                              <div>
                                <p className="font-semibold">People Reached</p>
                                <p className="text-sm">Increased ROAS</p>
                              </div>
                            </div>
                            {/* Card 2 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={65} extra="%"/>
                              <div>
                                <p className="font-semibold">People Engaged</p>
                                <p className="text-sm">More likely to engage</p>
                              </div>
                            </div>
                            {/* Card 3 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={58} extra="%"/>
                              <div>
                                <p className="font-semibold">Most Trusted</p>
                                <p className="text-sm">A high rate of market penetration</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                      <SubscribeSection title={'Get in Touch to Transform Your Campaigns'} item1={'Industry Leading Technology'} item2={'99% of Billboard Ads'} item3={'White Glove Service'}/>
                    </>
                );
              case 'outdoor-branding':
                return (
                    <>
                      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                        <AnimatedSection>{!!subService?.overview &&
                            <OurWorkOverView isButton={true} isImage={true}
                                             overview={subService?.overview}/>}</AnimatedSection>
                        <AnimatedSection>
                          <div className="">
                            <h1 className="text-[18px] leading-[22px] md:text-[24px] md:leading-[28px] text-center my-6"> Our Latest Works </h1>
                            <h1 className={"text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] text-center my-6"}>Your Social Media Potentials
                              with Our Proven Serives</h1>
                            <Tabs defaultValue="all" className="">
                              <TabsList
                                  className={"w-full text-black bg-transparent gap-2.5 justify-center md:justify-center items-center"}>
                                <div
                                    className="flex items-center self-center justify-self-center gap-2.5 py-2 px-4 rounded-md border border-[#46266A]">
                                  {categories.map((category, index) => {
                                    // Count the number of cards in the selected category
                                    const count = category === "all"
                                        ? OurWorksData?.cards?.length // Count all cards when "all" is selected
                                        : OurWorksData?.cards?.filter(card => card?.category?.includes(category))?.length;

                                    return (
                                        <TabsTrigger
                                            key={index}
                                            className={"btn-tab Capitalize font-medium"}
                                            value={category}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                          {/*{category.charAt(0).toUpperCase() + category.slice(1)} <span className={"tab-count"}>&nbsp;({count})</span>*/}
                                          {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </TabsTrigger>
                                    );
                                  })}
                                </div>
                              </TabsList>

                              {/* Use Suspense to show spinner while loading */}
                              <Suspense fallback={<Spinner/>}>
                                <TabsContent className={"mt-0"} value={selectedCategory}>
                                  <Suspense fallback={<Spinner/>}>
                                    <Projects Cards={filteredCards}/>
                                  </Suspense>
                                </TabsContent>
                              </Suspense>
                            </Tabs>
                          </div>
                        </AnimatedSection>
                      </div>
                      <SubServiceBanner cards={cards}/>
                      <AnimatedSection>
                        <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Card 1 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={56} extra="%"/>
                              <div>
                                <p className="font-semibold">People Reached</p>
                                <p className="text-sm">Increased ROAS</p>
                              </div>
                            </div>
                            {/* Card 2 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={65} extra="%"/>
                              <div>
                                <p className="font-semibold">People Engaged</p>
                                <p className="text-sm">More likely to engage</p>
                              </div>
                            </div>
                            {/* Card 3 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={58} extra="%"/>
                              <div>
                                <p className="font-semibold">Most Trusted</p>
                                <p className="text-sm">A high rate of market penetration</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                      <SubscribeSection title={'Get in Touch to Transform Your Campaigns'} item1={'Industry Leading Technology'} item2={'99% of Billboard Ads'} item3={'White Glove Service'}/>
                    </>
                );
              case 'media-buying':
                return (
                    <>
                      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                        <AnimatedSection>{!!subService?.overview &&
                            <OurWorkOverView isButton={true} isImage={true}
                                             overview={subService?.overview}/>}</AnimatedSection>
                        <AnimatedSection>
                          <div className="">
                            <h1 className="text-[18px] leading-[22px] md:text-[24px] md:leading-[28px] text-center my-6"> Our Latest Works </h1>
                            <h1 className={"text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] text-center my-6"}>Your Social Media Potentials
                              with Our Proven Serives</h1>
                            <Tabs defaultValue="all" className="">
                              <TabsList
                                  className={"w-full text-black bg-transparent gap-2.5 justify-center md:justify-center items-center"}>
                                <div
                                    className="flex items-center self-center justify-self-center gap-2.5 py-2 px-4 rounded-md border border-[#46266A]">
                                  {categories.map((category, index) => {
                                    // Count the number of cards in the selected category
                                    const count = category === "all"
                                        ? OurWorksData?.cards?.length // Count all cards when "all" is selected
                                        : OurWorksData?.cards?.filter(card => card?.category?.includes(category))?.length;

                                    return (
                                        <TabsTrigger
                                            key={index}
                                            className={"btn-tab Capitalize font-medium"}
                                            value={category}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                          {/*{category.charAt(0).toUpperCase() + category.slice(1)} <span className={"tab-count"}>&nbsp;({count})</span>*/}
                                          {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </TabsTrigger>
                                    );
                                  })}
                                </div>
                              </TabsList>

                              {/* Use Suspense to show spinner while loading */}
                              <Suspense fallback={<Spinner/>}>
                                <TabsContent className={"mt-0"} value={selectedCategory}>
                                  <Suspense fallback={<Spinner/>}>
                                    <Projects Cards={filteredCards}/>
                                  </Suspense>
                                </TabsContent>
                              </Suspense>
                            </Tabs>
                          </div>
                        </AnimatedSection>
                      </div>
                      <SubServiceBanner cards={cards}/>
                      <AnimatedSection>
                        <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Card 1 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={56} extra="%"/>
                              <div>
                                <p className="font-semibold">People Reached</p>
                                <p className="text-sm">Increased ROAS</p>
                              </div>
                            </div>
                            {/* Card 2 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={65} extra="%"/>
                              <div>
                                <p className="font-semibold">People Engaged</p>
                                <p className="text-sm">More likely to engage</p>
                              </div>
                            </div>
                            {/* Card 3 */}
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                              <NumberTicker
                                  className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1.2] font-bold text-main"
                                  value={58} extra="%"/>
                              <div>
                                <p className="font-semibold">Most Trusted</p>
                                <p className="text-sm">A high rate of market penetration</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                      <SubscribeSection title={'Get in Touch to Transform Your Campaigns'} item1={'Industry Leading Technology'} item2={'99% of Billboard Ads'} item3={'White Glove Service'}/>
                    </>
                );
              case 'influencer-marketing':
                return (
                    <>
                      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                        <AnimatedSection>{!!subService?.overview &&
                            <OurWorkOverView isButton={true} isImage={true}
                                             overview={subService?.overview}/>}</AnimatedSection>
                        <AnimatedSection>
                          <Partnership/>
                          <div className="w-full inline-flex items-center justify-center">
                            <Link to={'/contact-us?scrollTo=contactUsForm'}
                                  className="px-6 py-2.5 bg-main text-white font-medium rounded-md hover:bg-gradient-default">Contact
                              Us For Marketing</Link>
                          </div>
                        </AnimatedSection>
                      </div>
                      <SubServiceBanner cards={cards2}/>
                      <AnimatedSection>
                        <TestimonialCard data={testimonials}/>
                      </AnimatedSection>
                      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                        <SubscribeSection title={'Get in Touch to Transform Your Campaigns'} item1={'Industry Leading Technology'} item2={'99% of Billboard Ads'} item3={'White Glove Service'}/>
                      </div>

                    </>
                );
              default:
                return <NotFound/>
            }
          })()}

        </>
      )}
    </>
  )
};

export default RenderBasedOnSubService;