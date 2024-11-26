import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {MoveLeft, MoveRight} from 'lucide-react';

// eslint-disable-next-line react/prop-types
const TestimonialSlider = ({data}) => {
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
        {data?.map((slide, index) => (
            <SwiperSlide
                key={index}
                className="flex flex-col justify-between rounded-lg bg-white py-[22px] px-[18.5px] shadow-lg hover:cursor-grab hover:shadow-xl text-black my-3"
            >
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                    {/* Testimonial Quote */}
                    <div className="relative mb-4 text-gray-600">
                        <span className="absolute top-0 left-0 text-purple-500 text-4xl -translate-y-2">“</span>
                        <p className="pl-8 text-sm sm:text-base">{slide?.testimonial}</p>
                    </div>

                    {/* User Information */}
                    <div className="flex items-center space-x-4 mt-4">
                        <img
                            src={slide?.image}
                            alt={slide?.name}
                            className="w-14 h-14 rounded-full border-2 border-purple-500"
                        />
                        <div>
                            <h3 className="text-lg font-bold">{slide?.name}</h3>
                            <p className="text-sm text-gray-500">{slide?.role}</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mt-4">
                        {[...Array(slide?.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                        {[...Array(5 - slide?.rating)].map((_, i) => (
                            <span key={i} className="text-gray-300 text-xl">★</span>
                        ))}
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;