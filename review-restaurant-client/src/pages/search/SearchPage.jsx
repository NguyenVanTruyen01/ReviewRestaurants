import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Collapse, Slider, Tooltip } from 'antd';

import Header from '../../components/main/Header';
import MobileMenu from '../../components/main/MobileMenu';
import ListSearch from '../../components/restaurant/ListSearch';
import HeaderFilter from './HeaderFilter';
import './styleSearch.css';

const SearchPage = () => {
  let params = new URLSearchParams(document.location.search);
  const { Panel } = Collapse;

  const [expandIconPosition, setExpandIconPosition] = useState('end');

  const [region, setRegion] = useState([]);
  const [purposes, setPurposes] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30);

  useEffect(() => {
    console.log(region);
    console.log(purposes);
    console.log(benefits);
    const q = params.get('q');
    console.log(q);
  }, [region, purposes, benefits]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  }

  const handleChangeRegion = (event) => {
    if (region.includes(event.target.value)) {
      var index = region.indexOf(event.target.value);
      if (index !== -1) {
        setRegion(region.filter((item, idx) => idx !== index));
      }
    } else {
      setRegion([...region, event.target.value]);
    }
  };
  const handleChangePurposes = (event) => {
    if (purposes.includes(event.target.value)) {
      var index = purposes.indexOf(event.target.value);
      if (index !== -1) {
        setPurposes(purposes.filter((item, idx) => idx !== index));
      }
    } else {
      setPurposes([...purposes, event.target.value]);
    }
  };
  const handleChangeBenefits = (event) => {
    if (benefits.includes(event.target.value)) {
      var index = benefits.indexOf(event.target.value);
      if (index !== -1) {
        setBenefits(benefits.filter((item, idx) => idx !== index));
      }
    } else {
      setBenefits([...benefits, event.target.value]);
    }
  };

  const onChangePrice = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    console.log(value);
  };

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
                        defaultActiveKey={['0', '1', '2', '3', '4']}
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
                                <input
                                  type="checkbox"
                                  value={'Quận 1'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 1') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 2
                                <input
                                  type="checkbox"
                                  value={'Quận 2'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 2') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 3
                                <input
                                  type="checkbox"
                                  value={'Quận 3'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 3') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 4
                                <input
                                  type="checkbox"
                                  value={'Quận 4'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 4') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 5
                                <input
                                  type="checkbox"
                                  value={'Quận 4'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 5') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 6
                                <input
                                  type="checkbox"
                                  value={'Quận 6'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 6') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 7
                                <input
                                  type="checkbox"
                                  value={'Quận 7'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 7') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 8
                                <input
                                  type="checkbox"
                                  value={'Quận 8'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 8') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 9
                                <input
                                  type="checkbox"
                                  value={'Quận 9'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 9') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 10
                                <input
                                  type="checkbox"
                                  value={'Quận 10'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 10') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 11
                                <input
                                  type="checkbox"
                                  value={'Quận 11'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 11') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Quận 12
                                <input
                                  type="checkbox"
                                  value={'Quận 12'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Quận 12') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                TP Thủ Đức
                                <input
                                  type="checkbox"
                                  value={'TP Thủ Đức'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('TP Thủ Đức') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="Mục đích" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Sống ảo
                                <input
                                  type="checkbox"
                                  value={1}
                                  onChange={(e) => handleChangePurposes(e)}
                                  defaultChecked={purposes.includes(1) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Hẹn hò
                                <input
                                  type="checkbox"
                                  value={2}
                                  onChange={(e) => handleChangePurposes(e)}
                                  defaultChecked={purposes.includes(2) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Làm việc
                                <input
                                  type="checkbox"
                                  value={3}
                                  onChange={(e) => handleChangePurposes(e)}
                                  defaultChecked={purposes.includes(3) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Đọc sách
                                <input
                                  type="checkbox"
                                  value={4}
                                  onChange={(e) => handleChangePurposes(e)}
                                  defaultChecked={purposes.includes(4) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                              <label class="label">
                                Chill
                                <input
                                  type="checkbox"
                                  value={5}
                                  onChange={(e) => handleChangePurposes(e)}
                                  defaultChecked={purposes.includes(5) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="Tiện ích" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Wifi miễn phí
                                <input
                                  type="checkbox"
                                  value={1}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(1) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Giữ xe
                                <input
                                  type="checkbox"
                                  value={2}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(2) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Mang thú cưng
                                <input
                                  type="checkbox"
                                  value={3}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(3) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Thanh toán bằng thẻ
                                <input
                                  type="checkbox"
                                  value={4}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(4) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Điều hòa
                                <input
                                  type="checkbox"
                                  value={5}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(5) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Bàn ngoài trời
                                <input
                                  type="checkbox"
                                  value={6}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(6) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Chỗ chơi trẻ em
                                <input
                                  type="checkbox"
                                  value={7}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(7) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Khu vực hút thuốc
                                <input
                                  type="checkbox"
                                  value={8}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(8) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Chiếu bóng đá
                                <input
                                  type="checkbox"
                                  value={9}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(9) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Giao hàng
                                <input
                                  type="checkbox"
                                  value={10}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(10) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Mang đồ ăn ra ngoài
                                <input
                                  type="checkbox"
                                  value={11}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(11) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Ăn vặt
                                <input
                                  type="checkbox"
                                  value={12}
                                  onChange={(e) => handleChangeBenefits(e)}
                                  defaultChecked={benefits.includes(12) ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="Khoảng giá" />}>
                          <div className="price-text">
                            {numberWithCommas(minPrice * 10000)} ~ {numberWithCommas(maxPrice * 10000)}
                          </div>

                          <Slider
                            range
                            step={1}
                            defaultValue={[minPrice, maxPrice]}
                            min={0}
                            max={50}
                            onChange={onChangePrice}
                            tooltipVisible={false}
                          />
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
                <ListSearch
                  region={region}
                  purposes={purposes}
                  benefits={benefits}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchPage;
