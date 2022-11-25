import React from 'react';
import Header from '../../components/main/Header';
import MobileMenu from '../../components/main/MobileMenu';
const SearchPage = () => {
  let params = new URLSearchParams(document.location.search);
  const q = params.get('q');
  console.log(q);
  return (
    <div>
      <div className="wrapper">
        <Header />
        <MobileMenu />

        <section class="sec-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 order-md-1 order-sm-1 order-col-1">
                <div class="sidebar left-sidebar">
                  <form>
                    <div class="widget widget-filter">
                      <h3 class="widget-title">Filter</h3>
                      <ul>
                        <li>
                          <label class="label">
                            Beverages
                            <input type="checkbox" checked="checked" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Burgers
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Meat & Steaks
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Pastry
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Pasta
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Pizza
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Sandwiches
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Seafood
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Soup & Salads
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Sushi
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label class="label">
                            Vegetarian Food
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div class="widget widget-tags">
                      <h3 class="widget-title">Tags</h3>
                      <ul>
                        <li>
                          <a href="#" title="">
                            Fish
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Grill
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Beer
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Chicken
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Beef
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Hot
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Vegetables
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Chilly
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Fruits
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="widget widget-price-filter">
                      <h3 class="widget-title">Rating</h3>
                      <div id="slider-range"></div>
                      <div class="price-bx">
                        <input type="text" id="amount" readonly />
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <button type="submit" class="btn-default w-100">
                      Search <span></span>
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="search-prod">
                  <form>
                    <div class="form-group">
                      <input type="text" name="search" placeholder="Search" class="form-control half-radius" />
                      <button type="submit" class="btn-default half-radius">
                        Search Restaurant
                      </button>
                    </div>
                  </form>
                </div>
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
                        Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals,
                        steaks...
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
                        Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals,
                        steaks...
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
                        Salads, soups, sneaks, burgers, drinks, seafood, grill, fish, vegetarian menu, wine, hot meals,
                        steaks...
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchPage;
