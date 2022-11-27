import { Axios } from 'axios';
import React, { useState } from 'react';
import { Collapse, Slider } from 'antd';

import Header from '../../components/main/Header';
import MobileMenu from '../../components/main/MobileMenu';
import ListSearch from '../../components/restaurant/ListSearch';
import HeaderFilter from './HeaderFilter';
import './styleSearch.css';

const SearchPage = () => {
  let params = new URLSearchParams(document.location.search);
  const { Panel } = Collapse;

  const [expandIconPosition, setExpandIconPosition] = useState('end');

  const [region, setRegion] = useState('');
  const [purposes, setPurposes] = useState(['']);
  const [benefits, setBenefits] = useState(['']);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const onChangePrice = () => {};
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
                      <Collapse
                        defaultActiveKey={['0', '1', '2']}
                        ghost={true}
                        header={<HeaderFilter />}
                        expandIconPosition={expandIconPosition}
                      >
                        {/* <h3 class="widget-title">Khu vực</h3> */}
                        <Panel header={<HeaderFilter title="Lọc" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Tất cả
                                <input type="checkbox" checked="checked" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Gần tôi nhất
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Điểm đánh giá
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="Khu vực" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Quận 1
                                <input type="checkbox" checked="checked" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 2
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 3
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 4
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 5
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 6
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 7
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 8
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 9
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 10
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 11
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 12
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                TP Thủ Đức
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="Mục đích" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Chill
                                <input type="checkbox" checked="checked" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Hẹn hò
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Đọc sách
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Làm việc
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="label">
                                Sống ảo
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="Tiện ích" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Bàn ngoài trời
                                <input type="checkbox" checked="checked" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Bánh ngọt
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Chiếu bóng đá
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Chố chơi cho trẻ em
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Chố đậu ôtô
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Giao hàng
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Giữ xe máy
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Khu vực hút thuốc
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Mang đồ ăn ra ngoài
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Mang thú cưng
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Máy lạnh và điều hòa
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Thanh toán bằng thẻ
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Wifi free
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>
                        <Panel header={<HeaderFilter title="Khoảng giá" />}>
                          <Slider range step={10} defaultValue={[20, 50]} onChange={onChangePrice} />
                        </Panel>
                      </Collapse>
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
                    {/* <div class="widget widget-price-filter">
                      <h3 class="widget-title">Rating</h3>
                      <div id="slider-range"></div>
                      <div class="price-bx">
                        <input type="text" id="amount" readonly />
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <button type="submit" class="btn-default w-100">
                      Search <span></span>
                    </button> */}
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
                <ListSearch />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchPage;
