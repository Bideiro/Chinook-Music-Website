import Navbar from "../Layouts/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
    return (
        <>
            <h1 className="title text-2xl">Welcome to our library</h1>

            {/* Cover Flow */}
            <div className="w-full max-w-3xl mx-auto h-80 py-8">
                <Swiper
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={0}
                    coverflowEffect={{
                        rotate: 35,
                        stretch: 0,
                        depth: 250,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/images/1.jpg" className="w-full rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/2.jpg" className="w-full rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/3.jpg" className="w-full rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/3.jpg" className="w-full rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/3.jpg" className="w-full rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/3.jpg" className="w-full rounded-xl" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/3.jpg" className="w-full rounded-xl" />
                    </SwiperSlide>
                </Swiper>
            </div>


        </>
    );
};


Home.layout = page => <Navbar children={page} />

export default Home;


