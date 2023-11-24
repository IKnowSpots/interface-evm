import { updateWhitelist } from "@/utils";
import React, { useState } from "react";
import Image from "next/image";
import Unclaimedcard from "@/components/cardsUnclaimedRewards"
import { Swiper,SwiperSlide } from "swiper/react";
import { fetchUnclaimedRewardsThroughUsername } from "@/utils"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

export default function Unclaimed() {

    return (
        <div className="flex justify-center items-center pb-10 mx-20">
            <Swiper
                effect={'coverflow'}
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={ 3 } 
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    // clickable: true,
                  }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <Unclaimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Unclaimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Unclaimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Unclaimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Unclaimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Unclaimedcard/>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <Image
                            src={"/icons/back-btn.svg"}
                            width={45}
                            height={20}
                            alt="back-btn"
                            className="back-btn"
                        />
                        {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <Image
                            src={"/icons/back-btn.svg"}
                            width={45}
                            height={20}
                            alt="back-btn"
                            className="back-btn rotate-180"
                        />
                        {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                    </div>
                    {/* <div className="swiper-pagination"></div> */}
                </div>
            </Swiper>
        </div>
    );
}
