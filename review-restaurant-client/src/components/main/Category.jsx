import React from 'react';
import Slider from 'react-slick';
import 'keen-slider/keen-slider.min.css';

import './category.css';
// import '../../assets/css/style.css';

const Category = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    // centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src="https://via.placeholder.com/360x400" alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Beer Power
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src="https://via.placeholder.com/360x400" alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Beer Power
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src="https://via.placeholder.com/360x400" alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Beer Power
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src="https://via.placeholder.com/360x400" alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Beer Power
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src="https://via.placeholder.com/360x400" alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Beer Power
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Category;
