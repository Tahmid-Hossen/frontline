import DOMPurify from 'dompurify';

// eslint-disable-next-line react/prop-types
const Overview = ({overview}) => {
  const sanitizedDescription = DOMPurify.sanitize(overview?.description || '');
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
      {/* First div with title, description, and button */}
      <div className="flex-1 space-y-6 text-black">
        <h1 className="heading2">
          {overview?.title || "Overview"}
        </h1>
        {sanitizedDescription && (
          <p className="description" dangerouslySetInnerHTML={{__html: sanitizedDescription}}/>
        )}
        {/*<Button
                    className="min-w-[100px] md:min-w-[162px] min-h-[46px] btn-medium-rounded">
                    Hire Team
                </Button>*/}
      </div>


      {/* Second div with the image */}
      <div className="">
        <img
          className="rounded-xl shadow-lg object-cover"
          src={overview?.image || `/images/services/sub-services/overview/overview.png`}
          alt={overview?.title || 'overview'}
          width={463}
          height={463}
        />
      </div>
    </div>
  );
};

export default Overview;
