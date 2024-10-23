import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardHome } from "~/components/Card";
import type { DataProps } from "~/models";

export default function SwiperHome({ data, type }: DataProps) {
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={8}
      className="customSwiper"
      modules={[Navigation]}
      navigation
      breakpoints={{
        290: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="cursor-pointer">
          <CardHome data={item} type={type} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
