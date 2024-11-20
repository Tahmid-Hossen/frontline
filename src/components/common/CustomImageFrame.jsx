// eslint-disable-next-line react/prop-types
const CustomImageFrame = ({width, height, className}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 50"
      className={className}
    >
      <g>
        <path
          className="fill-white"
          d="M0,0v50h50C22.39,50,0,27.61,0,0z"
        />
        <path
          className="fill-white"
          d="M50,50h50V0C100,27.61,77.61,50,50,50z"
        />
      </g>
    </svg>
  );
};

export default CustomImageFrame;