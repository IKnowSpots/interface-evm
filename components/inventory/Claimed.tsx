import { updateWhitelist } from "@/utils";
import React, { useState } from "react";
import Claimedcard from "@/components/cardsClaimedRewards"
import { Swiper,SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

export default function Claimed(tokenId: any) {

    return (
        <div className="container flex justify-center items-center pb-10">
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
                    clickable: true,
                  }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <Claimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Claimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Claimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Claimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Claimedcard/>
                </SwiperSlide>
                <SwiperSlide>
                    <Claimedcard/>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        
                        {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}
