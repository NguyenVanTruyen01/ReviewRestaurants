import React from "react";

const MobileMenu = () => {
	return (
		<div>
			<div class="responsive-mobile-menu">
				<ul>
					<li>
						<a class="active" href="index.html" title="">
							Home
						</a>
					</li>
					<li>
						<a href="about.html" title="">
							About Us
						</a>
					</li>
					<li>
						<a href="#" title="">
							Pages
						</a>
						<ul>
							<li>
								<a href="restaurants.html" title="">
									Restaurants
								</a>
							</li>
							<li>
								<a href="restaurant-details.html" title="">
									Restaurant detail
								</a>
							</li>
							<li>
								<a href="cart.html" title="">
									Cart
								</a>
							</li>
							<li>
								<a href="checkout.html" title="">
									Checkout
								</a>
							</li>
							<li>
								<a href="profile.html" title="">
									My profile
								</a>
							</li>
							<li>
								<a href="faqs.html" title="">
									FAQs
								</a>
							</li>
							<li>
								<a href="testimonials.html" title="">
									Testimonials
								</a>
							</li>
							<li>
								<a href="404.html" title="">
									404
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#" title="">
							Blog
						</a>
						<ul>
							<li>
								<a href="blog1.html" title="">
									Blog 1
								</a>
							</li>
							<li>
								<a href="blog2.html" title="">
									Blog 2
								</a>
							</li>
							<li>
								<a href="blog-single.html" title="">
									Blog Single
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="contact.html" title="">
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileMenu;
