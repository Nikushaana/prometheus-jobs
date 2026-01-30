"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PartnersSlider() {
  const [slideToDisplay, setSlidesToDisplay] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1380) setSlidesToDisplay(7);
      else if (width >= 1000) setSlidesToDisplay(5);
      else if (width >= 740) setSlidesToDisplay(4);
      else if (width >= 640) setSlidesToDisplay(3);
      else setSlidesToDisplay(2);
    };
 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const partners = [
    {
      id: 1,
      logo: "/images/amazon.png",
    },
    {
      id: 2,
      logo: "/images/airbnb.png",
    },
    {
      id: 3,
      logo: "/images/slack.png",
    },
    {
      id: 4,
      logo: "/images/paypal.png",
    },
    {
      id: 5,
      logo: "/images/spotify.png",
    },
    {
      id: 6,
      logo: "/images/invision.png",
    },
    {
      id: 7,
      logo: "/images/figma.png",
    },
    {
      id: 8,
      logo: "/images/amazon.png",
    },
    {
      id: 9,
      logo: "/images/airbnb.png",
    },
    {
      id: 10,
      logo: "/images/slack.png",
    },
    {
      id: 11,
      logo: "/images/paypal.png",
    },
    {
      id: 12,
      logo: "/images/spotify.png",
    },
    {
      id: 13,
      logo: "/images/invision.png",
    },
    {
      id: 14,
      logo: "/images/figma.png",
    },
  ];

  return (
    <div className="flex flex-col gap-7.5 items-center mt-25">
      <h1 className="text-[#010125] w-full text-center text-[32px] duration-200 max-md:text-2xl max-sm:text-xl">
        პარტნიორი კომპანიები
      </h1>
      <div className="w-full pointer-events-none">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={slideToDisplay}
          spaceBetween={30}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 0,
          }}
        >
          {partners.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full h-25 rounded-lg flex items-center justify-center ">
                <div className="w-25 h-full relative">
                  <img
                    src={item.logo}
                    alt=""
                    className="w-full h-full object-contain p-3.75"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
