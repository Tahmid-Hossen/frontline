import 'swiper/css/autoplay';
import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {useRef} from "react";

const clients = [
  {
    id: 1,
    title: "Banglalink",
    description: "",
    icon: "banglalink.svg",
  },
  {
    id: 2,
    title: "Grameenphone",
    description: "",
    icon: "grameenphone.svg",
  },
  {
    id: 3,
    title: "Robi",
    description: "",
    icon: "robi.svg",
  },
  {
    id: 4,
    title: "Bosundhara",
    description: "",
    icon: "bosundhara.svg",
  },
  {
    id: 5,
    title: "Walton",
    description: "",
    icon: "walton.svg",
  },


];

const OurValuedClients = () => {
  const swiperRef = useRef(null);
  return (
    <section className="section clients relative py-6 md:py-12">
      <div className="">
        <div className="container row justify-between text-center lg:text-start">
          <div className="partner text-center mx-auto space-y-4 text-dark">
            <div className="heading1 text-center">
              Our Valued <span className="text-gradiant">Clients</span>
            </div>
            <p className="text-center description">
              Hear what our satisfied clients have to say about their{" "}
              <strong className="text-primary">Nexdecade</strong> experience.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12" ref={swiperRef}>
            <Swiper
              loop={true}
              spaceBetween={20}
              autoplay={true}
              grabCursor={true}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
              className="clients-carousel !py-6"
            >
              <div className="swiper-wrapper" id="clients-container">
                {clients.map((client) => (
                  <SwiperSlide key={client.id} className="swiper-slide cursor-grab">
                    <img
                      width={580}
                      height={400}
                      className="mx-auto w-full h-20"
                      src={`/images/icons/${client.icon}`}
                      alt={`${client.title ?? "client"} icon`}
                    />
                  </SwiperSlide>
                ))}
              </div>
              <div className="swiper-pagination clients-carousel-pagination !-bottom-1 z-[50]"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuedClients;
