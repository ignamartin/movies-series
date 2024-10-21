import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardHome } from "~/components/Card";
import type { DataProps } from "~/models";

export default function SwiperHome({ data }: DataProps) {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    console.log(id);
    // navigate(`/categorias/${id}`);
    navigate(`/description/`);
  };

  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={8}
      className="customSwiper"
      modules={[Navigation]}
      navigation
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className="cursor-pointer"
          onClick={() => handleClick(item.id)}
        >
          <CardHome data={item}  />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
