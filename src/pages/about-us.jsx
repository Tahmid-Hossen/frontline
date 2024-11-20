import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import ProfileImage from "@/components/common/ProfileImage";
import TeamOverview from "@/components/services/subservices/TeamOverview";
import AnimatedSection from "@/components/common/AnimatedSection";

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
  title: "Company",
  title_highlight: "Overview",
  sections: [
    {id: 1, year: "2006", description: "Founded Year"},
    {id: 2, value: "120+", description: "Total Projects"},
    {id: 3, value: "1600+", description: "Happy Clients"},
    {id: 4, year: "64", description: "Coverage in Districts"}
  ]
};
const whatWeAreContent = `
    <p class="">
    Nexdecade Technology Pvt. Ltd. is a leading software development company in Bangladesh, dedicated to delivering innovative and scalable technology solutions since 2006. With a strong commitment to excellence, we have become pioneers in providing end-to-end OTT platform management for some of the country's top brands, including Toffee, BINGE, BIOSCOPE, and TSports. Our expertise extends beyond OTT, encompassing Vehicle Tracking and Management Systems (VTS/VMS), Ad management platforms, third-party CDN solutions, chat and calling applications, and inventory management systems.
  </p>
  <p class="">
    We take pride in our ability to offer a diverse range of services that meet the ever-evolving needs of our clients. Our solutions are designed to be robust, reliable, and customizable, ensuring seamless integration and enhanced operational efficiency for businesses across industries. With a focus on customer satisfaction and long-term partnerships, we strive to lead the digital transformation in Bangladesh and beyond.
  </p>
  <p class="">
    At Nexdecade, we believe in innovation, collaboration, and delivering impactful results that drive growth and success for our clients.
  </p>
`;
const AboutUs = () => {
  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'About Us'},
  ];
  return (
    <section className="bg-white mb-16">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={"About Nexdecade"}
        description="Nexdecade leads the way in next-generation IT services, technological solutions, and digital transformations. Our mission is to empower businesses to thrive in tomorrow's marketplace. We are dedicated to fostering innovation by delivering cutting-edge technology solutions worldwide. Join us in spearheading your digital transformation journey with Nexdecade, on a global scale."
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Who Are We Section */}
        <section className="flex flex-col md:flex-row items-center justify-center pb-12">
          <div className="md:w-1/2 pr-8">
            <h3 className={`text-left heading1 mb-6`}>Who <span
              className="text-gradiant">Are we?</span></h3>
            <div className="text-gray-800 text-justify space-y-4" dangerouslySetInnerHTML={{__html: whatWeAreContent}}/>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 self-center">
            <img
              className="w-full h-full rounded-[10px] shadow-xl mx-auto object-cover"
              src={`/images/about/aboutus1.png`}
              alt={'About Nexdecade'}

              width={463}
              height={463}
            />
          </div>
        </section>

        {/* Core Beliefs, Mission, Vision Section */}
        {/* <section className="mb-8">
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
                </section>*/}

        {/* Team Profiles Section */}
        <section className="mb-8">
          <h3 className={`text-center heading1 mb-10`}>
            Meet <span className="text-gradiant">Our Leaders</span>
          </h3>

          {/* Management Section */}
          <h4 className="text-start heading2 py-6 text-gradiant italic w-full pr-2">Managements</h4>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-10 mb-16">
            {teamProfiles
              .filter(profile => profile.category === "Management")
              .map((profile, index) => (
                <AnimatedSection key={index} index={index} variant={"fadeUpVariant"}>
                  <div
                    className="flex flex-col items-center text-center px-2 py-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out h-max"
                  >
                    <ProfileImage profile={profile}/>
                    <div className="space-y-0.5 flex flex-col h-full">
                      <h4 className="text-base md:text-lg lg:text-xl font-medium">{profile.name}</h4>
                      {profile.position && (<h5 className="text-sm text-gradiant"><strong>{profile.position}</strong>
                      </h5>)}
                      {profile.designation && (
                        <h5 className="text-sm ">{profile.designation}</h5>)}
                      {profile.category !== "Management" && profile.workingExperience && (
                        <h5 className="text-sm"><strong>
                          {profile.workingExperience}+</strong> Years of experience
                        </h5>)}
                      {profile.category !== "Management" && profile.profileDescription && (
                        <p className="text-sm text-justify pt-3 flex-grow">{profile.profileDescription}</p>
                      )}

                      {/*Profile Social Sections*/}
                      {/*{profile.socialLinks && (
                                            <div className="flex justify-center items-center pt-5 space-x-4">
                                                {profile.socialLinks.linkedin && (
                                                    <Link href={profile.socialLinks.linkedin} target="_blank"
                                                          rel="noopener noreferrer"
                                                          className=" text-[#0A142F] bg-gray-200 hover:bg-primary p-2 hover:text-white rounded-full border border-[#0A142F]/40 hover:border-transparent">
                                                        <Linkedin strokeWidth={1} absoluteStrokeWidth size={16}/>
                                                    </Link>
                                                )}
                                                {profile.socialLinks.facebook && (
                                                    <Link href={profile.socialLinks.facebook} target="_blank"
                                                          rel="noopener noreferrer"
                                                          className=" text-[#0A142F] bg-gray-200 hover:bg-primary p-2 hover:text-white rounded-full border border-[#0A142F]/40 hover:border-transparent">
                                                        <Facebook strokeWidth={1} absoluteStrokeWidth size={16}/>
                                                    </Link>
                                                )}
                                                 Add more social icons if needed
                                            </div>
                                        )}*/}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>

          {/* Team Leads Section */}
          <h4 className="text-start heading2 py-6 text-gradiant italic w-full pr-2">Team Leads</h4>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-10">
            {teamProfiles
              .filter(profile => profile.category === "Team Leads")
              .map((profile, index) => (
                <AnimatedSection key={index} index={index} variant={"fadeUpVariant"}>
                  <div
                    className="flex flex-col items-center text-center px-2 py-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <ProfileImage profile={profile}/>
                    <div className="space-y-0.5 flex flex-col h-full">
                      <h4 className="text-base md:text-lg lg:text-xl font-medium">{profile.name}</h4>
                      {profile.position && (<h5 className="text-sm "><strong>{profile.position}</strong>
                      </h5>)}
                      {profile.designation && (
                        <h5 className="text-sm">{profile.designation}</h5>)}
                      {profile.workingExperience && (<h5 className="text-sm"><strong>
                        {profile.workingExperience}+</strong> Years of experience
                      </h5>)}
                      {/*{profile.profileDescription && (
                                                <p className="text-sm text-justify pt-3 flex-grow px-3 line-clamp-3">{profile.profileDescription}</p>
                                            )}*/}
                      {/*Profile Social Sections*/}
                      {/*{profile.socialLinks && (
                                            <div className="flex justify-center items-center pt-5 space-x-4">
                                                {profile.socialLinks.linkedin && (
                                                    <Link href={profile.socialLinks.linkedin} target="_blank"
                                                          rel="noopener noreferrer"
                                                          className=" text-[#0A142F] bg-gray-200 hover:bg-primary p-2 hover:text-white rounded-full border border-[#0A142F]/40 hover:border-transparent">
                                                        <Linkedin strokeWidth={1} absoluteStrokeWidth size={16}/>
                                                    </Link>
                                                )}
                                                {profile.socialLinks.facebook && (
                                                    <Link href={profile.socialLinks.facebook} target="_blank"
                                                          rel="noopener noreferrer"
                                                          className=" text-[#0A142F] bg-gray-200 hover:bg-primary p-2 hover:text-white rounded-full border border-[#0A142F]/40 hover:border-transparent">
                                                        <Facebook strokeWidth={1} absoluteStrokeWidth size={16}/>
                                                    </Link>
                                                )}
                                                 Add more social icons if needed
                                            </div>
                                        )}*/}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </section>

        {/* Team Overview Section */}
        <TeamOverview data={teamOverviewData}/>
      </div>
    </section>
  );
};

export default AboutUs;