import React, { useState, useEffect } from "react";
import Image from "next/image";
import Unclaimedcard from "@/components/cards/cardsUnclaimedRewards";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchUnclaimedRewardsThroughUsername } from "@/utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Unclaimed() {
  const [unclaimedRewardsData, setUnclaimedRewardsData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInventoryData();
  }, []);

  async function fetchInventoryData() {
    setLoading(true);
    const data: any = await fetchUnclaimedRewardsThroughUsername();
    setUnclaimedRewardsData(data);
    setLoading(false);
  }

  return (
    <div className="flex justify-center items-center pb-10 mx-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          {unclaimedRewardsData.map((nft: any, i: any) => {
            <Unclaimedcard image={nft.cover} name={nft.name} />;
          })}
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
          </div>
          <div className="swiper-button-next slider-arrow">
            <Image
              src={"/icons/back-btn.svg"}
              width={45}
              height={20}
              alt="back-btn"
              className="back-btn rotate-180"
            />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
