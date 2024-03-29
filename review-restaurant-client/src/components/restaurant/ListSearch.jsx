import { useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Rating } from '@mantine/core';

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
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/searchManyFields`, {
          key: props.q,
          regions: props.region,
          purposes: props.purposes.map(Number),
          benefits: props.benefits.map(Number),
          minPrice: props.minPrice * 10000,
          maxPrice: props.maxPrice * 10000,
        });
        setListRestaurant(res.data.users.filter(item => item.role === "RESTAURANT"));
        setLoading(false)
        console.log(listRestaurant)
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
                  <div class="product-info" style={{ flex: 1 }}>
                    <h3 style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <Link target={"_blank"} to={"/profile/" + listRestaurant[idx]?._id} title="">
                        {listRestaurant[idx]?.userName}
                      </Link>
                      <Rating className="rating"
                        style={{ display: "flex" }}
                        readOnly
                        defaultValue={Number(listRestaurant[idx]?.rateAvg)}
                      />

                    </h3>

                    {/*<ul class="rating">*/}
                    {/*  <li>*/}
                    {/*    <i class="fa fa-star"></i>*/}
                    {/*  </li>*/}
                    {/*  <li>*/}
                    {/*    <i class="fa fa-star"></i>*/}
                    {/*  </li>*/}
                    {/*  <li>*/}
                    {/*    <i class="fa fa-star"></i>*/}
                    {/*  </li>*/}
                    {/*  <li>*/}
                    {/*    <i class="fa fa-star"></i>*/}
                    {/*  </li>*/}
                    {/*  <li>*/}
                    {/*    <i class="fa fa-star"></i>*/}
                    {/*  </li>*/}
                    {/*</ul>*/}
                    <p>
                      {listRestaurant[idx]?.address}
                      <div>
                        $ {listRestaurant[idx]?.infoRestaurant.minPrice.toLocaleString('de-DE')}đ - {listRestaurant[idx]?.infoRestaurant.maxPrice.toLocaleString('de-DE')}đ
                      </div>
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
                    <Link target={"_blank"} to={"/profile/" + listRestaurant[idx]?._id} title="" class="view-menu">
                      Xem chi tiết <i class="fa fa-long-arrow-alt-right"></i>
                    </Link>
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
