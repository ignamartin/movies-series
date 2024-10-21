// import { useNavigate } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardHome } from "~/components/Card";
import type { DataProps } from "~/models";

export default function SwiperHome({ data }: DataProps) {
  // const navigate = useNavigate();

  // const handleClick = (slug: string) => {
  //   navigate(`/categorias/${slug}`);
  // };

  return (
    <Swiper spaceBetween={12} slidesPerView={8} className="customSwiper">
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <CardHome
            data={item}
            // onClick={() => handleClick(item.Category.slug)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
