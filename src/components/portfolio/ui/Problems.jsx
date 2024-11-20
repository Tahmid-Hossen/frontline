// eslint-disable-next-line react/prop-types
const Problems = ({client, problemsJson}) => {
  return (
    <div className="bg-[#EEF8FF]">
      <div className="container mx-auto py-12">
        <h2 className="text-center heading2 font-normal"><span
          className="heading2 text-primary font-normal">Problems  </span>faced by {client} Clients</h2>

        <ul className={'text-[18px] ml-2 mt-10'}>
          {problemsJson?.map((item, index) => (
            <li key={index} className='text-[18px]'>
              <span className='font-semibold'>{index + 1}. {item?.name}</span>: {item?.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Problems;