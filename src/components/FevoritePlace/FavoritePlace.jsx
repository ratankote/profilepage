
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import './FevoritePlace.css'
  import ayodhy from '../../img/ayodhya1.jpg'
import kedarnath from "../../img/kedarnath.jfif";
import kashi from "../../img/Kashi1.jfif";
import tirupati from "../../img/tirupati.jfif";
import pandrpur from "../../img/pandpur.jfif";

// import required modules
import { EffectCards } from "swiper";

export default function FevoritePlace() {
  return (
    <>
     <div className="t-heading">
        <span> My Fevorite</span>
        <span>Places </span>
        <span> i love it</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div></div>
      <div style={{margin:'20px'}}>Ayodhya, Kedarnath ,KashiVishvnath , Pandharpur , Tirupati</div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={ayodhy} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={kedarnath} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={kashi} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={tirupati} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={pandrpur} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={pandrpur} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={kashi} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={kedarnath} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={ayodhy} alt='loding'/></SwiperSlide>
      </Swiper>
    </>
  );
}
