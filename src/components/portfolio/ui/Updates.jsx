import ImageComponent from "@/components/common/ImageComponent";

 
const Updates = ({
                   updatesJson,
                   description,
                   image,
                   gridComponent = false,
                   imageWidth,
                   imageHeight,
                   order,
                   isReverse,
                   title
                 }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-9">
        <h2 className="text-center heading2 font-normal"><span
          className="heading2 text-primary font-normal">Updates </span> of the {title} </h2>
      </div>
      <div
        className={gridComponent ? 'flex flex-col md:flex-row justify-center items-center gap-4' : `flex ${isReverse ? 'flex-col-reverse' : 'flex-col'} gap-4`}>
        <ImageComponent
          imagePath={image}
          defaultPath={'/images/default/default-card.png'}
          imageStyle={`${order} mx-auto`}
          imageWidth={imageWidth || 504}
          imageHeight={imageHeight || 364}
        />
        <ul className={gridComponent || isReverse ? 'text-[18px] ml-2' : 'text-[18px] ml-2 mt-10 flex-1'}>
          <p className='pb-2'>{description}</p>
          {updatesJson?.map((item, index) => (
            <li key={index} className='text-[18px] list-disc list-inside'>
              <span className='font-normal'>{item?.name}</span>
              {item?.description && (
                <ul className='list-disc list-inside ml-4'>
                  <li>{item?.description}</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Updates;