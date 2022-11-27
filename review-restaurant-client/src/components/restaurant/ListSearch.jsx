import { useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import './listSearchPage.css';

const ListSearch = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangePage = (page) => {
    // console.log(page);
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(page);
  };

  useEffect(() => {
    const getListReataurant = async () => {
      try {
        const res = await axios.get('http://localhost:5000/users');
        setListRestaurant(res.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getListReataurant();
  }, []);

  console.log(listRestaurant);
  console.log(listRestaurant[5]?.infoRestaurant.images[0].url);
  console.log(listRestaurant.length);

  console.log();
  return (
    <div>
      <div class="listing-products">
        {listRestaurant?.map((item, idx) => {
          if (
            idx >= 10 * (currentPage - 1) &&
            idx <= Math.min(listRestaurant?.length, 10 * (currentPage - 1) + 9) &&
            listRestaurant[idx]?.role === 'RESTAURANT'
          ) {
            return (
              <div class="listing-product">
                {console.log(idx)}
                <div class="product-thumb">
                  <img src={listRestaurant[idx]?.infoRestaurant?.images[0]?.url} alt="" />
                </div>
                <div class="product-info">
                  <h3>
                    <a href="restaurant-details.html" title="">
                      Vegetarian Fresh life
                    </a>
                  </h3>
                  <ul class="rating">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <p>
                    Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals,
                    steaks...
                  </p>
                  <ul class="btm">
                    <li>
                      <a href="#" title="">
                        Restaurant
                      </a>
                    </li>
                    <li>
                      <span>
                        <b class="statuss"></b>Open now
                      </span>
                    </li>
                  </ul>
                  <a href="restaurant-details.html" title="" class="view-menu">
                    View Menu <i class="fa fa-long-arrow-alt-right"></i>
                  </a>
                  <div class="clearfix"></div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div class="load-more mt-40 text-center">
        {/* <a href="#" title="" class="btn-default">
          Load More <span></span>
        </a> */}
        <Pagination
          style={{ color: 'yellow' }}
          defaultCurrent={1}
          current={currentPage}
          total={listRestaurant?.length}
          onChange={onChangePage}
          pageSize={10}
          showLessItems={false}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ListSearch;
