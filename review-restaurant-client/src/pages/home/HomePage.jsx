import React from 'react';
import './HomePage.scss'
import '../../assets/css/style.css';
import '../../assets/js/scripts';

import Header from '../../components/main/Header/Header';
import MobileMenu from '../../components/main/MobileMenu';
import SearchUsers from '../../components/search-user/SearchUsers';

import { TypeAnimation } from 'react-type-animation';
import Category from '../../components/main/Category/Category';
import Near from '../../components/main/Near/Near';
import Footer from "../../components/main/Footer/Footer";

const Home = () => {

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
  // }

  return (
    <div>
      <div className="wrapper">

        <Header />

        <MobileMenu />
        <section className="main-banner">
          <div className="container">
            <div className="banner-text">
              {/* <h2>KHÁM PHÁ</h2> */}
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={['UỐNG GÌ HÔM NAY', 2000, 'ĐI ĐU ĐƯA ĐI', 2000, 'CÙNG NHAU SỐNG ẢO', 2000]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: '50px', color: '#d8ab37', fontWeight: 700 }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
              <SearchUsers />
            </div>
            {/*banner-text end*/}
          </div>
        </section>

        <section className="sec-block pb-0">
          <div className="container">
            <div className="section-title text-center">
              {/* <span>Nổi Bật </span> */}
              <h2 className="text-capitalize" >Mục đích bạn là gì ?</h2>
              <div className='line'></div>
            </div>
            <Category />

          </div>
        </section>

        <section className="sec-block pb-0 mt-5 margin-footer">
          <div className="container">
            <div className="section-title text-center">
              {/* <span>Nổi Bật </span> */}
              <h2 className="text-capitalize">Địa điểm gần đây ?</h2>
              <div className='line'></div>
            </div>
            <Near />

          </div>
        </section>

        <Footer />

      </div>
    </div>
  );
};

export default Home;
