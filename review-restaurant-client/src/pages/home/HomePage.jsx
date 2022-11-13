import React from "react";
import "../../assets/css/all.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/js/lib/slick/slick.css";
import "../../assets/js/lib/slick/slick-theme.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

import "../../assets/js/scripts";

import Header from "../../components/main/Header";
import MobileMenu from "../../components/main/MobileMenu";
import SearchUsers from "../../components/search-user/SearchUsers";

const Home = () => {
	return (
		<div>
			<div className="wrapper">
				<Header />
				<MobileMenu />
				<section className="main-banner">
					<div className="container">
						<div className="banner-text">
							<h2>We deliver the taste of life</h2>
							<span className="semi-bold text-capitalize">
								Get it delivered right to your door.
							</span>
							<SearchUsers/>
						</div>
						{/*banner-text end*/}
					</div>
				</section>

				<section className="services-section">
					<div className="container">
						<div className="services-sec">
							<div className="row">
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="service">
										<h2 className="semi-bold">01.</h2>
										<span className="text-uppercase">
											<img src="assets/images/icons/location.svg" alt="" />
											Step 1
										</span>
										<h4 className="semi-bold text-capitalize">
											<a href="#" title>
												Choose Location
											</a>
										</h4>
										<p>Enter your address or choose your current location using app. </p>
									</div>
									{/*service end*/}
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="service">
										<h2 className="semi-bold">02.</h2>
										<span className="text-uppercase">
											<img src="assets/images/icons/meat.svg" alt="" />
											Step 2
										</span>
										<h4 className="semi-bold text-capitalize">
											<a href="#" title>
												Order favorite food
											</a>
										</h4>
										<p>Choose your favorite food and a payment method.</p>
									</div>
									{/*service end*/}
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6">
									<div className="service">
										<h2 className="semi-bold">03.</h2>
										<span className="text-uppercase">
											<img src="assets/images/icons/box.svg" alt="" />
											Step 3
										</span>
										<h4 className="semi-bold text-capitalize">
											<a href="#" title>
												fast Delivery
											</a>
										</h4>
										<p>Get it delizvered right to your door in 1 hour or less.</p>
									</div>
									{/*service end*/}
								</div>
							</div>
						</div>
						{/*services end*/}
					</div>
				</section>

				<section className="sec-block pb-0">
					<div className="container">
						<div className="section-title text-center">
							<span>Featured </span>
							<h2 className="text-capitalize">restaurants &amp; Cafes</h2>
							<p className="mx-auto">
								The best restaurants and cafes that have been working with us for a long time.
							</p>
						</div>
						{/*sec-title end*/}
						<div className="featured-sec">
							<div className="row mb-70">
								<div className="col-md-6">
									<div className="featured-item">
										<img src="https://via.placeholder.com/555x400" alt="" className="w-100" />
										<ul className="ftz">
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M2.5 8.33337H17.5"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M13.3333 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M6.66669 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												Monday - Sunday
											</li>
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M10 5V10L13.3333 11.6667"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												9:00am - 11:00pm
											</li>
										</ul>
										<div className="feat-optz">
											<span className="text-capitalize">restaurant</span>
											<h2 className="text-capitalize">
												<a href="restaurant-details.html" title>
													bulgarian restaurant
												</a>
											</h2>
										</div>
									</div>
									{/*featured-item end*/}
								</div>
								<div className="col-md-6">
									<div className="featured-item">
										<img
											src="https://via.placeholder.com/555x400
"
											alt=""
											className="w-100"
										/>
										<ul className="ftz">
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M2.5 8.33337H17.5"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M13.3333 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M6.66669 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												Monday - Sunday
											</li>
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M10 5V10L13.3333 11.6667"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												9:00am - 11:00pm
											</li>
										</ul>
										<div className="feat-optz">
											<span className="text-capitalize">Asian Food</span>
											<h2 className="text-capitalize">
												<a href="restaurant-details.html" title>
													Sushi Taste
												</a>
											</h2>
										</div>
									</div>
									{/*featured-item end*/}
								</div>
								<div className="col-md-8">
									<div className="featured-item">
										<img
											src="https://via.placeholder.com/750x400
"
											alt=""
											className="w-100"
										/>
										<ul className="ftz">
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M2.5 8.33337H17.5"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M13.3333 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M6.66669 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												Monday - Sunday
											</li>
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M10 5V10L13.3333 11.6667"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												9:00am - 11:00pm
											</li>
										</ul>
										<div className="feat-optz">
											<span className="text-capitalize">Cafe</span>
											<h2 className="text-capitalize">
												<a href="restaurant-details.html" title>
													Hot Pastry Cafe
												</a>
											</h2>
										</div>
									</div>
									{/*featured-item end*/}
								</div>
								<div className="col-md-4">
									<div className="featured-item">
										<img
											src="https://via.placeholder.com/360x400
"
											alt=""
											className="w-100"
										/>
										<ul className="ftz">
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M2.5 8.33337H17.5"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M13.3333 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M6.66669 1.66663V4.99996"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												Monday - Sunday
											</li>
											<li>
												<span>
													<svg
														width={20}
														height={20}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M10 5V10L13.3333 11.6667"
															stroke="#D8AB37"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												9:00am - 11:00pm
											</li>
										</ul>
										<div className="feat-optz">
											<span className="text-capitalize">Pub</span>
											<h2 className="text-capitalize">
												<a href="restaurant-details.html" title>
													Beer Power
												</a>
											</h2>
										</div>
									</div>
									{/*featured-item end*/}
								</div>
							</div>
							<div className="row text-center">
								<div className="col-12">
									<a href="restaurants.html" title className="btn-default">
										View all list <span />
									</a>
								</div>
							</div>
						</div>
						{/*featured-sec end*/}
					</div>
				</section>

				<section className="sec-block">
					<div className="container">
						<div className="section-title text-center">
							<span>The reason why </span>
							<h2 className="text-capitalize">why people choose us</h2>
							<p className="mx-auto">
								We have many advantages but we will highlight only some of them, look below.
							</p>
						</div>
						{/*sec-title end*/}
						<div className="our-proptz text-center">
							<div className="row">
								<div className="col-md-4 col-sm-6">
									<div className="proptz">
										<div className="propt-icon">
											<img src="assets/images/icons/discount.svg" alt="" />
										</div>
										<h3 className="semi-bold text-capitalize">discount system</h3>
										<p>We have a favorable discount system for our regular customers.</p>
									</div>
									{/*proptz end*/}
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="proptz">
										<div className="propt-icon">
											<img src="assets/images/icons/delivery.svg" alt="" />
										</div>
										<h3 className="semi-bold text-capitalize">Express Delivery</h3>
										<p>The hottest food &amp; fastest delivery to any location of your city.</p>
									</div>
									{/*proptz end*/}
								</div>
								<div className="col-md-4 col-sm-6">
									<div className="proptz">
										<div className="propt-icon">
											<img src="assets/images/icons/food.svg" alt="" />
										</div>
										<h3 className="semi-bold text-capitalize">50+ restaurants</h3>
										<p>Large selection of restaurants and cafes throughout the country.</p>
									</div>
									{/*proptz end*/}
								</div>
							</div>
						</div>
						{/*our-proptz end*/}
					</div>
				</section>

				<section className="sec-block">
					<div className="fixed-bg bg1" />
					<div className="container">
						<div className="promotion">
							<h2 className="text-capitalize">
								Make Your first order and get <span>50% off</span>
							</h2>
							<span className="text-capitalize semi-bold">
								Get it delivered right to your door.
							</span>
							<p>
								If you order food delivery from us for the first time then we have a gift - 50%
								discount for you on the first order. You just need to register and order your
								favorite food.
							</p>
							<a href="restaurants.html" title className="btn-default">
								Order Products <span />
							</a>
						</div>
						{/*promotion end*/}
					</div>
				</section>

				<section className="sec-block pb-0">
					<div className="container">
						<div className="section-title text-center">
							<span>Testimonials </span>
							<h2 className="text-capitalize">happy clients say</h2>
						</div>
						{/*sec-title end*/}
						<div className="testimonials text-center">
							<div className="testimonial-slide">
								<p>
									Very fast delivery. I recommend to everyone. The food is very hot and fresh and
									also as tasty as in a restaurant. The application is very convenient and
									understandable.
								</p>
								<div className="testimonial-by">
									<img
										src="https://via.placeholder.com/65x65"
										alt=""
									/>
									<h4 className="text-capitalize semi-bold">Marco Bituchini</h4>
									<span>May 16, 2020</span>
								</div>
							</div>
							{/*testimonial-slide end*/}
							<div className="testimonial-slide">
								<p>
									Very fast delivery. I recommend to everyone. The food is very hot and fresh and
									also as tasty as in a restaurant. The application is very convenient and
									understandable.
								</p>
								<div className="testimonial-by">
									<img
										src="https://via.placeholder.com/65x65"
										alt=""
									/>
									<h4 className="text-capitalize semi-bold">Marco Bituchini</h4>
									<span>May 16, 2020</span>
								</div>
							</div>
							{/*testimonial-slide end*/}
							<div className="testimonial-slide">
								<p>
									Very fast delivery. I recommend to everyone. The food is very hot and fresh and
									also as tasty as in a restaurant. The application is very convenient and
									understandable.
								</p>
								<div className="testimonial-by">
									<img
										src="https://via.placeholder.com/65x65"
										alt=""
									/>
									<h4 className="text-capitalize semi-bold">Marco Bituchini</h4>
									<span>May 16, 2020</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="sec-block">
					<div className="container-fluid">
						<div className="section-title text-center">
							<span>Amazing taste </span>
							<h2 className="text-capitalize">Popular dishes</h2>
						</div>
						<div className="popular-dishes text-center">
							<div className="options">
								<div className="option-isotop">
									<ul id="filter" className="option-set filters-nav" data-option-key="filter">
										<li>
											<a className="selected" data-option-value=".meat">
												Meat
											</a>
										</li>
										<li>
											<a data-option-value=".pizza">Pizza</a>
										</li>
										<li>
											<a data-option-value=".fastfood">Fastfood</a>
										</li>
										<li>
											<a data-option-value=".sushi">Sushi</a>
										</li>
										<li>
											<a data-option-value=".vegitarian">Vegitarian food</a>
										</li>
									</ul>
								</div>
							</div>
							{/*options end*/}
							<div className="row">
								<div className="masonary">
									<div className="col-lg-3 col-md-6 col-sm-6 meat">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													Rib-eye Steaks
												</a>{" "}
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$15.69</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 meat">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													Top Sirloin Steaks{" "}
												</a>
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$25.39</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 meat">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													T-Bone Steaks
												</a>{" "}
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$18.99</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 meat">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442
"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													Strip Steaks
												</a>{" "}
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$16.89</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 sushi fastfood">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442
"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													Rib-eye Steaks
												</a>{" "}
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$15.69</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 vegitarian fastfood">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442
"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													Top Sirloin Steaks
												</a>{" "}
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$25.39</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 sushi pizza vegitarian">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													T-Bone Steaks
												</a>{" "}
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$18.99</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 fastfood sushi vegitarian">
										<div className="pd-item">
											<div className="pd-thumbnail">
												<img
													src="https://via.placeholder.com/442x442
"
													alt=""
													className="w-100"
												/>
											</div>
											<h3 className="semi-bold text-capitalize">
												<a href="restaurant-details.html" title>
													Strip Steaks
												</a>{" "}
											</h3>
											<p>Few things are better than a properly grilled steak.</p>
											<strong className="semi-bold">$16.89</strong>
											<a
												href="cart.html"
												title
												className="btn-default gradient-bg half-radius height-2"
											>
												Add to cart <span />
											</a>
										</div>
									</div>
								</div>
								{/*masonary end*/}
							</div>
						</div>
						{/*popular-dishes end*/}
					</div>
				</section>
				<section className="sec-block oder-sec">
					<div className="fixed-bg bg2" />
					<div className="container">
						<div className="order-appliction">
							<h2>
								Make orders With Our <span>Application</span>
							</h2>
							<ul className="vl-fzt">
								<li>
									<span>
										<svg
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="transparent"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69278 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M22 4L12 14.01L9 11.01"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<div className="vs-info">
										<h4>Order and pay in a few minutes</h4>
										<p>
											Сhoose food and pay for the order in a couple of clicks online also choose you
											current location using GPS.
										</p>
									</div>
								</li>
								<li>
									<span>
										<svg
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="transparent"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69278 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M22 4L12 14.01L9 11.01"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<div className="vs-info">
										<h4>Check Delivery Status</h4>
										<p>
											Follow the status of your order in real time and also track the delivery path
											until you get it.
										</p>
									</div>
								</li>
							</ul>
							<ul className="btnss">
								<li>
									<img src="assets/images/btn1.png" alt="" />
								</li>
								<li>
									<img src="assets/images/btn2.png" alt="" />
								</li>
							</ul>
						</div>
						{/*promotion end*/}
					</div>
				</section>
				<section className="sec-block pb-0">
					<div className="container">
						<div className="offer-posts">
							<div className="row">
								<div className="col-md-6">
									<div className="offer-post">
										<img src="https://via.placeholder.com/555x400" alt="" className="w-100" />
										<h2>
											<a href="blog-single.html" title>
												Get paid as a courier partner
											</a>
										</h2>
										<a href="#" title className="arrow">
											<img src="assets/images/icons/arrow.svg" alt="" />
										</a>
									</div>
									{/*blog end*/}
								</div>
								<div className="col-md-6">
									<div className="offer-post">
										<img
											src="https://via.placeholder.com/555x400
"
											alt=""
											className="w-100"
										/>
										<h2>
											<a href="blog-single.html" title>
												Become a restaurant partner
											</a>
										</h2>
										<a href="#" title className="arrow">
											<img src="assets/images/icons/arrow.svg" alt="" />
										</a>
									</div>
									{/*blog end*/}
								</div>
							</div>
						</div>
						{/*offer-post end*/}
					</div>
				</section>
				<section className="sec-block pb-0">
					<div className="container">
						<div className="newsletter-sec">
							<div className="row align-items-center">
								<div className="col-lg-4">
									<div className="newsletter-text">
										<h2>Newsletter</h2>
										<p>Don’t miss promotions and discounts.</p>
									</div>
									{/*newsletter-text end*/}
								</div>
								<div className="col-lg-8">
									<form>
										<input
											type="email"
											name="email"
											className="half-radius"
											placeholder="Enter your email"
										/>
										<button type="submit" className="btn-default">
											Subscribe <span />
										</button>
									</form>
								</div>
							</div>
							<h4 className="section_title">Subscribe</h4>
						</div>
						{/*newsletter-sec end*/}
					</div>
				</section>
				{/*newsletter end*/}
				<section className="sec-block">
					<div className="container">
						<div className="section-title text-center">
							<span>Our blog </span>
							<h2 className="text-capitalize">Latest posts &amp; articles</h2>
							<p className="mx-auto">
								Here you can find recipes from the most famous chefs and read useful information.
							</p>
						</div>
						{/*sec-title end*/}
						<div className="blog-posts">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="blog">
										<div className="blog-thumbnail">
											<img
												src="https://via.placeholder.com/360x250
"
												alt=""
												className="w-100"
											/>
											<span className="category">recipe</span>
										</div>
										<div className="blog-info">
											<ul className="meta">
												<li>
													<img
														src="https://via.placeholder.com/65x65
"
														alt=""
													/>
													<a href="#" title>
														Antonio Refflis
													</a>
												</li>
												<li>
													<a href="#" title>
														May 15, 2020
													</a>
												</li>
											</ul>
											<h2 className="blog-title">
												<a href="blog-single.html" title>
													The Traditional recipe of apple pie
												</a>
											</h2>
										</div>
									</div>
									{/*blog end*/}
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="blog">
										<div className="blog-thumbnail">
											<img
												src="https://via.placeholder.com/360x250
"
												alt=""
												className="w-100"
											/>
											<span className="category">recipe</span>
										</div>
										<div className="blog-info">
											<ul className="meta">
												<li>
													<img
														src="https://via.placeholder.com/65x65
"
														alt=""
													/>
													<a href="#" title>
														Carlos Bolitti
													</a>
												</li>
												<li>
													<a href="#" title>
														May 14, 2020
													</a>
												</li>
											</ul>
											<h2 className="blog-title">
												<a href="blog-single.html" title>
													famous vanilla bean cupcakes
												</a>
											</h2>
										</div>
									</div>
									{/*blog end*/}
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="blog">
										<div className="blog-thumbnail">
											<img
												src="https://via.placeholder.com/360x250
"
												alt=""
												className="w-100"
											/>
											<span className="category">recipe</span>
										</div>
										<div className="blog-info">
											<ul className="meta">
												<li>
													<img
														src="https://via.placeholder.com/65x65
"
														alt=""
													/>
													<a href="#" title>
														Nicolas Mano
													</a>
												</li>
												<li>
													<a href="#" title>
														May 12, 2020
													</a>
												</li>
											</ul>
											<h2 className="blog-title">
												<a href="blog-single.html" title>
													the most tasty cake we’ve ever made
												</a>
											</h2>
										</div>
									</div>
									{/*blog end*/}
								</div>
							</div>
						</div>
						{/*blog-posts end*/}
					</div>
				</section>
				<footer>
					<div className="top-footer">
						<div className="fixed-bg bg3" />
						<div className="phone-div">
							<div className="border-circle">
								<div className="phone-circle">
									<a href="#" title className="ext-link" />
									<svg
										width={40}
										height={40}
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1113 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.9881 11.4891 17.1118 9.32498 15.7084C7.31151 14.4289 5.60443 12.7218 4.32498 10.7084C2.91663 8.53436 2.04019 6.05919 1.76665 3.48336C1.74583 3.25291 1.77321 3.02066 1.84707 2.80138C1.92092 2.5821 2.03963 2.3806 2.19562 2.20971C2.35162 2.03882 2.54149 1.90228 2.75314 1.80879C2.9648 1.7153 3.1936 1.66691 3.42499 1.66669H5.92498C6.32941 1.66271 6.72148 1.80592 7.02812 2.06964C7.33476 2.33335 7.53505 2.69956 7.59165 3.10002C7.69717 3.90008 7.89286 4.68563 8.17498 5.44169C8.2871 5.73996 8.31137 6.06412 8.24491 6.37576C8.17844 6.6874 8.02404 6.97345 7.79998 7.20002L6.74165 8.25836C7.92795 10.3446 9.65536 12.0721 11.7417 13.2584L12.8 12.2C13.0266 11.976 13.3126 11.8216 13.6242 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4084C17.3048 12.4655 17.6745 12.6694 17.9388 12.9813C18.203 13.2932 18.3435 13.6913 18.3333 14.1Z"
											stroke="#fff"
											strokeWidth={1}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3 col-md-6">
									<div className="widget widget-about">
										<img src="assets/images/logo.png" alt="" />
										<h4>Working schedule</h4>
										<p>
											Mon - Sat: 9:00 am - 10:00 pm <br /> Sun: 10:00 am - 8:00 pm
										</p>
									</div>
									{/*widget-about end*/}
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="widget widget-contact text-center">
										<h2>
											<span>Call us</span> to make an order!
										</h2>
										<p>Don’t be shy, we don’t bite :)</p>
										<strong>+1 654 847 52 25</strong>
									</div>
									{/*widget-contact end*/}
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="widget widget-payment">
										<div className="wid-payment">
											<h4>Payment Options</h4>
											<img src="assets/images/imgs.png" alt="" />
										</div>
										<div className="wid-payment">
											<h4>Download the app</h4>
											<ul>
												<li>
													<a href="#" title>
														<img src="assets/images/btn1.png" alt="" />
													</a>
												</li>
												<li>
													<a href="#" title>
														<img src="assets/images/btn2.png" alt="" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									{/*widget-payment end*/}
								</div>
							</div>
						</div>
					</div>
					<div className="bottom-footer">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="copyright">
										<p>© All Rights Reserved. DeliTaste 2020</p>
									</div>
									{/*copyright end*/}
								</div>
								<div className="col-lg-6">
									<div className="find-us text-right">
										<h5>Find us:</h5>
										<ul className="social-links-text">
											<li>
												<a href="#" title>
													Facebook
												</a>
											</li>
											<li>
												<a href="#" title>
													Twitter
												</a>
											</li>
											<li>
												<a href="#" title>
													Instagram
												</a>
											</li>
										</ul>
									</div>
									{/*find-us end*/}
								</div>
							</div>
						</div>
					</div>
				</footer>
				{/*footer end*/}
			</div>
			{/*wrapper end*/}
		</div>
	);
};

export default Home;
