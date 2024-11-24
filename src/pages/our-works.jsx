import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Projects from "@/components/services/subservices/Projects";
import Spinner from "@/components/ui/Spinner";
import AnimatedSection from "@/components/common/AnimatedSection"; // Spinner component
import OurWorksData from "@/data/OurWorksData.json"
import {useNavigate} from "react-router-dom";
import {Suspense, useState} from "react";
import BannerSection from "@/components/BannerSection/BannerSection.jsx";

const OurWorks = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleClick = (e) => {
    e.preventDefault();
    // Use navigate to redirect to the contact us page with query parameters
    navigate('/contact-us?scrollTo=contactUsForm');
  };

  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'OurWorks'},
  ];
  const categories = ["all", ...new Set(OurWorksData?.cards?.flatMap(card => card.category))];

  // Filter cards based on selected category
  const filteredCards = selectedCategory === "all"
    ? OurWorksData.cards
    : OurWorksData.cards.filter(card => card.category.includes(selectedCategory));

  return (
      <section className="bg-white">
        {/* Breadcrumb */}
        {/*<BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={"Our Works"}
        backButton={""}
        backURL={""}
        description="Prioritizing Innovation, Reliability, and Client Satisfaction: Let's Accelerate Towards Your Goals with Our Premier Software & IT Services Today."
        breadcrumbs={breadcrumbs}
      />*/}
        <BannerSection title={'Our Works'} backgroundImage={'/images/banner/our-work-banner.png'}/>
        <div className="container mx-auto px-4 py-8">

          <Tabs defaultValue="all" className="">
            <TabsList className={"w-full text-black bg-transparent gap-2.5 justify-center md:justify-start"}>
              {categories.map((category, index) => {
                // Count the number of cards in the selected category
                const count = category === "all"
                    ? OurWorksData?.cards?.length // Count all cards when "all" is selected
                    : OurWorksData?.cards?.filter(card => card?.category?.includes(category))?.length;

                return (
                    <TabsTrigger
                        key={index}
                        className={"btn-tab uppercase"}
                        value={category}
                        onClick={() => setSelectedCategory(category)}
                    >
                      {/*{category.charAt(0).toUpperCase() + category.slice(1)} <span className={"tab-count"}>&nbsp;({count})</span>*/}
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </TabsTrigger>
                );
              })}
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
          <AnimatedSection>
            <div
                className="text-center mt-6 flex flex-col justify-between items-center gap-5 max-w-5xl h-auto mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] xl:leading-[55px] font-normal">{OurWorksData.section.title}</h2>
              <p
                  className="md:ml-6 mb-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center xl:px-6">{OurWorksData.section.subtitle}</p>
              <a href="/contact-us" onClick={handleClick} className="btn-large-rounded">
                Get In Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
  );
};

export default OurWorks;