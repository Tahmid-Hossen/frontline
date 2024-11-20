import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PortfolioOverview = ({title, description, image}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
      <div className="flex-1 space-y-6 text-black">
        <h1 className="heading2">
          {title || "Overview"}
        </h1>
        <p className="description">
          {description || `A vehicle tracking system design involves developing a robust infrastructure to monitor and manage
                        the movement of vehicles in real-time. It includes components like GPS receivers, communication
                        interfaces, databases for storing location data, and user interfaces for visualization and control.
                        The design aims to ensure accuracy, reliability, and efficiency in tracking vehicle locations,
                        enabling functionalities such as route optimization, fleet management, and theft prevention.`}
        </p>
        <div className='flex justify-start items-center gap-4'>
          <Link to='#'>
            <img
              className="object-cover"
              src={`/images/portfolio/overview/apple-store.png`}
              alt={title || 'apple'}
              width={241}
              height={70}
            />
          </Link>
          <Link to='#'>
            <img
              className="object-cover"
              src={`/images/portfolio/overview/google-play.png`}
              alt={title || 'apple'}
              width={241}
              height={70}
            />
          </Link>
        </div>
      </div>

      {/* Second div with the image */}
      <div className="">
        <img
          className="rounded-xl object-cover"
          src={image || `/images/services/sub-services/overview/overview.png`}
          alt={title || 'overview'}
          width={463}
          height={463}
        />
      </div>
    </div>
  );
};

export default PortfolioOverview;