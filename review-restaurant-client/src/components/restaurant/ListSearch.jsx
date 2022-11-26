import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const ListSearch = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  useEffect(() => {
    const getListReataurant = async () => {
      try {
        const res = await axios.get('http://localhost:9000/admin/product-management/search-product/');
        setListRestaurant(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    getListReataurant();
  }, []);
  console.log();
  return (
    <div>
      <div class="listing-products">
        <div class="listing-product">
          <div class="product-thumb">
            <img
              src="https://via.placeholder.com/262x240
"
              alt=""
              class="w-100"
            />
            <div class="cl-logo">
              <img
                src="https://via.placeholder.com/150x150
"
                alt=""
              />
            </div>
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
              Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals, steaks...
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
        <div class="listing-product">
          <div class="product-thumb">
            <img
              src="https://via.placeholder.com/262x240
"
              alt=""
              class="w-100"
            />
            <div class="cl-logo">
              <img
                src="https://via.placeholder.com/150x150
"
                alt=""
              />
            </div>
          </div>
          <div class="product-info">
            <h3>
              <a href="restaurant-details.html" title="">
                beer power
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
              Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals, steaks...
            </p>
            <ul class="btm">
              <li>
                <a href="#" title="">
                  Pub
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
        <div class="listing-product">
          <div class="product-thumb">
            <img
              src="https://via.placeholder.com/262x240
"
              alt=""
              class="w-100"
            />
            <div class="cl-logo">
              <img
                src="https://via.placeholder.com/150x150
"
                alt=""
              />
            </div>
          </div>
          <div class="product-info">
            <h3>
              <a href="restaurant-details.html" title="">
                Hot pastry cafe
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
              Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals, steaks...
            </p>
            <ul class="btm">
              <li>
                <a href="#" title="">
                  Cafe
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
        <div class="listing-product">
          <div class="product-thumb">
            <img
              src="https://via.placeholder.com/262x240
"
              alt=""
              class="w-100"
            />
            <div class="cl-logo">
              <img
                src="https://via.placeholder.com/150x150
"
                alt=""
              />
            </div>
          </div>
          <div class="product-info">
            <h3>
              <a href="restaurant-details.html" title="">
                Sushi Taste
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
              Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals, steaks...
            </p>
            <ul class="btm">
              <li>
                <a href="#" title="">
                  Asian Food
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
        <div class="listing-product">
          <div class="product-thumb">
            <img
              src="https://via.placeholder.com/262x240
"
              alt=""
              class="w-100"
            />
            <div class="cl-logo">
              <img
                src="https://via.placeholder.com/150x150
"
                alt=""
              />
            </div>
          </div>
          <div class="product-info">
            <h3>
              <a href="restaurant-details.html" title="">
                bulgarian restaurant
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
              Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals, steaks...
            </p>
            <ul class="btm">
              <li>
                <a href="#" title="">
                  Restaurant
                </a>
              </li>
              <li>
                <span>
                  <b class="statuss closed"></b>Closed
                </span>
              </li>
            </ul>
            <a href="restaurant-details.html" title="" class="view-menu">
              View Menu <i class="fa fa-long-arrow-alt-right"></i>
            </a>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="load-more mt-40 text-center">
        <a href="#" title="" class="btn-default">
          Load More <span></span>
        </a>
      </div>
    </div>
  );
};

export default ListSearch;
