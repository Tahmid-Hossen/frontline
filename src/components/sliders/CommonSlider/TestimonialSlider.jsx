import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {MoveLeft, MoveRight} from 'lucide-react';

// eslint-disable-next-line react/prop-types
const TestimonialSlider = ({data}) => {
  return (
    <div className="mx-2 relative">
      {/* Navigation buttons */}
      <div className="absolute z-10 -bottom-12 right-4 top-auto flex items-center gap-1">
        <div className="custom-prev z-10 cursor-pointer text-main hover:text-white hover:bg-main px-1.5 py-1 rounded">
          <MoveLeft strokeWidth={3}/>
        </div>
        <div className="custom-next z-10 cursor-pointer text-main hover:text-white hover:bg-main px-1.5 py-1 rounded">
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
        }}
        modules={[Navigation]}
        className="relative w-full h-full"
      >
        {data?.map((slide, index) => (
            <SwiperSlide
                key={index}
                className="transition duration-200 ease-in-out transform hover:scale-105"
            >
                <div className="mx-auto bg-slate-50 shadow-lg rounded-lg p-6 border border-gray-200 h-[300px] overflow-hidden">
                    {/* Testimonial Quote */}
                    <div className="relative mb-4 text-gray-600">
                        <span className="absolute top-0 left-0 text-purple-500 text-7xl font-roboto font-medium leading-none -translate-y-2">“</span>
                        <p className="px-5 text-sm sm:text-base text-center line-clamp-4">{slide?.testimonial}</p>
                        <span className="absolute bottom-0 right-0 text-purple-500 text-7xl font-roboto font-medium leading-none translate-y-12">”</span>
                    </div>

                    {/* User Information */}
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <img
                            src={slide?.image}
                            alt={slide?.name}
                            className="w-[65px] h-[65px] object-cover rounded-full border-2 border-purple-500"
                        />
                        {/* Rating */}
                        <div className="flex items-center">
                            {[...Array(slide?.rating)].map((_, i) => (
                                <span key={i} className="text-[#FFD230] text-xl">★</span>
                            ))}
                            {[...Array(5 - slide?.rating)].map((_, i) => (
                                <span key={i} className="text-gray-300 text-xl">★</span>
                            ))}
                        </div>
                        <div className={"text-center"}>
                            <h3 className="text-lg font-bold">{slide?.name}</h3>
                            <p className="text-sm text-gray-500">{slide?.role}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;