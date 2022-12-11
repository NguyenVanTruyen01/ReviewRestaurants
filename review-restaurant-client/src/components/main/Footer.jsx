import React from "react";
import imgPayment from "../../assets/images/imgs.png";
import btn1 from "../../assets/images/btn1.png";
import btn2 from "../../assets/images/btn2.png";
import logo from "../../assets/images/logo.png";
import "./Footer.scss"

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div class="top-footer">
					<div class="fixed-bg bg3"></div>
					<div class="phone-div">
						<div class="border-circle">
							<div class="phone-circle">
								<a href="#" title="" class="ext-link"></a>
								<svg
									width="40"
									height="40"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1113 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.9881 11.4891 17.1118 9.32498 15.7084C7.31151 14.4289 5.60443 12.7218 4.32498 10.7084C2.91663 8.53436 2.04019 6.05919 1.76665 3.48336C1.74583 3.25291 1.77321 3.02066 1.84707 2.80138C1.92092 2.5821 2.03963 2.3806 2.19562 2.20971C2.35162 2.03882 2.54149 1.90228 2.75314 1.80879C2.9648 1.7153 3.1936 1.66691 3.42499 1.66669H5.92498C6.32941 1.66271 6.72148 1.80592 7.02812 2.06964C7.33476 2.33335 7.53505 2.69956 7.59165 3.10002C7.69717 3.90008 7.89286 4.68563 8.17498 5.44169C8.2871 5.73996 8.31137 6.06412 8.24491 6.37576C8.17844 6.6874 8.02404 6.97345 7.79998 7.20002L6.74165 8.25836C7.92795 10.3446 9.65536 12.0721 11.7417 13.2584L12.8 12.2C13.0266 11.976 13.3126 11.8216 13.6242 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4084C17.3048 12.4655 17.6745 12.6694 17.9388 12.9813C18.203 13.2932 18.3435 13.6913 18.3333 14.1Z"
										stroke="#fff"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-3 col-md-6">
								<div class="widget widget-about">
									<img src={logo} alt="" />

									<div className="cooperate">
										<i className="fas fa-hands-helping"></i>
										<span>Hợp tác với chúng tôi</span>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-6">
								<div class=" about-us widget widget-contact text-center">
									<h2>
										<span>Về chúng tôi</span>
									</h2>
									<p>Giới thiệu</p>
									<p>Liên hệ - góp ý</p>
									<p>Điều khoản sử dụng</p>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div className=" contact widget widget-contact text-center">
									<h2>
										<span>Theo dõi</span>
									</h2>
									<div>
										<i className="fab fa-facebook-f"></i>
										<p>Facebook</p>
									</div>

									<div>
										<i className="fab fa-instagram"></i>
										<p>Instagram</p>
									</div>

									<div>
										<i className="fab fa-twitter"></i>
										<p>Twitter</p>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
