
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

import { Controller, FreeMode, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


import React, { useState } from 'react';

function Library({ artists, acols }) {
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const fetchAlbums = async (ArtistId) => {
        const res = await fetch(`api/albums/${ArtistId}`);
        const data = await res.json();
        setAlbums(data);
        console.log(albums);
    }

    const fetchTracks = async (AlbumId) => {
        const res = await fetch(`api/tracks/${AlbumId}`);
        const data = await res.json();
        setTracks(data);
    }


    function sendId(id) {
        console.log(id)
    }

    const columns = [
        { field: acols[0], headerName: 'Name' },
        { field: acols[1], headerName: 'Total Tracks In Library' }
    ]
    return (
        <>
            <div className="bg-white text-black">
                <div className="p-10">
                    <h1 className="font-roboto text-5xl"> Welcome To Our Library!</h1>
                </div>
                <div className="p-10 font-montserrat">
                    Below is a quick look around about tracks, albums and artists.
                </div>

                <div className="p-10 h-60">
                    <Swiper
                        effect={'coverflow'}
                        direction={'vertical'}
                        mousewheel={true}
                        freeMode={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        spaceBetween={1}
                        slidesPerView={3}
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                        modules={[Controller, FreeMode, Mousewheel, Autoplay]}
                        onSlideChange={(swiper) => fetchAlbums(swiper.activeIndex)}
                    >
                        {artists.map((artist, index) => (
                            <SwiperSlide >
                                <div className=" font-bebas text-4xl text-center" id={index}>
                                    {artist.Name}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                <div className="p-10">
                    <div className="grid grid-cols-3 grid-rows-2 auto-cols-max auto-rows-max size-auto">
                        <div className=" w-100 h-100">
                            <Swiper
                                effect={'coverflow'}
                                direction={'vertical'}
                                mousewheel={true}
                                freeMode={true}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                                centeredSlides={true}
                                spaceBetween={1}
                                slidesPerView={3}
                                modules={[FreeMode, Mousewheel, Autoplay]}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={(swiper) => fetchTracks(swiper.activeIndex)}
                            >
                                {albums.map((album, index) => (
                                    <SwiperSlide>
                                        <div className=" font-bebas text-4xl text-center">
                                            {!album ? "No Albums" : album.Title}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="w-auto h-100 col-span-2">
                            <Swiper
                                effect={'coverflow'}
                                direction={'vertical'}
                                mousewheel={true}
                                freeMode={true}
                                centeredSlides={true}
                                spaceBetween={1}
                                slidesPerView={3}
                                onSwiper={setSecondSwiper}
                                controller={{ control: firstSwiper }}
                                modules={[Controller, FreeMode, Mousewheel, Autoplay]}
                            >
                                {artists.map((artists, index) => (
                                    <SwiperSlide >
                                        <div className=" font-bebas text-4xl text-center" id={index}>
                                            Insert Album Photo of {artists.Name}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="w-auto h-100 col-span-3 justify-center items-center">
                            <Swiper
                                effect={'coverflow'}
                                direction={'vertical'}
                                mousewheel={true}
                                freeMode={true}
                                centeredSlides={true}
                                spaceBetween={1}
                                slidesPerView={3}
                                onSwiper={setSecondSwiper}
                                controller={{ control: firstSwiper }}
                                modules={[Controller, FreeMode, Mousewheel, Autoplay]}
                            >
                                {artists.map((artists, index) => (
                                    <SwiperSlide >
                                        <div className=" font-bebas text-4xl text-center" id={index}>
                                            Insert Album Photo of {artists.Name}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Library.layout = page => (
    <>
        <Navbar />
        {page}
        <Footer />
    </>
);

export default Library;