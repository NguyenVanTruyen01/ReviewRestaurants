import React from 'react';
// import '../../assets/css/all.min.css';
// import '../../assets/css/animate.min.css';
// import '../../assets/js/lib/slick/slick.css';
// import '../../assets/js/lib/slick/slick-theme.css';
// import '../../assets/css/flaticon.css';
import '../../assets/css/style.css';
// import '../../assets/css/responsive.css';

import '../../assets/js/scripts';

import Header from '../../components/main/Header';
import MobileMenu from '../../components/main/MobileMenu';
import SearchUsers from '../../components/search-user/SearchUsers';

import { TypeAnimation } from 'react-type-animation';
import Category from '../../components/main/Category';

const Home = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
  }

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
                sequence={['ĐI ĐU ĐƯA ĐI', 2000, 'CÙNG NHAU SỐNG ẢO', 2000]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: '70px', color: '#d8ab37', fontWeight: 700 }}
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
              <h2 className="text-capitalize">Mục đích bạn là gì ?</h2>
            </div>
            <Category />

          </div>
        </section>

        <section className="sec-block">
          <div className="container">
            <div className="section-title text-center">
              <span>The reason why </span>
              <h2 className="text-capitalize">why people choose us</h2>
              <p className="mx-auto">We have many advantages but we will highlight only some of them, look below.</p>
            </div>
            {/*sec-title end*/}
            <div className="our-proptz text-center">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="proptz">
                    <div className="propt-icon">
                      <img src="assets/images/icons/discount.svg" alt="" />
                    </div>
                    <h3 className="semi-bold text-capitalize">discount system</h3>
                    <p>We have a favorable discount system for our regular customers.</p>
                  </div>
                  {/*proptz end*/}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="proptz">
                    <div className="propt-icon">
                      <img src="assets/images/icons/delivery.svg" alt="" />
                    </div>
                    <h3 className="semi-bold text-capitalize">Express Delivery</h3>
                    <p>The hottest food &amp; fastest delivery to any location of your city.</p>
                  </div>
                  {/*proptz end*/}
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="proptz">
                    <div className="propt-icon">
                      <img src="assets/images/icons/food.svg" alt="" />
                    </div>
                    <h3 className="semi-bold text-capitalize">50+ restaurants</h3>
                    <p>Large selection of restaurants and cafes throughout the country.</p>
                  </div>
                  {/*proptz end*/}
                </div>
              </div>
            </div>
            {/*our-proptz end*/}
          </div>
        </section>


        <footer>
          <div className="top-footer">
            <div className="fixed-bg bg3" />
            <div className="phone-div">
              <div className="border-circle">
                <div className="phone-circle">
                  <a href="#" title className="ext-link" />
                  <svg width={40} height={40} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1113 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.9881 11.4891 17.1118 9.32498 15.7084C7.31151 14.4289 5.60443 12.7218 4.32498 10.7084C2.91663 8.53436 2.04019 6.05919 1.76665 3.48336C1.74583 3.25291 1.77321 3.02066 1.84707 2.80138C1.92092 2.5821 2.03963 2.3806 2.19562 2.20971C2.35162 2.03882 2.54149 1.90228 2.75314 1.80879C2.9648 1.7153 3.1936 1.66691 3.42499 1.66669H5.92498C6.32941 1.66271 6.72148 1.80592 7.02812 2.06964C7.33476 2.33335 7.53505 2.69956 7.59165 3.10002C7.69717 3.90008 7.89286 4.68563 8.17498 5.44169C8.2871 5.73996 8.31137 6.06412 8.24491 6.37576C8.17844 6.6874 8.02404 6.97345 7.79998 7.20002L6.74165 8.25836C7.92795 10.3446 9.65536 12.0721 11.7417 13.2584L12.8 12.2C13.0266 11.976 13.3126 11.8216 13.6242 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4084C17.3048 12.4655 17.6745 12.6694 17.9388 12.9813C18.203 13.2932 18.3435 13.6913 18.3333 14.1Z"
                      stroke="#fff"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-6">
                  <div className="widget widget-about">
                    <img src="assets/images/logo.png" alt="" />
                    <h4>Working schedule</h4>
                    <p>
                      Mon - Sat: 9:00 am - 10:00 pm <br /> Sun: 10:00 am - 8:00 pm
                    </p>
                  </div>
                  {/*widget-about end*/}
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="widget widget-contact text-center">
                    <h2>
                      <span>Call us</span> to make an order!
                    </h2>
                    <p>Don’t be shy, we don’t bite :)</p>
                    <strong>+1 654 847 52 25</strong>
                  </div>
                  {/*widget-contact end*/}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="widget widget-payment">
                    <div className="wid-payment">
                      <h4>Payment Options</h4>
                      <img src="assets/images/imgs.png" alt="" />
                    </div>
                    <div className="wid-payment">
                      <h4>Download the app</h4>
                      <ul>
                        <li>
                          <a href="#" title>
                            <img src="assets/images/btn1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title>
                            <img src="assets/images/btn2.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*widget-payment end*/}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="copyright">
                    <p>© All Rights Reserved. DeliTaste 2020</p>
                  </div>
                  {/*copyright end*/}
                </div>
                <div className="col-lg-6">
                  <div className="find-us text-right">
                    <h5>Find us:</h5>
                    <ul className="social-links-text">
                      <li>
                        <a href="#" title>
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" title>
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" title>
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*find-us end*/}
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*footer end*/}
      </div>
      {/*wrapper end*/}
    </div>
  );
};

export default Home;
