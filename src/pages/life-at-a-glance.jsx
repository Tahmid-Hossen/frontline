import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Culture from "@/components/culture/Culture";
import Achievements from "@/components/achievements/Achievements";
import {Suspense} from "react";
import Spinner from "@/components/ui/Spinner";
import AnimatedSection from "@/components/common/AnimatedSection";
import {Link} from "react-router-dom";


const cultures = {
  "title": "Our",
  "title_highlight": "Environment & Culture",
  "description": "At our company, culture and environment are intertwined to create a thriving community where every individual feels valued, supported, and empowered to reach their full potential. We foster a culture of collaboration, respect, and continuous learning, while also prioritizing sustainability and environmental stewardship in all our endeavors.",
  "image": "",
  "cultureData": [
    {
      "id": 1,
      "title": "Culture 1",
      "image": "/images/culture/culture_3.png"
    },
    {
      "id": 2,
      "title": "Culture 2",
      "image": "/images/culture/culture_2.png"
    },
    {
      "id": 3,
      "title": "Culture 3",
      "image": "/images/culture/culture_3.png"
    },
    {
      "id": 4,
      "title": "Culture 4",
      "image": "/images/culture/culture_4.png"
    },
    {
      "id": 5,
      "title": "Culture 5",
      "image": "/images/culture/culture_5.png"
    },
    {
      "id": 6,
      "title": "Culture 6",
      "image": "/images/culture/culture_6.png"
    },
    {
      "id": 7,
      "title": "Culture 7",
      "image": "/images/culture/culture_2.png"
    },
    {
      "id": 8,
      "title": "Culture 8",
      "image": "/images/culture/culture_4.png"
    },
    {
      "id": 9,
      "title": "Culture 9",
      "image": "/images/culture/culture_5.png"
    },
    {
      "id": 10,
      "title": "Culture 10",
      "image": "/images/culture/culture_6.png"
    },

  ]
}
const achievements = {
  "title": "Our",
  "title_highlight": "Awards & Recognition",
  "description": "At our company, culture and environment are intertwined to create a thriving community where every individual feels valued, supported, and empowered to reach their full potential. We foster a culture of collaboration, respect, and continuous learning, while also prioritizing sustainability and environmental stewardship in all our endeavors.",
  "image": "",
  "achievementsData": [
    {
      "id": 1,
      "title": "Best Service Award",
      "description": "Grameenphone",
      "image": "/images/achievements/digital_bangladesh_award.png"
    },
    {
      "id": 2,
      "title": "National Award",
      "description": "Banglalink",
      "image": "/images/achievements/national-award.png"
    },
    {
      "id": 3,
      "title": "Job Fair",
      "description": "DIU",
      "image": "/images/achievements/diu_job_fair.png"
    },
    {
      "id": 4,
      "title": "Job Fair",
      "description": "AIUB",
      "image": "/images/achievements/aiub_job_fair.png"
    },
    {
      "id": 5,
      "title": "Best Service Award",
      "description": "Grameenphone",
      "image": "/images/achievements/digital_bangladesh_award.png"
    },
    {
      "id": 6,
      "title": "National Award",
      "description": "Banglalink",
      "image": "/images/achievements/national-award.png"
    },
    {
      "id": 7,
      "title": "Job Fair",
      "description": "DIU",
      "image": "/images/achievements/diu_job_fair.png"
    },
    {
      "id": 8,
      "title": "Job Fair",
      "description": "AIUB",
      "image": "/images/achievements/aiub_job_fair.png"
    },
    {
      "id": 9,
      "title": "Job Fair",
      "description": "DIU",
      "image": "/images/achievements/diu_job_fair.png"
    },
    {
      "id": 10,
      "title": "Best Service Award",
      "description": "Grameenphone",
      "image": "/images/achievements/digital_bangladesh_award.png"
    },
    {
      "id": 11,
      "title": "National Award",
      "description": "Banglalink",
      "image": "/images/achievements/national-award.png"
    },
    {
      "id": 12,
      "title": "Job Fair",
      "description": "DIU",
      "image": "/images/achievements/diu_job_fair.png"
    },
    {
      "id": 13,
      "title": "Job Fair",
      "description": "AIUB",
      "image": "/images/achievements/aiub_job_fair.png"
    },

  ]
}
const LifeAtAGlance = () => {
  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'Life at a Glance'},
  ];
  return (
    <section className="bg-white mb-16">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={"Life Here"}
        description="In our company, fostering a positive and inclusive environment is paramount. We prioritize teamwork, diversity, and employee well-being to drive innovation and success."
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<Spinner/>}><AnimatedSection><Culture data={cultures}/></AnimatedSection></Suspense>
      </div>
      <div
        className="text-white text-center flex flex-col items-center justify-center bg-cover bg-no-repeat h-60 md:h-64"
        style={{
          backgroundImage: `url('/images/banner/life-here-banner-bg.png')`,
        }}
      >
        <AnimatedSection>
          <div className="px-4 w-full flex flex-col items-center justify-center gap-4">
            <p
              className="text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[21px] max-w-2xl mx-auto">
              Join our team that fuels your passion and work to satisfy your curiosity.
            </p>
            <h2
              className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[26px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] xl:leading-[46px] font-bold">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Didn't see the right job for you?
            </h2>
            <Link to={"/life-at-a-glance/career"}
                  className={"btn-large-rounded"}>
              View Openings
            </Link>
          </div>
        </AnimatedSection>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<Spinner/>}>
          <AnimatedSection>
            <Achievements data={achievements}/>
          </AnimatedSection>
        </Suspense>

      </div>
    </section>
  );
};

export default LifeAtAGlance;