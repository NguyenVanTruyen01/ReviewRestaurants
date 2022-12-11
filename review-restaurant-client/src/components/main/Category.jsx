import React from 'react';
import Slider from 'react-slick';
import chillImage from "../../assets/images/home/category/chill.jpg"
import readBook from "../../assets/images/home/category/read-book.jpg"
import work from "../../assets/images/home/category/work.jpg"
import beautiful from "../../assets/images/home/category/beautiful.jpg"
import dating from "../../assets/images/home/category/dating.jpg"

import './category.css';
// import '../../assets/css/style.css';

const Category = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', }} onClick={onClick}></div>;
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', }} onClick={onClick} />;
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
              <img src={beautiful} alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Sống ảo
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src={dating} alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Hẹn hò
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src={work} alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Làm việc
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src={readBook} alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Đọc sách
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="category-item">
            <div className="category-item">
              <img src={chillImage} alt="" className="w-100" />
              <div className="feat-optz">
                <h2 className="text-capitalize">
                  <a href="restaurant-details.html" title>
                    Chill
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
