import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Collapse, Slider, Tooltip } from 'antd';

import Header from '../../components/main/Header';
import MobileMenu from '../../components/main/MobileMenu';
import ListSearch from '../../components/restaurant/ListSearch';
import HeaderFilter from './HeaderFilter';
import Footer from "../../components/main/Footer";


import './styleSearch.css';

const SearchPage = () => {
  const { Panel } = Collapse;

  const [expandIconPosition, setExpandIconPosition] = useState('end');


  let params = new URLSearchParams(document.location.search);
  const q = params.get('q');
  const paramPurposes = params.get('purposes') === null ? [] : [params.get('purposes')];
  const paramRegion = params.get('region') === null ? [] : [params.get('region')];
  // const paramRegion = params.get('region');

  // if (paramPurposes !== null) {
  //   setPurposes([...purposes, paramPurposes]);
  // }


  const [region, setRegion] = useState(paramRegion);
  const [purposes, setPurposes] = useState(paramPurposes);
  const [benefits, setBenefits] = useState([]);
  const [query, setQuery] = useState('')
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30);

  console.log(purposes)
  // if (q === null) {
  //   setQuery('')
  // }
  // else {
  //   setQuery(q)
  // }

  // if (paramRegion === null) {
  //   setRegion([])
  // }
  // else {
  //   setRegion([...region, paramRegion]);
  // }

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
                        {/* <h3 class="widget-title">Khu v???c</h3> */}
                        <Panel header={<HeaderFilter title="L???c" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                T???t c???
                                <input type="checkbox" checked="checked" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                G???n t??i nh???t
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                ??i???m ????nh gi??
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="Khu v???c" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Qu???n 1
                                <input
                                  type="checkbox"
                                  value={'Qu???n 1'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 1') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 2
                                <input
                                  type="checkbox"
                                  value={'Qu???n 2'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 2') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 3
                                <input
                                  type="checkbox"
                                  value={'Qu???n 3'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 3') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 4
                                <input
                                  type="checkbox"
                                  value={'Qu???n 4'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 4') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 5
                                <input
                                  type="checkbox"
                                  value={'Qu???n 4'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 5') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 6
                                <input
                                  type="checkbox"
                                  value={'Qu???n 6'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 6') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 7
                                <input
                                  type="checkbox"
                                  value={'Qu???n 7'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 7') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 8
                                <input
                                  type="checkbox"
                                  value={'Qu???n 8'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 8') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 9
                                <input
                                  type="checkbox"
                                  value={'Qu???n 9'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 9') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 10
                                <input
                                  type="checkbox"
                                  value={'Qu???n 10'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 10') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 11
                                <input
                                  type="checkbox"
                                  value={'Qu???n 11'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 11') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                Qu???n 12
                                <input
                                  type="checkbox"
                                  value={'Qu???n 12'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('Qu???n 12') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                            <li>
                              <label class="label">
                                TP Th??? ?????c
                                <input
                                  type="checkbox"
                                  value={'TP Th??? ?????c'}
                                  onChange={(e) => handleChangeRegion(e)}
                                  defaultChecked={region.includes('TP Th??? ?????c') ? true : false}
                                />
                                <span class="checkmark"></span>
                              </label>
                            </li>
                          </ul>
                        </Panel>

                        <Panel header={<HeaderFilter title="M???c ????ch" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                S???ng ???o
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
                                H???n h??
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
                                L??m vi???c
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
                                ?????c s??ch
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

                        <Panel header={<HeaderFilter title="Ti???n ??ch" />}>
                          <ul className="list-filter">
                            <li>
                              <label class="label">
                                Wifi mi???n ph??
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
                                Gi??? xe
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
                                Mang th?? c??ng
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
                                Thanh to??n b???ng th???
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
                                ??i???u h??a
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
                                B??n ngo??i tr???i
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
                                Ch??? ch??i tr??? em
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
                                Khu v???c h??t thu???c
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
                                Chi???u b??ng ????
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
                                Giao h??ng
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
                                Mang ????? ??n ra ngo??i
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
                                ??n v???t
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

                        <Panel header={<HeaderFilter title="Kho???ng gi??" />}>
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

        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
