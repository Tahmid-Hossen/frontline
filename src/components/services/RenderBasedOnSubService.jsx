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
  return (
    <>
      {!!subService && (
        <>
          {(() => {
            switch (subService?.slug) {
              case 'software-design':
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
              case 'hardware-design':
                return (
                  <>
                    <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-10">
                      <AnimatedSection>{!!subService?.overview &&
                        <Overview overview={subService?.overview}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.development_services &&
                        <DevelopmentServices order={""} minWidth={""} minHeight={""} padding={""} shadow={""}
                                             border={""} imageWidth={333} imageHeight={333}
                                             data={subService?.development_services}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.team_overview &&
                        <TeamOverview data={subService?.team_overview}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.system_design &&
                        <CardsComponent minWidth="min-w-[270px]" minHeight="min-h-[250px]" imageWidth={60}
                                        imageHeight={60} padding="px-6 py-3" shadow="shadow-lg" border=""
                                        data={subService?.system_design}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.layout_design &&
                        <CardsComponent minWidth="min-w-[367px]" minHeight="min-h-[272px]" imageWidth={323}
                                        imageHeight={194} padding="px-6 py-3" shadow="shadow-lg bg-[#EEF8FF]" border=""
                                        titleStyle={" font-semibold"} data={subService?.layout_design}
                                        colNumber={3}/>}</AnimatedSection>
                      <AnimatedSection>{!!subService?.hardware_testing &&
                        <CardsComponent minWidth="min-w-[180px]" minHeight="min-h-[200px]" imageWidth={68}
                                        imageHeight={68} padding="px-6 py-3" shadow="" border="border"
                                        titleStyle={"font-semibold"}
                                        data={subService?.hardware_testing}/>}</AnimatedSection>
                      {/*<AnimatedSection>{!!subService?.previous_projects && <Projects Headers={subService?.previous_projects} Cards={subService?.previous_projects?.projects} />}</AnimatedSection>*/}
                    </div>
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