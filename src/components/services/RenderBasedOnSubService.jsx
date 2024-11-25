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

const cards = {
  "title": "How To Advertise With",
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
                        <Overview overview={subService?.overview}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.development_services &&
                        <DevelopmentServices order={""} minWidth={""} minHeight={""} padding={""} shadow={""}
                                             border={""} imageWidth={333} imageHeight={333}
                                             data={subService?.development_services}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.platform_type &&
                        <CardsComponent minWidth="min-w-[150px] md:min-w-[180px]"
                                        minHeight="min-h-[120px] md:min-h-[156px]" imageWidth={48} imageHeight={48}
                                        padding="px-6 py-3" shadow="shadow-lg" border=""
                                        data={subService?.platform_type} colNumber={6}
                                        gridBaseCol={2}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.device_type &&
                        <CardsComponent minWidth="min-w-[150px] md:min-w-[180px]"
                                        minHeight="min-h-[120px] md:min-h-[156px]" imageWidth={48} imageHeight={48}
                                        padding="px-6 py-3" shadow="shadow-lg" border="" data={subService?.device_type}
                                        gridBaseCol={2}/>}</AnimatedSection>
                    </div>
                    <div className="mx-auto py-4 md:px-6 md:py-6 lg:py-8">
                      <AnimatedSection>{!!subService?.os_type &&
                        <SliderCardsComponent minWidth="min-w-[180px]" minHeight="min-h-[100px]" imageWidth={72}
                                              imageHeight={42} padding="px-3 py-4" shadow="shadow-lg"
                                              border="border border-primary" titleStyle={"text-sm font-medium"}
                                              data={subService?.os_type}/>}</AnimatedSection>
                    </div>
                    <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                      <AnimatedSection>{!!subService?.team_overview &&
                        <TeamOverview data={subService?.team_overview}/>}</AnimatedSection>
                      {/*<AnimatedSection>{!!subService?.previous_projects && <Projects Headers={subService?.previous_projects} Cards={subService?.previous_projects?.projects} />}</AnimatedSection>*/}
                    </div>
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
                            <h1 className="text-[24px] leading-[28px] text-center my-6"> Our Latest Works </h1>
                            <h1 className={"text-[48px] leading-[52px] text-center my-6"}>Your Social Media Potentials
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
              case 'ott':
                return (
                    <>
                      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                        <AnimatedSection>{!!subService?.overview &&
                            <Overview overview={subService?.overview}/>}</AnimatedSection>
                        <AnimatedSection>{!!subService?.ott_services &&
                            <CardsComponent minWidth="min-w-[270px]" minHeight="min-h-[250px]" imageWidth={60}
                                            imageHeight={60} padding="px-6 py-3" shadow="shadow-lg" border=""
                                            data={subService?.ott_services}/>}</AnimatedSection>
                        <AnimatedSection>{!!subService?.development_services &&
                            <DevelopmentServices order={""} minWidth={""} minHeight={""} padding={""} shadow={""}
                                                 border={""} landscape={true} imageWidth={504} imageHeight={333}
                                                 data={subService?.development_services}/>}</AnimatedSection>
                        <AnimatedSection>{!!subService?.connected_with &&
                            <CardsComponent minWidth="min-w-[216px]" minHeight="min-h-[150px]" imageWidth={185}
                                            imageHeight={73} padding="px-6 py-3" shadow="" border=""
                                            data={subService?.connected_with} colNumber={5}/>}</AnimatedSection>
                        {/*<AnimatedSection>{!!subService?.previous_projects && <Projects Headers={subService?.previous_projects} Cards={subService?.previous_projects?.projects} />}</AnimatedSection>*/}
                      </div>
                    </>
                );
              case 'vehicle-tracking-system':
                return (
                    <>
                      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                        <AnimatedSection>{!!subService?.overview &&
                            <Overview overview={subService?.overview}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.approved_by &&
                        <ApprovedBy style={""} imageWidth={230} imageHeight={126}
                                    data={subService?.approved_by}/>}</AnimatedSection>
                    </div>
                    <div>
                      <AnimatedSection>{!!subService?.features &&
                        <Features data={subService?.features}/>}</AnimatedSection>
                    </div>
                    <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                      <AnimatedSection>{!!subService?.reports &&
                        <CardsComponent minWidth="min-w-[133px]" minHeight="min-h-[125px]" imageWidth={76}
                                        imageHeight={76} padding="px-6 py-3" shadow="" border="" gridBaseCol={2}
                                        titleStyle={"text-sm font-semibold"} data={subService?.reports}
                                        colNumber={5}/>}</AnimatedSection>
                    </div>
                    <div>
                      <AnimatedSection>{!!subService?.technologies &&
                        <SliderCardsComponent minWidth="min-w-[180px]" minHeight="min-h-[90px]" imageWidth={140}
                                              imageHeight={52} padding="px-3 py-4" shadow="shadow-lg"
                                              border="border border-primary" titleStyle={"text-sm font-medium"}
                                              data={subService?.technologies}/>}</AnimatedSection>
                    </div>
                  </>
                );
              case 'fleet-management':
                return (
                  <>
                    <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                      <AnimatedSection>{!!subService?.overview &&
                        <Overview overview={subService?.overview}/>}</AnimatedSection>
                    </div>
                    <div>
                      <AnimatedSection>{!!subService?.what_makes_us_different &&
                        <Features data={subService?.what_makes_us_different}/>}</AnimatedSection>
                    </div>
                    <div className={"py-4 lg:py-8"}>
                      <AnimatedSection>{!!subService?.technologies &&
                        <SliderCardsComponent minWidth="min-w-[180px]" minHeight="min-h-[100px]" imageWidth={140}
                                              imageHeight={52} padding="px-3 py-4" shadow="shadow-lg"
                                              border="border border-primary"
                                              data={subService?.technologies}/>}</AnimatedSection>
                    </div>
                  </>
                );
              case 'iot':
                return (
                  <>
                    <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 mb-3 lg:mb-6 space-y-10">
                      <AnimatedSection>{!!subService?.overview &&
                        <Overview overview={subService?.overview}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.development_services &&
                        <DevelopmentServices order={""} minWidth={""} minHeight={""} padding={""} shadow={""}
                                             border={""} landscape={true} imageWidth={504} imageHeight={333}
                                             data={subService?.development_services}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.services_solutions &&
                        <CardsComponent minWidth="min-w-[263px]" minHeight="min-h-[250px]" imageWidth={60}
                                        imageHeight={60} padding="px-6 py-3" shadow="shadow-lg" border=""
                                        data={subService?.services_solutions}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.layout_design &&
                        <CardsComponent minWidth="min-w-[367px]" minHeight="min-h-[272px]" imageWidth={323}
                                        imageHeight={194} padding="px-6 py-3" shadow="shadow-lg bg-[#EEF8FF]" border=""
                                        titleStyle={" font-semibold"} data={subService?.layout_design}
                                        colNumber={3}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.hardware_testing &&
                        <CardsComponent minWidth="min-w-[250px]" minHeight="min-h-[290px]" imageWidth={68}
                                        imageHeight={68} padding="px-6 py-3" shadow="" border="border"
                                        titleStyle={"font-semibold"}
                                        data={subService?.hardware_testing}/>}</AnimatedSection>
                      {/*<AnimatedSection>{!!subService?.previous_projects && <Projects Headers={subService?.previous_projects} Cards={subService?.previous_projects?.projects} />}</AnimatedSection>*/}
                    </div>
                  </>
                );
              case 'gsm-attendance':
                return (
                  <>
                    <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                      <AnimatedSection>{!!subService?.overview &&
                        <Overview overview={subService?.overview}/>}</AnimatedSection>
                    </div>
                    <div className={"py-4 md:py-6 lg:py-8 space-y-10"}>
                      {/*<AnimatedSection>{!!subService?.what_makes_us_different &&
                                                <CardsComponent componentsBackground={"bg-[#EEF8FF] py-[50px]"}
                                                                minWidth="min-w-[230px]" minHeight="min-h-[184px]"
                                                                imageWidth={48} imageHeight={48} padding="px-6 py-3"
                                                                shadow="shadow-lg bg-white" border=""
                                                                data={subService?.what_makes_us_different}/>}</AnimatedSection>*/}
                      <AnimatedSection>{!!subService?.what_makes_us_different &&
                        <Features data={subService?.what_makes_us_different}/>}</AnimatedSection>
                    </div>
                    <div className="container mx-auto px-4 pb-8 lg:pb-14 space-y-10">
                      <AnimatedSection>{!!subService?.development_services &&
                        <DevelopmentServices order={""} minWidth={""} minHeight={""} padding={""} shadow={""}
                                             border={""} landscape2={true} imageWidth={456} imageHeight={333}
                                             data={subService?.development_services}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.development_services_reverse &&
                        <DevelopmentServices order={"order-2"} minWidth={""} minHeight={""} padding={""} shadow={""}
                                             border={""} landscape2={true} imageWidth={456} imageHeight={333}
                                             data={subService?.development_services_reverse}/>}</AnimatedSection>
                    </div>
                  </>
                );
              case 'set-top-box':
                return (
                  <>
                    <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 mb-4 lg:mb-8">
                      <AnimatedSection>{!!subService?.overview &&
                        <Overview overview={subService?.overview}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.featuring &&
                        <CardsComponent minWidth="min-w-[260px]" minHeight="min-h-[250px]"
                                        imageWidth={66} imageHeight={66} padding="px-6 py-3"
                                        shadow="shadow-lg" border="" data={subService?.featuring} colNumber={3}
                                        titleStyle={"font-semibold"}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.development_services &&
                        <DevelopmentServices order={""} minWidth={""} minHeight={""}
                                             padding={""} shadow={""} border={""}
                                             imageWidth={333} imageHeight={333}
                                             data={subService?.development_services}/>}</AnimatedSection>

                      <AnimatedSection>{!!subService?.layout_design &&
                        <CardsComponent minWidth="min-w-[367px]" minHeight="min-h-[272px]" imageWidth={323}
                                        imageHeight={194} padding="px-6 py-3" shadow="shadow-lg bg-[#EEF8FF]" border=""
                                        titleStyle={" font-semibold"} data={subService?.layout_design}
                                        colNumber={3}/>}</AnimatedSection>
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