import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { IoWatchOutline } from "react-icons/io5";



export function NextArrow({ onClick }) {
  return (
    <div
      className={`slick-arrow cursor-pointer hover:bg-stone-200 absolute top-[107%] right-[33%]  md:top-[-33px] md:right-[-40%] xl:right-[-49%] p-1.5 flex items-center justify-center rounded-full bg-stone-100 border`}
      onClick={onClick}
    >
     <GrFormNext />
    </div>
  );
}

export function PrevArrow({ onClick }) {
  return (
    <div
      className={`slick-arrow cursor-pointer hover:bg-stone-200 absolute top-[107%] right-[52%] md:top-[-33px] md:right-[-31.5%] xl:right-[-44%] p-1.5 flex items-center justify-center rounded-full bg-stone-100 border`}
      onClick={onClick}
    >
     <GrFormPrevious />
    </div>
  );
}



export default function CatCarousel({List}) {
  var settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

  return (
    <div className="w-1/2 mx-auto pb-5 md:pb-0">
      <Slider {...settings} className="pt-5">
      <div>
        <div className="relative left-1/2 translate-x-[-50%] flex flex-col items-center justify-center gap-2 w-36 h-32 border ">
          <span className="text-3xl"><HiMiniDevicePhoneMobile /></span>
          <span className="text-sm">Phones</span>
        </div>
      </div>
      <div>
        <div className="relative left-1/2 translate-x-[-50%] flex flex-col items-center justify-center gap-2 w-36 h-32 border">
          <span className="text-3xl"><RiComputerLine /></span>
          <span className="text-sm">Computers</span>
        </div>
      </div>
      <div>
        <div className="relative left-1/2 translate-x-[-50%] flex flex-col items-center justify-center gap-2 w-36 h-32 border">
          <span className="text-3xl"><IoCameraOutline /></span>
          <span className="text-sm">Camera</span>
        </div>
      </div>
      <div>
        <div className="relative left-1/2 translate-x-[-50%] flex flex-col items-center justify-center gap-2 w-36 h-32 border">
          <span className="text-3xl"><CiHeadphones /></span>
          <span className="text-sm">HeadPhones</span>
        </div>
      </div>
      <div>
        <div className="relative left-1/2 translate-x-[-50%] flex flex-col items-center justify-center gap-2 w-36 h-32 border">
          <span className="text-3xl"><SiYoutubegaming /></span>
          <span className="text-sm">Gaming</span>
        </div>
      </div>
      <div>
        <div className="relative left-1/2 translate-x-[-50%] flex flex-col items-center justify-center gap-2 w-36 h-32 border">
          <span className="text-3xl"><IoWatchOutline /></span>
          <span className="text-sm">Smart Watches</span>
        </div>
      </div>
      </Slider>
    </div>

  );
}