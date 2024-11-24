
const allclients = [
  {
    id: 1,
    title: "Best Service Award",
    description: "",
    icon: "1.png",
    slug: "best-service-award"
  },
  {
    id: 2,
    title: "National Award",
    description: "",
    icon: "2.png",
    slug: "national-award"
  },
  {
    id: 3,
    title: "ISO Certification",
    description: "",
    icon: "3.png",
    slug: "iso-certification"
  },
  {
    id: 4,
    title: "Job Fair",
    description: "",
    icon: "4.png",
    slug: "job-fair"
  },
  {
    id: 5,
    title: "Job Fair",
    description: "",
    icon: "5.png",
    slug: "job-fair"
  },
  {
    id: 6,
    title: "Job Fair",
    description: "",
    icon: "6.png",
    slug: "job-fair"
  }
];

const ValuableClients = () => {
  return (
    <section className="section achievements relative ppt-12 md:pt-24">
      <div className="row justify-between text-center lg:text-start">
        <div className="partner text-center mx-auto space-y-4 text-dark">
          <div
            className="heading1 text-center font-normal text-5xl">Our Valued Clients</div>
          <p className="text-center description font-arial">Hear what our satisfied clients have to say about their Frontline experience.</p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 justify-center">
        {
          allclients.map((valuableclient) => (
            <div
              key={valuableclient.id}
              className="flex justify-start rounded-lg bg-white text-black">
              <img
                width={216}
                height={150}
                className="mb-2 rounded-lg w-full h-[150px]"
                src={`/images/valued-customer/${valuableclient?.icon}`}
                alt={valuableclient.title}
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default ValuableClients;