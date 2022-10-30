import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import iconPhone from "../../assets/images/icons/phone.svg";
import iconSearch from "../../assets/images/icons/search.svg";
import iconCart from "../../assets/images/icons/cart.svg";
import iconSignIn from "../../assets/images/icons/sign-in.svg";

const Header = () => {
	return (
		<header>
			<div className="container-fluid">
				<div className="header-content d-flex flex-wrap align-items-center">
					<div className="logo">
						<Link to="/" title>
							<img src={logo} alt="" />
						</Link>
					</div>
					<nav>
						<ul>
							<li>
								<a className="active" href="index.html" title>
									Home
								</a>
							</li>
							<li>
								<a href="about.html" title>
									About Us
								</a>
							</li>
							<li>
								<a href="#" title>
									Pages
								</a>
								<ul>
									<li>
										<a href="restaurants.html" title>
											Restaurants
										</a>
									</li>
									<li>
										<a href="restaurant-details.html" title>
											Restaurant detail
										</a>
									</li>
									<li>
										<a href="cart.html" title>
											Cart
										</a>
									</li>
									<li>
										<a href="checkout.html" title>
											Checkout
										</a>
									</li>
									<li>
										<a href="profile.html" title>
											My profile
										</a>
									</li>
									<li>
										<a href="faqs.html" title>
											FAQs
										</a>
									</li>
									<li>
										<a href="testimonials.html" title>
											Testimonials
										</a>
									</li>
									<li>
										<a href="404.html" title>
											404
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#" title>
									Blog
								</a>
								<ul>
									<li>
										<a href="blog1.html" title>
											Blog 1
										</a>
									</li>
									<li>
										<a href="blog2.html" title>
											Blog 2
										</a>
									</li>
									<li>
										<a href="blog-single.html" title>
											Blog Single
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="contact.html" title>
									Contact Us
								</a>
							</li>
						</ul>
					</nav>
					{/*navigation end*/}
					<div className="menu-btn">
						<span className="bar1" />
						<span className="bar2" />
						<span className="bar3" />
					</div>
					{/*menu-bar end*/}
					<ul className="oth-lnks ml-auto">
						<li>
							<img src={iconPhone} alt="" />
							+1 654 847 52 25
						</li>
						<li>
							<a href="#" title className="search-icon">
								<img src={iconSearch} alt="" />
							</a>
						</li>
						<li>
							<a href="#" title className="cart-ico">
								<img src={iconCart} alt="" />
							</a>
							<span className="cart-item-num">0</span>
						</li>
						<li>
							<a href="sign-in.html" title className="cart-ico">
								Sign in <img src={iconSignIn} alt="" />
							</a>
						</li>
					</ul>
				</div>
				<div className="search-bar">
					<div className="container">
						<form>
							<input type="text" name="search" placeholder="Search" />
						</form>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
