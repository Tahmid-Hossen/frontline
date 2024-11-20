// eslint-disable-next-line react/prop-types
const Impact = ({impactJson}) => {
  return (
    <div className="bg-[#EEF8FF]">
      <div className="container mx-auto py-12">
        <h2 className="text-center heading2 font-normal">
          <span className="heading2 text-primary font-normal">Impact</span> on the Users
        </h2>

        {impactJson?.map((item, index) => (
          <div key={index} className='py-10'>
            {item.description1 && (
              <p className="text-[18px]" dangerouslySetInnerHTML={{__html: item.description1}}/>
            )}
            {item.details && item.details.length > 0 && (
              <ul className='text-[18px] ml-2'>
                {item.details.map((detail, detailIndex) => (
                  <li className='list-disc list-inside' key={detailIndex} dangerouslySetInnerHTML={{__html: detail}}/>
                ))}
              </ul>
            )}
            {item.description2 && (
              <p className="text-[18px]" dangerouslySetInnerHTML={{__html: item.description2}}/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;