import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Grid, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

// eslint-disable-next-line react/prop-types
const GridSliderPartnerShip = ({data}) => {
  return (
      <div className="container relative">
          {/* Navigation buttons */}
          <div
              className="!w-10 md:!w-14 !h-10 md:!h-14 !bg-[#E8E8E8] !rounded-full after:!text-2xl after:!font-semibold !-left-5 md:!-left-12 swiper-button-prev animate-pulse"/>
          <div
              className="!w-10 md:!w-14 !h-10 md:!h-14 !bg-[#E8E8E8] !rounded-full after:!text-2xl after:!font-semibold !-right-5 md:!-right-12 swiper-button-next animate-pulse"/>

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
                      <div
                          className="bg-slate-50 border border-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center"
                      >
                          <div className="w-full flex justify-start items-center gap-4">
                              <img
                                  src={slide?.profilePicture}
                                  alt={slide?.name}
                                  className="w-[65px] h-[65px] object-cover rounded-full"
                              />

                              <div className="flex flex-col items-start justify-start text-left">
                                  <h3 className="text-xl font-medium">{slide?.name}</h3>
                                  <span className="text-[#FFD230] text-2xl">★★★★★</span>
                              </div>
                          </div>
                          <div className="mt-4 text-sm leading-[16px] text-left w-full space-y-4">
                              <p className="mb-2">
                                  <span className="font-medium text-main">Platform:</span>{" "}
                                  {slide?.platform}
                              </p>
                              <p className="mb-2">
                                  <span className="font-medium text-main">Follower Count:</span>{" "}
                                  {slide?.followerCount}
                              </p>
                              <p className="mb-2">
                                  <span className="font-medium text-main">Content Niche:</span>{" "}
                                  {slide?.contentNiche}
                              </p>
                              <p className="mb-2">
                                  <span className="font-medium text-main">Type of Collaboration:</span>{" "}
                                  {slide?.typeOfCollaboration}
                              </p>
                              <div className="mb-4">
                                  <strong className="block font-medium text-main">
                                      Previous Campaigns:
                                  </strong>
                                  <ul className="list-disc list-inside">
                                      {slide?.previousCampaigns.map((campaign, i) => (
                                          <li key={i}>{campaign}</li>
                                      ))}
                                  </ul>
                              </div>
                              <div>
                                  <strong className="block font-medium text-main">
                                      Types of Service we offer:
                                  </strong>
                                  <ul className="list-disc list-inside">
                                      {slide?.services.map((service, i) => (
                                          <li key={i}>{service}</li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>
  );
};

export default GridSliderPartnerShip;
