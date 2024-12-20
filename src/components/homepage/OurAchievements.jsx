const achievements = [
  {
    id: 1,
    title: "Best Service Award",
    description: "",
    icon: "/images/icons/digital-bangladesh-award.svg",
    slug: "best-service-award"
  },
  {
    id: 2,
    title: "National Award",
    description: "",
    icon: "/images/icons/national-award.svg",
    slug: "national-award"
  },
  {
    id: 3,
    title: "ISO Certification",
    description: "",
    icon: "/images/icons/iso.svg",
    slug: "iso-certification"
  },
  {
    id: 4,
    title: "Job Fair",
    description: "",
    icon: "/images/achievements/diu_job_fair.png",
    slug: "job-fair"
  }
];

const OurAchievements = () => {
  return (
    <section className="section achievements relative py-6 md:py-12">
      <div className="container">
        <div className="row justify-between text-center lg:text-start">
          <div className="partner text-center mx-auto space-y-4 text-dark">
            <div
              className="heading1 text-center">Our <span
              className="text-gradiant">Achievements</span></div>
            <p className="text-center description"><strong
              className="text-primary">Nexdecade</strong> provides industry-standard technology solutions on a global
              scale, aiding enterprises in navigating digital transformation through cutting-edge IT services and
              technology solutions. Our unwavering commitment to top-notch quality has led to outstanding success for
              our clients, resulting in numerous awards and recognitions from renowned organizations and platforms.
              Explore our accolades and honors below.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3 xl:grid-cols-4 justify-center">
          {
            achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg hover:shadow-xl border hover:border-transparent  text-black">
                <img
                  width={214}
                  height={164}
                  className="mx-auto mb-2 rounded-lg"
                  src={`${achievement.icon ? achievement.icon : '/images/opengraph-image.jpg'}`}
                  alt={achievement.title}
                />
                <div className="text-center">
                  <div className="text-lg md:text-lg font-semibold">{achievement.title}</div>
                  <p className="text-[14px]">{achievement.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;