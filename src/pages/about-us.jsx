import {useState} from "react";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import ProfileImage from "@/components/common/ProfileImage";
import TeamOverview from "@/components/services/subservices/TeamOverview";
import AnimatedSection from "@/components/common/AnimatedSection";
import BannerSection from "@/components/BannerSection/BannerSection.jsx";
import SubscribeSection from "@/components/SubscribeSection/SubscribeSection.jsx";
import OurWorksData from "@/data/OurWorksData.json";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
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
const goalsData = [
  {
    title: "TRANSFORMING THE OOH ADVERTISING INDUSTRY",
    description:
        "We take pride in offering hassle-free and highly effective on-vehicle outdoor advertising solutions for brands across Bangladesh. Our mission is to simplify the advertising process while maximizing visibility and impact, ensuring that your brand reaches its target audience in a dynamic and engaging way.",
  },
  {
    title: "CREATE OPPORTUNITIES",
    description:
        "By partnering with us, billboard owners can effortlessly turn their billboards into income-generating assets, all while maintaining their daily routines. With no hidden hassles and complete transparency, Frontline ensures that owners enjoy a stress-free experience as they earn extra revenue through innovative and impactful outdoor advertising campaigns.",
  },
  {
    title: "MERGING TECHNOLOGY WITH OOH ADVERTISING",
    description:
        "Our data-driven advertising platform, powered by an advanced impression count algorithm, empowers brands with precise control over their outdoor campaigns through the integration of cutting-edge technology.",
  },
  {
    title: "CREATE A BETTER DIGITAL BANGLADESH",
    description:
        "We are committed to developing an innovative and transformative on-vehicle advertising platform that revolutionizes the Out-of-Home (OOH) advertising industry in Bangladesh. By integrating cutting-edge technology and data-driven solutions, our platform is designed to provide unmatched opportunities for brands to engage with their audiences in dynamic and impactful ways.",
  },
];
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
          <TeamOverview data={teamOverviewData}
                        headerStyle={"text-xl font-bold leading-none text-left underline-offset-2 decoration-slice md:text-3xl md:leading-tight"}/>
          {/* Mission, Vision Section */}
          <section className="mb-8 mt-8">
            <AnimatedSection>
              <Tabs defaultValue="mission" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-6">
                <div className="rounded-lg border dark:border-gray-800 p-3">
                  <TabsList className={"flex flex-row md:flex-col gap-4 items-center justify-center bg-transparent"}>
                    <TabsTrigger
                        className={"text-xl font-medium px-5 py-2 w-full text-black data-[state=active]:!text-white data-[state=active]:bg-gradient-default data-[state=active]:text-foreground data-[state=active]:shadow-sm"}
                        value="mission">Mission</TabsTrigger>
                    <TabsTrigger
                        className={"text-xl font-medium px-5 py-2 w-full text-black data-[state=active]:!text-white data-[state=active]:bg-gradient-default data-[state=active]:text-foreground data-[state=active]:shadow-sm"}
                        value="vision">Vision</TabsTrigger>
                  </TabsList>
                </div>
                <div
                    className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 text-left">
                  <TabsContent value="mission">Our mission is to revolutionize the advertising industry by combining
                    innovation and cutting-edge technology. <br/><br/>
                    Lorem ipsum dolor sit amet consectetur. Malesuada consectetur a amet hendrerit quisque eget. Metus
                    in
                    nisl netus risus. Elementum ante vel sollicitudin donec cursus gravida amet gravida diam. Accumsan
                    at
                    lorem ornare nec pulvinar. Ullamcorper at ut dui bibendum ultrices risus mauris augue. Parturient id
                    augue eu dictum enim. Iaculis senectus nulla nam ut pharetra tempor nec. Pharetra fames tellus leo
                    sagittis volutpat nunc tellus vel viverra. Vestibulum nec duis duis tellus turpis senectus
                    dignissim.
                    Sagittis facilisi iaculis tristique et sit. Placerat sed nullam fermentum feugiat arcu. Felis nibh
                    urna felis feugiat dignissim.<br/>
                    Ornare suspendisse et ridiculus dictumst cursus at sit elit. Adipiscing vitae diam non posuere vitae
                    feugiat habitant. Amet at adipiscing sed aliquet amet quis malesuada sed et. Urna et amet at non
                    amet.
                    Facilisis faucibus tellus magna nibh suscipit. Praesent sed pharetra nam quis enim. Accumsan neque
                    in
                    dignissim nibh. Ultrices amet ac risus sed lectus consequat vel consequat blandit. Nisi porttitor
                    pellentesque sit orci mauris.</TabsContent>
                  <TabsContent value="vision">Our vision is to empower brands to connect with audiences in meaningful
                    and
                    impactful ways.<br/><br/>
                    Lorem ipsum dolor sit amet consectetur. Malesuada consectetur a amet hendrerit quisque eget. Metus
                    in
                    nisl netus risus. Elementum ante vel sollicitudin donec cursus gravida amet gravida diam. Accumsan
                    at
                    lorem ornare nec pulvinar. Ullamcorper at ut dui bibendum ultrices risus mauris augue. Parturient id
                    augue eu dictum enim. Iaculis senectus nulla nam ut pharetra tempor nec. Pharetra fames tellus leo
                    sagittis volutpat nunc tellus vel viverra. Vestibulum nec duis duis tellus turpis senectus
                    dignissim.
                    Sagittis facilisi iaculis tristique et sit. Placerat sed nullam fermentum feugiat arcu. Felis nibh
                    urna felis feugiat dignissim.<br/>
                    Ornare suspendisse et ridiculus dictumst cursus at sit elit. Adipiscing vitae diam non posuere vitae
                    feugiat habitant. Amet at adipiscing sed aliquet amet quis malesuada sed et. Urna et amet at non
                    amet.
                    Facilisis faucibus tellus magna nibh suscipit. Praesent sed pharetra nam quis enim. Accumsan neque
                    in
                    dignissim nibh. Ultrices amet ac risus sed lectus consequat vel consequat blandit. Nisi porttitor
                    pellentesque sit orci mauris.
                  </TabsContent>
                </div>
              </Tabs>
            </AnimatedSection>
          </section>
        </div>
        <section className="bg-[#F0F0F0] py-16 px-6">
          <AnimatedSection className="container flex flex-col md:flex-row justify-between gap-5 md:gap-10">
            {/* Header Section */}
            <div className="w-full flex flex-col justify-between items-center">
              <h2 className="text-3xl font-bold text-black text-center mb-12">
                Future <span className="text-gradiant">GOALS</span>
              </h2>
              <img
                  src="/images/future-goal.png"
                  alt="Target Icon"
                  className="mx-auto mb-4 w-full"
              />
            </div>

            {/* Goals Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
              {goalsData.map((goal, index) => (
                  <div key={index} className="text-left">
                    <h3 className="text-xl font-semibold text-main mb-4">
                      {goal.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{goal.description}</p>
                  </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <div className="container">
          <SubscribeSection title={'Get in Touch to Transform Your Campaigns'} item1={'Industry Leading Technology'}
                            item2={'99% of Billboard Ads'} item3={'White Glove Service'}/>
        </div>
      </section>
  );
};

export default AboutUs;