import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/ratan.jpeg";
import profilePic2 from "../../img/schoole.jpg";
import profilePic3 from "../../img/puc.jpg";
import profilePic4 from "../../img/sgp.jfif";
import profilePic5 from '../../img/nareshIt.jpg'


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      Review:function(){
        return(
          <>
          <span>About me!</span>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Name : </strong> <span> Ratan Kote</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Father : </strong> <span> Parameshwar Kote </span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Mother : </strong> <span> Premla Kote</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Religion : </strong> Hindu<span></span></li>
                
                  <li><i className="bi bi-chevron-right"></i> <strong>Gender : </strong> Male <span></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Marital Status : </strong> <span>Unmarried</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Languages Known : </strong> <span> English , Marathi , Kannada , Hindi &amp; Telugu </span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Address : </strong> <span>Chandori 585443 , Bidar district Karnatka</span></li>
                </ul>
          </>
        )
      },
    },
    {
      img: profilePic2,
      Review:function(){
        return(
          <>
          <span>SSLC</span>
          <ul style={{margin:'0'}}>
                  <li> <strong>Schoole : </strong> <span> Junior HighSchool , ThanaKushnoor</span></li>
                  <li> <strong>Board : </strong> <span> Karnataka Secondary EducationExamination Board ,Bangalore </span></li>
                  <li><strong>Passing Year : </strong> <span> 2015</span></li>
                  <li> <strong>Percentage: </strong>64.48%<span></span></li>
                </ul>
          </>
        )
      },
    },
    {
      img: profilePic3,
      Review:function(){
        return(
          <>
           <span>PUC Science</span>
          <ul>
                  <li> <strong>College : </strong> <span>Satyaniketan Pu College Bhalki</span></li>
                  <li> <strong>Board : </strong> <span> Department of Pre University </span></li>
                  <li><strong>Passing Year : </strong> <span> 2017</span></li>
                  <li> <strong>Percentage: </strong>61.48%<span></span></li>
                </ul>
          </>
        )
      },
    },
    {
      img: profilePic4,
      Review:function(){
        return(
          <>
           <span>Graduate Bsc Computer Science</span>
          <ul>
                  <li> <strong>College : </strong> <span>SGPDCB-Shree Guru Prasanna Degree College Bhalki</span></li>
                  <li> <strong>University : </strong> <span> Gulbarga University </span></li>
                  <li><strong>Passing Year : </strong> <span> 2020</span></li>
                  <li> <strong>Percentage: </strong>66.48%<span></span></li>
                </ul>
          </>
        )
      },
    },
    {
      img: profilePic5,
      Review:function(){
        return(
          <>
          <h1>Course <span>UI Developer</span></h1>
          <ul>
                  <li> <strong>Institute : </strong> <span>Naresh It in Hyderabad</span></li>
                  <li><strong>Technologies : </strong> <span>HTML , CSS , JAVASCRIPT , BOOTSTRAP ,  AND  REACT</span></li>
                </ul>
          </>
        )
      },
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span> My Persnole</span>
        <span>Details </span>
        <span>For you...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,

        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.Review()}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
// // ================

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
