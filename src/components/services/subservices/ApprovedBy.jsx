// eslint-disable-next-line react/prop-types
const ApprovedBy = ({data, style, imageWidth, imageHeight}) => {
  return (
    <div
      className="flex flex-col p-12 lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-12 px-4 md:px-6 lg:px-8 xl:px-12">
      {/* First div with title, description, and button */}
      <div className="flex-1 space-y-12 text-black">
        {/* Title and Description */}
        <div className="text-center space-y-9">
          <h2 className="text-center heading2">
            {data.title || ""}
            <span className="heading2 text-primary">
                        {data.title_highlight || ""}
                    </span>
          </h2>
          <p className="text-center description">{data.description || ""}</p>
        </div>
        <div className={`${style} flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8`}>
          {data?.cards_list?.map((card, index) => (
            <img
              key={card.id}
              src={card?.image || `/images/services/sub-services/approved-by/basis.png`}
              alt={card?.title || `Card Image ${index}`}
              width={imageWidth ?? 230}
              height={imageHeight ?? 126}
              className={"object-cover"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovedBy;
