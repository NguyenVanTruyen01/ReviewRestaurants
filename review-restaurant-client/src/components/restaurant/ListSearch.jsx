import { useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';

import { Pagination } from 'antd';
import './listSearchPage.css';

const ListSearch = (props) => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [regionApi, setRegionApi] = useState([])
  const [purposesApi, setPurposesApi] = useState([])
  const [benefitsApi, setBenefitsApi] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setRegionApi(props.region)
    setPurposesApi(props.purposes.map(Number))
    setBenefitsApi(props.benefits.map(Number))
  }, [props.region, props.purposes, props.benefits]);


  const onChangePage = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(page);
  };

  useEffect(() => {
    const getListRestaurantByField = async () => {
      try {
        setLoading(true)
        const res = await axios.post('http://localhost:5000/users/searchManyFields', {
          key: '',
          regions: regionApi,
          purposes: purposesApi,
          benefits: benefitsApi,
          minPrice: props.minPrice * 10000,
          maxPrice: props.maxPrice * 10000,
        });
        setListRestaurant(res.data.users.filter(item => item.role === "RESTAURANT"));
        setLoading(false)
      } catch (err) {
        console.log(err);
      }
    };
    getListRestaurantByField();
  }, [props]);

  return (
    <div>
      {loading ? (<div className='loading-container'><div class="loadingio-spinner-reload-0otlv348doe"><div class="ldio-84ztw36yse6">
        <div><div></div><div></div><div></div></div>
      </div></div></div>) : (<div>
        <div class="listing-products">
          {listRestaurant?.map((item, idx) => {
            if (idx >= 10 * (currentPage - 1) && idx <= Math.min(listRestaurant?.length, 10 * (currentPage - 1) + 9)) {
              return (
                <div class="listing-product">
                  {/* {console.log(idx)} */}
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
      </div>)}

    </div>
  );
};

export default ListSearch;
