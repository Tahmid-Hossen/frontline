import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import ProfileImage from "@/components/common/ProfileImage";
import TeamOverview from "@/components/services/subservices/TeamOverview";
import AnimatedSection from "@/components/common/AnimatedSection";
import BannerSection from "@/components/BannerSection/BannerSection.jsx";
import SubscribeSection from "@/components/SubscribeSection/SubscribeSection.jsx";

const teamProfiles = [
  {
    name: "Md. Azizul Hoque",
    position: "Chairman",
    image: "chairman.png",
    profileDescription: "As the Chairman, Md. Azizul Hoque oversees the strategic direction of the company, ensuring sustainable growth and success.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 25,
    category: "Management"
  },
  {
    name: "Abdullah Al Masud",
    position: "Managing Director",
    image: "default-user.png",
    profileDescription: "Abdullah Al Masud is responsible for day-to-day operations, driving innovation and ensuring operational efficiency.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 20,
    category: "Management"
  },
  {
    name: "Iftekhar Zaman",
    position: "CEO & Director",
    image: "ceo_director.png",
    profileDescription: "As CEO & Director, Iftekhar Zaman leads the company with a focus on strategic growth and technological innovation.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 18,
    category: "Management"
  },
  {
    name: "Luthfun Nahar",
    position: "Director",
    image: "director.png",
    profileDescription: "Luthfun Nahar oversees business development and strategic partnerships.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 15,
    category: "Management"
  },
  {
    name: "Md. Moniruzzaman",
    position: "General Manager",
    image: "general_manager.png",
    profileDescription: "Md. Moniruzzaman manages internal teams, ensuring smooth operations and high performance across departments.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 12,
    category: "Management"
  },
  {
    name: "Mridha Rashedul Islam",
    position: "Head of Operations",
    image: "head_of_operations.png",
    profileDescription: "Mridha Rashedul Islam brings 14 years of experience in operations management, ensuring efficient process flows.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 14,
    category: "Management"
  },
  {
    name: "Zawadul Kawum",
    position: "Head of Development",
    image: "head_of_development.png",
    profileDescription: "Zawadul Kawum leads the development team, ensuring high-quality code and innovative solutions.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 15,
    category: "Management"
  },
  {
    name: "Fahad Zaman",
    position: "Project Manager",
    image: "project_manager.png",
    profileDescription: "Fahad Zaman is responsible for overseeing project lifecycles, ensuring timely delivery.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 10,
    category: "Management"
  },
  {
    name: "Rokon Uz Zaman",
    position: "Web Development (Team Lead)",
    designation: "Senior Software Engineer",
    image: "web_development_(Team Lead).png",
    profileDescription: "Rokon Uz Zaman leads the web development team with a focus on delivering responsive websites.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 12,
    category: "Team Leads"
  },
  {
    name: "Walioul Islam Jewel",
    position: "Backend (Team Lead)",
    designation: "Senior Software Engineer",
    image: "backend_(Team Lead).png",
    profileDescription: "Walioul Islam Jewel is responsible for managing server-side development.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 13,
    category: "Team Leads"
  },
  {
    name: "GM Shafiquel Islam",
    position: "iOS App Development (Team Lead)",
    designation: "Senior Software Engineer",
    image: "ios_app_development_(Team Lead).png",
    profileDescription: "GM Shafiquel Islam leads the iOS team, focusing on building user-friendly mobile applications.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 11,
    category: "Team Leads"
  },
  {
    name: "Moshahed Alam",
    position: "CMS Backend (Team Lead)",
    designation: "Senior Software Developer",
    image: "cms_backend_(Team Lead).png",
    profileDescription: "Moshahed Alam specializes in CMS backend development, ensuring robust content management.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 9,
    category: "Team Leads"
  },
  {
    name: "Kazi Md. Saidul",
    position: "Android App Development (Team Lead)",
    designation: "Senior Software Engineer",
    image: "android_app_development_(Team Lead).png",
    profileDescription: "Kazi Md. Saidul leads the Android app team, delivering scalable mobile applications.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 10,
    category: "Team Leads"
  },
  {
    name: "Md. Mahafujul Islam",
    position: "UI/UX Designer (Team Lead)",
    designation: "Senior UI/UX Designer",
    image: "ui_ux_designer_(Team Lead).png",
    profileDescription: "Md. Mahafujul Islam leads the design team, creating intuitive user-centric interfaces.",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
    },
    workingExperience: 8,
    category: "Team Leads"
  }
];


