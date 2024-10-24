import React from "react";
const Hero = () => {
    return (
        <div className="relative w-[100%] h-[88vh]">
            <div className="absolute top-0 left-0 w-[100%] h-[100%]"></div>
            <video
                src="/images/hero.mp4"
                autoPlay
                muted
                loop
                preload="metadata"
                className="w-[100%] h-[100%] object-cover"
            />
            <div className="absolute z-[100] w-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex items-center justify-center flex-col w-[100%] h-[100%]">
                    <div data-aos="fade-right">
                        <h1 className="text-[25px] mb-[1rem] md:mb-[0] text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">
                            Khám phá giới hạn, chinh phục thiên nhiên
                        </h1>
                        <p className="md:text-[16px] text-center text-[18px] text-white font-normal [word-spacing:5px]">Bắt đầu cuộc hành trình của bạn</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
