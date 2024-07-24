import React , {useEffect} from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import service2 from "../assets/image/services2.jpg";
import service1 from "../assets/image/services1.jpg";
// import required modules

const Services = () => {
 
  return (
    <>
      <div className="mx-4 mb-28 sm:mx-16 sm:mb-20">
        <div className="flex flex-col sm:flex-row mb-10" data-aos="zoom-in">
          <div className="w-full me-0 mb-6 sm:mb-0 sm:w-[2500px] sm:me-10">
            <h1 className="text-3xl text-center sm:text-left sm:text-5xl font-semibold">
              Provide the best service with out of the box ideas
            </h1>
          </div>
          <div className={"me-0 text-center sm:text-left sm:me-10"}>
            <h1 className=" text-lg text-gray-500 ">
              {" "}
              we are a passionate team of digital marketing enthusiasm dedicated
              to helping business succeed in the digital world world . with
              years of experience and a deep understanding of the ever- evolving
              online landscape, we stay at the forefront of industry trend and
              technologies.
            </h1>
          </div>
        </div>
        <div className={"flex flex-col sm:flex-row sm:justify-between sm:me-10"}>
          <div className={"w-full sm:w-[35%] sm:h-[350px] mb-4 sm:mb-0 rounded-3xl bg-black p-10"}>
            <div className="">
              <h1 className="text-8xl font-bold text-left text-white">
                <CountUp end={109} duration={5} />{" "}
                <span className={"text-green-500"}>+</span>
              </h1>
            </div>
            <h1 className={"text-2xl text-gray-400 font-semibold mt-3"}>
              Project finish with superbly{" "}
            </h1>
            <div className={"flex mt-20 align-center items-center"}>
              <div className="avatar ring-warning ring-offset-base-50 rounded-full ring ring-offset-0 ">
                <div className="w-16 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt={"test"}
                  />
                </div>
              </div>
              <div className="avatar ring-warning ring-offset-base-100 rounded-full ring ring-offset-0 ">
                <div className="w-16 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt={"test"}
                  />
                </div>
              </div>
              <div className="avatar ring-warning ring-offset-base-100 rounded-full ring ring-offset-0 ">
                <div className="w-16 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt={"test"}
                  />
                </div>
              </div>
              <div className="avatar ring-warning ring-offset-base-100 rounded-full ring ring-offset-0 ">
                <div className="w-16 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt={"test"}
                  />
                </div>
              </div>
              <div class="avatar me-2  placeholder">
                <div class=" text-neutral-content w-16 rounded-full">
                  <span class="text-8xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <div className={"w-full sm:w-[60%]  h-[350px] rounded-3xl bg-gray-50 "}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="relative">
                <img
                  src={service1}
                  alt="this copy ima"
                  style={{ filter: " brightness(0.5)" }}
                  className="rounded-3xl"
                />
                <span className="absolute top-[38%] text-7xl right-40 font-semibold text-white placeholder:">
                  HOW WE WORK
                </span>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src={service2}
                  alt="this copy ima"
                  style={{ filter: " brightness(0.5)" }}
                  className="rounded-3xl"
                />
                <span className="absolute top-[38%] text-7xl right-40 font-semibold text-white placeholder:">
                  TEAM WE WORK
                </span>
              </SwiperSlide>
              <button className="size-16 bg-yellow-300 rounded-full grid absolute bottom-3 right-3 overflow-visible z-10 ring-white ring-offset-base-100 ring ring-offset-1">
                <i class="bi bi-play-fill m-auto text-5xl"></i>
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