const aboutSection = [
  {
    title: "Core Beliefs",
    subtitle: "Integrity, Sustainability, Quality Outcome",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci arcu molestie scelerisque sed malesuada nibh. Quis amet integer nibh vulputate dignissim lacus commodo...",
  },
  {
    title: "Mission",
    subtitle: "Innovation, Accountability, Empathy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci arcu molestie scelerisque sed malesuada nibh. Quis amet integer nibh vulputate dignissim lacus commodo...",
  },
  {
    title: "Vision",
    subtitle: "Global, Innovation, Transformation",
    description:
      "Nexdecade aims a future where businesses harness the power of next-generation IT services, technology solutions, and digital transformation to thrive in an ever-evolving marketplace...",
  },
];
const teamOverviewData = {
  title: "",
  title_highlight: "Frontline At A Glance",
  sections: [
    {id: 1, year: "98", description: "Frontline reaches over 98% of OOH media in the BD"},
    {id: 2, value: "100+", description: "Frontline partners with over 100 media owners."},
    {id: 3, value: "65+", description: "More than 65 creatives completed"},
    {id: 4, year: "24", description: "Frontline services Available in 24 cities in Bangladesh ."}
  ]
};
const whatWeAreContent = `
    <p class="">
    <strong>Frontline</strong> is the premier out-of-home advertising platform in the country, working to avail data-driven outdoor advertising for brands in Bangladesh by tapping into the gig economy and our tech-based OOH platform
  </p>
  <p class="">
    Frontline understands its role in driving cultural impact. We are embedded into the fabric of our communities and trusted by the millions who engage with our media every day, driving a strong relationship between brands and audiences.
  </p>
  <p class="">
    We are leading the industry, bringing intelligence to out of home by deploying digital at scale and embracing new technologies.
  </p>
`;
const sectionData = {
  mission: "Our mission is to revolutionize the advertising industry by combining innovation and cutting-edge technology.",
  vision: "Our vision is to empower brands to connect with audiences in meaningful and impactful ways.",
  goals: [
    {
      title: "Transforming the OOH Advertising Industry",
      description: "We take pride in offering hassle-free and highly effective on-vehicle outdoor advertising solutions for brands. Our mission is to simplify the advertising process while maximizing visibility and impact."
    },
    {
      title: "Create Opportunities",
      description: "By partnering with us, billboard owners can turn their assets into revenue-generating tools. We ensure a stress-free experience for advertisers and property owners alike."
    },
    {
      title: "Merging Technology with OOH Advertising",
      description: "Our data-driven platform empowers brands with precise control over their outdoor campaigns through advanced technology."
    },
    {
      title: "Create a Better Digital Bangladesh",
      description: "We are committed to developing an innovative advertising platform that transforms outdoor advertising in Bangladesh through technology."
    }
  ]
};
const AboutUs = () => {

  return (
    <section className="bg-white mb-16">
      <BannerSection title={'Get to Know US'} backgroundImage={'/images/banner/our-work-banner.png'}/>
      <div className="container mx-auto px-4 py-8">
        {/* Who Are We Section */}
        <AnimatedSection>
          <section className="flex flex-col md:flex-row items-center justify-center pb-12">
            <div className="md:w-1/2 pr-8">
              <h3 className={`text-left heading1 mb-6`}>Who <span
                  className="text-gradiant">Are we?</span></h3>
              <div className="text-gray-800 text-justify space-y-4"
                   dangerouslySetInnerHTML={{__html: whatWeAreContent}}/>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 self-center">
              <img
                  className="w-full h-full rounded-[10px] shadow-xl mx-auto object-cover"
                  src={`/images/about/about-us.png`}
                  alt={'About Frontline'}

                  width={463}
                  height={463}
              />
            </div>
          </section>
        </AnimatedSection>
        {/* Team Overview Section */}
        <TeamOverview data={teamOverviewData}/>
        {/* Core Beliefs, Mission, Vision Section */}
        <section className="mb-8 mt-8">
          <AnimatedSection>
            {aboutSection.map((section, index) => (
                <AnimatedSection key={index} index={index} variant={"fadeUpVariant"}>
                  <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-black py-5"
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[34px] font-medium leading-tight md:leading-snug xl:leading-[40px]">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      <h4 className="text-base md:text-lg lg:text-xl xl:text-[18px] font-semibold xl:leading-[21px]">
                        {section.subtitle}
                      </h4>
                      <p className="text-sm md:text-base lg:text-lg xl:text-[18px] text-gray-800">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
            ))}
          </AnimatedSection>
        </section>

        <SubscribeSection title={'Get in Touch to Transform Your Campaigns'} item1={'Industry Leading Technology'}
                          item2={'99% of Billboard Ads'} item3={'White Glove Service'}/>
      </div>
    </section>
  );
};

export default AboutUs;