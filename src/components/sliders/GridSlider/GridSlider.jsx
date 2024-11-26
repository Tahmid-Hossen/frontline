import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Grid, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

// eslint-disable-next-line react/prop-types
const GridSlider = ({data}) => {
  return (
    <div className="container relative">
      {/* Navigation buttons */}
      <div
        className="!w-10 md:!w-14 !h-10 md:!h-14 !bg-[#E8E8E8] !rounded-full after:!text-2xl after:!font-semibold !-left-2 md:!-left-6 swiper-button-prev"/>
      <div
        className="!w-10 md:!w-14 !h-10 md:!h-14 !bg-[#E8E8E8] !rounded-full after:!text-2xl after:!font-semibold !-right-2 md:!-right-6 swiper-button-next"/>
      <Swiper
        grid={{
          rows: 2, // Set up 2 rows in the grid
          fill: 'row'
        }}
        spaceBetween={24} // Space between each slide
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: { // Mobile devices
            slidesPerView: 1, // Show 1 slide per view
            grid: {
              rows: 1, // 1 row on mobile
              fill: 'row'
            },
          },
          640: { // Tablets
            slidesPerView: 2, // Show 2 slides per view
            grid: {
              rows: 1, // 1 row on tablets
              fill: 'row'
            },
          },
          1024: { // Small desktops
            slidesPerView: 2, // Show 2 slides per view
            grid: {
              rows: 2, // 2 rows on small desktops
              fill: 'row'
            },
          },
          1280: { // Large desktops
            slidesPerView: 3, // Show 3 slides per view
            grid: {
              rows: 2, // 2 rows on large desktops
              fill: 'row'
            },
          },
        }}
        modules={[Grid, Navigation]}
        className="relative w-full h-full !py-0"
      >
        {data?.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="text-center flex justify-center items-center gap-2 rounded-lg"
          >
            <img
              width={367}
              height={254}
              src={slide.image ?? "/images/culture/culture_2.png"}
              alt={slide.title}
              className="h-[254px] w-[367px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GridSlider;
