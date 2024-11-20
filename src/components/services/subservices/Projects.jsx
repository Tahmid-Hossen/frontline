// eslint-disable-next-line react/prop-types
const Projects = ({Headers, Cards}) => {
  return (
    <div className={"py-6 md:py-8 lg:py-10 "}>
      {Headers ? (
        <h2 className="text-center heading2">{Headers.title || ""} <span
          className="text-gradiant">{Headers.title_highlight || ""}</span></h2>
      ) : ""}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {Cards.map((card, index) => (
          <div
            data-index={index}
            key={index}
            /*className={`${
                checkNumberSize(index) === 'large' ? 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3' : 'col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2'
            } bg-[#01203DBF]/75 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10 flex flex-col justify-between items-start rounded-lg shadow-lg text-white bg-cover bg-center bg-no-repeat h-60 md:h-64 lg:h-72 `}*/
            className={`relative group col-span-2 md:col-span-1 bg-slate-300 p-4 md:p-6 flex flex-col justify-between items-start rounded-lg shadow-lg text-white bg-cover bg-center bg-no-repeat h-44 sm:h-60 md:h-64 drop-shadow-lg hover:drop-shadow-xl overflow-hidden`}
            style={{backgroundImage: `url('/images/portfolio/${card.image}')`}}
          >
            <div
              className="absolute z-0 top-0 left-0 w-full h-24 group-hover:h-full group-hover:transition-all duration-500 ease-in-out bg-gradient-linear-card group-hover:bg-gradient-linear-card">
            </div>
            <div className="block group-hover:hidden z-10">
              <h3 className="portfolio-sub-title  line-clamp-1">{card.title}</h3>

            </div>
            <div
              className="hidden h-full group-hover:flex group-hover:flex-col group-hover:justify-between group-hover:gap-6 z-10">
              <div className="space-y-3 md:space-y-4">
                <h3 className="portfolio-sub-title">{card.title}</h3>
                <p className="portfolio-sub-description text-white text-justify line-clamp-4">{card.description}</p>
              </div>
              {/*{card.slug === '' ? ('') :(
                                <Link
                                    href={`/portfolio/${card?.slug}`}
                                    className="mx-0 btn-medium-rounded mt-4 w-40"
                                >
                                    View
                                </Link>
                            )}*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;