// eslint-disable-next-line react/prop-types
import {Link} from "react-router-dom";
import {IoIosArrowRoundForward} from "react-icons/io";

const Projects = ({Headers, Cards}) => {
  return (
      <div className={"py-6 md:py-8 lg:py-10 "}>
          {Headers ? (
              <h2 className="text-center heading2">{Headers.title || ""} <span
                  className="text-gradiant">{Headers.title_highlight || ""}</span></h2>
          ) : ""}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Cards.map((item,index) => (
                  <div
                      key={index}
                      className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                      <img
                          src={item.image ? `/images/portfolio/${item.image}` : '/images/default/default-placeholder.png'}
                          onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/images/default/default-placeholder.png';
                          }}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                          {item.slug === '' ? ('') : (
                              <Link
                                  to={`/our-works/${item?.slug}`}
                                  className="mx-0 mt-4 w-36 px-3 py-0.5 flex items-center justify-between border border-main rounded-full shadow-sm hover:shadow-lg transition-all duration-300 hover:text-white hover:bg-main"
                              >
                                  View Details <IoIosArrowRoundForward size={22}/>
                              </Link>
                          )}
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Projects;