import {useState} from "react";

// eslint-disable-next-line react/prop-types
const ImageComponent = ({imagePath, defaultPath, name, imageStyle, imageWidth, imageHeight}) => {
  const [imgSrc, setImgSrc] = useState(imagePath ?? defaultPath);

  const handleImageError = () => {
    setImgSrc(defaultPath);
  };

  return (
    <img
      className={`${imageStyle ? `${imageStyle}` : "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full mb-4 border-2 border-primary overflow-y-clip object-cover hover:shadow-xl transition-shadow duration-300 ease-in-out"}`}
      src={imgSrc}
      alt={name}
      /*onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultPath;
      }}*/
      onError={handleImageError}
      width={imageWidth ?? 292}
      height={imageHeight ?? 292}
    />
  );
};

export default ImageComponent;
