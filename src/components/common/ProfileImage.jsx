import CustomImageFrame from "@/components/common/CustomImageFrame";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const ProfileImage = ({profile}) => {
  // const imageSrc = profile.image ? `/images/team-member/${profile.image}` : '/images/default/default-user.png';
  const imageSrc = profile.image ? `/images/default/default-user.png` : '/images/default/default-user.png';
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const handleImageError = () => {
    setImgSrc('/images/default/default-user.png');

  };
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 my-4">
      <div
        className="overflow-visible z-10 absolute bottom-0 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full border-2 border-primary">
        <img
          className="absolute bottom-0"
          src={imageSrc}
          alt={profile?.name}
          onError={handleImageError}
          width={292}
          height={392}
        />
      </div>
      <CustomImageFrame
        className="absolute -bottom-6 md:-bottom-8 lg:-bottom-9 xl:-bottom-10 z-20 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
      />
    </div>
  );
};

export default ProfileImage;
