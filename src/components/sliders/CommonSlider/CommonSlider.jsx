import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {MoveLeft, MoveRight} from 'lucide-react';

// eslint-disable-next-line react/prop-types
const CommonSlider = ({data}) => {
  return (
    <div className="container relative">
      {/* Navigation buttons */}
      <div className="absolute z-10 -bottom-12 right-4 top-auto flex items-center gap-1">
        <div className="custom-prev z-10 cursor-pointer text-primary hover:bg-blue-200 px-1.5 py-1 rounded">
          <MoveLeft strokeWidth={3}/>
        </div>
        <div className="custom-next z-10 cursor-pointer text-primary hover:bg-blue-200 px-1.5 py-1 rounded">
          <MoveRight strokeWidth={3}/>
        </div>
      </div>

      <Swiper
        spaceBetween={24} // Space between each slide
        navigation={{
          nextEl: '.custom-next', // Target custom next button
          prevEl: '.custom-prev', // Target custom prev button
        }}
        grabCursor={true}
        breakpoints={{
          320: { // Mobile devices
            slidesPerView: 1, // Show 1 slide per view
          },
          640: { // Tablets
            slidesPerView: 2, // Show 2 slides per view
          },
          1024: { // Small desktops
            slidesPerView: 3, // Show 2 slides per view
          },
          1280: { // Large desktops
            slidesPerView: 4, // Show 3 slides per view
          },
        }}
        modules={[Navigation]}
        className="relative w-full h-full"
      >
        {data?.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex flex-col justify-between rounded-lg bg-white py-[22px] px-[18.5px] shadow-lg hover:cursor-grab hover:shadow-xl text-black my-3"
          >
            <img
              width={214}
              height={164}
              src={slide.image ?? "/images/culture/culture_2.png"}
              alt={slide.title}
              className="h-[164px] w-[214px] object-cover rounded-lg mx-auto"
            />
            <div className="text-center mt-4 space-y-4">
              <div className="text-lg md:text-lg font-semibold">{slide?.title || ''}</div>
              {/*<p className="text-[14px]">{slide?.description || ''}</p>*/}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonSlider;