import {Suspense, useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Projects from "@/components/services/subservices/Projects";
import Spinner from "@/components/ui/Spinner";
import OurWorksData from "@/data/OurWorksData.json"
import {useNavigate} from "react-router-dom";
import BannerSection from "@/components/BannerSection/BannerSection.jsx";
import OurWorkOverView from "@/components/portfolio/ui/OurWorkOverView.jsx";
import SubscribeSection from "@/components/SubscribeSection/SubscribeSection.jsx";

const OurWorks = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleClick = (e) => {
    e.preventDefault();
    // Use navigate to redirect to the contact us page with query parameters
    navigate('/contact-us?scrollTo=contactUsForm');
  };

  const categories = ["all", ...new Set(OurWorksData?.cards?.flatMap(card => card.category))];

  // Filter cards based on selected category
  const filteredCards = selectedCategory === "all"
    ? OurWorksData.cards
    : OurWorksData.cards.filter(card => card.category.includes(selectedCategory));
  const overview=[
    {
      "title": "",
      "subTitle": "Choose the right media format for your brand.",
      "description": "Frontline reaches millions of people across Bangladesh every week with our vast network of on-vehicle advertising canvases. Our platform offers the reach to introduce your brand to a wide audience and the frequency to build lasting connections with consumers.<br/><br/>Advertisers can choose from a variety of digital and static options, representing both traditional and modern advertising spaces in some of the busiest areas of Bangladesh, including major cities and high-traffic zones.<br/><br/>From compact vehicle wraps to large-scale mobile billboards, we provide coverage across the country's top markets, ensuring that your brand’s message is delivered to the right audience, exactly where and when it matters most.",
      "image": "/images/services/sub-services/overview/overview_software-design.png"
    },
  ]
  return (
      <section className="bg-white">
        <BannerSection title={'Our Works'} backgroundImage={'/images/banner/our-work-banner.png'}/>
        <div className="container mx-auto px-4 py-8">
          <OurWorkOverView isButton={false} isImage={false} overview={overview[0]}/>
          <div className="">
            <h1 className="heading2 text-center my-6"> View Our Works</h1>
            <Tabs defaultValue="all" className="">
              <TabsList
                  className={"w-full text-black bg-transparent gap-2.5 justify-center md:justify-center items-center"}>
                <div className="flex items-center self-center justify-self-center gap-2.5 py-2 px-4 rounded-md border border-[#46266A]">
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
          <SubscribeSection title={'Get in Touch to Transform Your Campaigns'} item1={'Industry Leading Technology'} item2={'98% of Billboard Ads'}/>
        </div>
      </section>
  );
};

export default OurWorks;