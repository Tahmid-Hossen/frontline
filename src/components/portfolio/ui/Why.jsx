import ImageComponent from "@/components/common/ImageComponent";

// eslint-disable-next-line react/prop-types
const Why = ({whyJson, image, title}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-9">
        <h2 className="text-center heading2 font-normal"><span
          className="heading2 text-primary font-normal">Why</span> {title}</h2>
      </div>
      <div>
        <ImageComponent
          imagePath={image}
          defaultPath={'/images/default/default-card.png'}
          imageStyle={"mx-auto"}
          imageWidth={1069}
          imageHeight={364}
        />
        {whyJson?.map((item, index) => (
          <div key={index} className='py-10'>
            {item.description1 && (
              <p className="text-[18px]" dangerouslySetInnerHTML={{__html: item.description1}}/>
            )}
            {
              item.features && (
                <ul className='text-[18px] ml-2' dangerouslySetInnerHTML={{__html: item.features.join('')}}/>
              )
            }
            {
              item.description2 && (
                <p className="text-[18px]" dangerouslySetInnerHTML={{__html: item.description2}}/>
              )
            }

          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;