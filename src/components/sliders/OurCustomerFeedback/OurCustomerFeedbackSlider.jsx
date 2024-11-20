"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './OurCustomerFeedbackSlide.css';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ChevronRight,Play } from 'lucide-react';
import Image from "next/image";
import PulsatingButton from "@/components/magicui/pulsating-button";

const feedbackData = [
    { id: 1, name: 'Nature 1', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 2, name: 'Nature 2', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 3, name: 'Nature 3', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 4, name: 'Nature 4', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 5, name: 'Nature 5', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 6, name: 'Nature 6', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 7, name: 'Nature 7', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 8, name: 'Nature 8', imgUrl: '/images/clients-feedback/feedback-img.png' },
    { id: 9, name: 'Nature 9', imgUrl: '/images/clients-feedback/feedback-img.png' },
];

const OurCustomerFeedbackSlider = ({
                                       pulseColor = "#0096ff",
                                       duration = "1.5s",
                                   }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className='relative'>
            {/* Navigation buttons */}
            <div className="!-left-3 md:!-left-16 !top-[56%] md:!top-[50%] hover:bg-blue-100 rounded swiper-button-prev"></div>
            <div className="!-right-3 md:!-right-16 !top-[56%] md:!top-[50%] hover:bg-blue-100 rounded swiper-button-next"></div>
            <div className='container mx-auto'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 50,
                        depth: 300,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    onSlideChange={handleSlideChange}
                    modules={[EffectCoverflow, Navigation]}
                    className="container mx-auto"
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            effect: 'slide', // fallback to slide effect for smaller screens
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            effect: 'coverflow', // coverflow effect for larger screens
                            coverflowEffect: {
                                rotate: 30,
                                stretch: 50,
                                depth: 300,
                                modifier: 1,
                                slideShadows: true,
                            },
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: "auto",
                            spaceBetween: 30,
                            effect: 'coverflow',
                            coverflowEffect: {
                                rotate: 30,
                                stretch: 50,
                                depth: 300,
                                modifier: 1,
                                slideShadows: true,
                            },
                        },
                    }}
                >
                    {feedbackData.map((item, index) => (
                        <SwiperSlide key={item.id} className="relative slide-item">
                            {/* SVG Play Icon */}
                                {activeIndex === index ? (
                                    <div
                                        className="relative cursor-pointer group overflow-hidden"
                                        onClick={() => setIsVideoOpen(true)}>
                                        <Image
                                            src={item.imgUrl}
                                            alt={item.name}
                                            width={400}
                                            height={360}
                                            className="w-full h-full !aspect-video !object-cover transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md shadow-lg border" />
                                        <div
                                            className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
                                            <div
                                                className="bg-primary/10 flex items-center justify-center rounded-full">
                                                <div
                                                    style={{
                                                        "--pulse-color": pulseColor,
                                                        "--duration": duration
                                                    }}
                                                    className={`flex items-center justify-center bg-gradient-default  shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.1] scale-100`}>
                                                    <Play
                                                        className="size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                                                        style={{
                                                            filter:
                                                                "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                                                        }}/>
                                                    <div className="absolute top-1/2 left-1/2 size-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (<Image width={582} height={460} src={item.imgUrl} alt={item.name} className="w-full h-full !aspect-video !object-cover"/>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {isVideoOpen && (
                <HeroVideoDialog
                    isVideoOpen={isVideoOpen}
                    setIsVideoOpen={setIsVideoOpen}
                    className="aspect-video"
                    animationStyle="top-in-bottom-out"
                    videoSrc="https://www.youtube.com/embed/Jw7s42Op2ao?si=PpIN26NDgdJDS-QK"
                />
            )}
        </div>
    );
};

export default OurCustomerFeedbackSlider;
