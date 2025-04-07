// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "./Home.css";

// // Import your images
// import img1 from "../../assets/myhome.jpg";
// import page1 from "../../assets/page 1.png";
// import infoImg from "../../assets/myhome.jpg";

// const Home = () => {
//   return (
//     <div className="home-container" style={{ backgroundImage: `url(${page1})` }}>
//       {/* Left Side Content */}
//       <div className="text-content">
//         <h1>Welcome to Our Platform</h1>
//         <p>
//           Discover the best solutions for your needs. Explore a variety of features designed to enhance your experience.
//         </p>

//         <div className="info-box">
//           <img src={infoImg} alt="Info" className="info-image" />
//           <div className="info-text">
//             <h3>Why Choose Us?</h3>
//             <p>
//               We provide top-notch services with the latest innovations in the industry. 
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Swiper with Overlay Links */}
//       <div className="slider-container">
//         {/* Overlay Navigation Links */}
//         <ul className="slider-links">
//           <li><a href="#house">House</a></li>
//           <li><a href="#mall">Mall</a></li>
//           <li><a href="#bangalow">Bangalow</a></li>
//           <li><a href="#apartment">Apartment</a></li>
//         </ul><br/><br/>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           loop={true}
//           className="mySwiper"
//         >
//           {/* <SwiperSlide><img src={img1} alt="Slide 1" /> */}
//             <div className="overlay-box">
//                 <h1>24+</h1>
//             </div>
//           {/* </SwiperSlide> */}
//           {/* <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
//           <SwiperSlide><img src={img3} alt="Slide 3" /></SwiperSlide>
//           <SwiperSlide><img src={img4} alt="Slide 4" /></SwiperSlide> */}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Home.css";

// Import images
import img1 from "../../assets/myhome.jpg";
import page1 from "../../assets/page 1.png"; // Ensure no spaces in filename
import infoImg from "../../assets/myhome.jpg";

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${page1})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Left Side Content */}
      <div className="text-content">
        <h1>Welcome to Our Platform</h1>
        <p>
          Discover the best solutions for your needs. Explore a variety of features designed to enhance your experience.
        </p>

        <div className="info-box">
          <img src={infoImg} alt="Info" className="info-image" />
          <div className="info-text">
            <h3>Why Choose Us?</h3>
            <p>
              We provide top-notch services with the latest innovations in the industry. 
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Swiper with Overlay Links */}
      <div className="slider-container">
        {/* Overlay Navigation Links */}
        <ul className="slider-links">
          <li><a href="#house">House</a></li>
          <li><a href="#mall">Mall</a></li>
          <li><a href="#bangalow">Bangalow</a></li>
          <li><a href="#apartment">Apartment</a></li>
        </ul>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            
            <div className="overlay-box">
              <h1>24+</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
