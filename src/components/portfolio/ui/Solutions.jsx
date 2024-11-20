import ImageComponent from "@/components/common/ImageComponent";

 
const Solutions = ({
                     solutionJson,
                     description,
                     image,
                     gridComponent = false,
                     imageWidth,
                     imageHeight,
                     order,
                     isReverse
                   }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-9">
        <h2 className="text-center heading2 font-normal"><span
          className="heading2 text-primary font-normal">Solutions </span> we came up with</h2>
      </div>
      <div
        className={gridComponent ? 'flex flex-col md:flex-row justify-between items-center gap-4' : `flex ${isReverse ? 'flex-col-reverse' : 'flex-col'} gap-4`}>
        <ImageComponent
          imagePath={image}
          defaultPath={'/images/default/default-card.png'}
          imageStyle={`${order} mx-auto`}
          imageWidth={imageWidth || 1069}
          imageHeight={imageHeight || 364}
        />
        <ul className={gridComponent || isReverse ? 'text-[18px] ml-2' : 'text-[18px] ml-2 mt-10'}>
          <p className='pb-2'>{description}</p>
          {solutionJson?.map((item, index) => (
            <li key={index} className='text-[18px]'>
              <span className='font-semibold'>{index + 1}. {item?.name}</span>: {item?.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Solutions;