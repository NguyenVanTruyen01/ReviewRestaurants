import React, { useState } from "react";

import "../../assets/css/all.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/js/lib/slick/slick.css";
import "../../assets/js/lib/slick/slick-theme.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

import "../../assets/js/scripts";

import { login } from "../../api/AuthAPI";
import Header from "../../components/main/Header";
import MobileMenu from "../../components/main/MobileMenu";
import Footer from "../../components/main/Footer";

const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		console.log(e.target.value);
	};

	const handleSummit = async (e) => {
		e.preventDefault();
		const user = await login(data);
		console.log(user.data);
	};

	return (
		<div>
			<Header />
			<MobileMenu />
			<section className="pager-section text-center">
				<div className="fixed-bg bg4"></div>
				<div className="container">
					<div className="pager-head">
						<h2>Sign In</h2>
						<ul>
							<li>
								<a href="#" title="">
									Home
								</a>
							</li>
							<li>
								<span>Sign in</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="sec-block">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div className="delitaste-form text-center">
								<div className="lg-text">
									<h3>Log In With</h3>
									<ul className="social">
										<li>
											<a className="facebook" href="#" title="">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li>
											<a className="linkedin" href="#" title="">
												<i className="fab fa-linkedin"></i>
											</a>
										</li>
										<li>
											<a className="twitter" href="#" title="">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li>
											<a className="google" href="#" title="">
												<i className="fab fa-google"></i>
											</a>
										</li>
									</ul>
								</div>
								<div className="or">
									<span>or</span>
								</div>
								<form>
									<div className="form-group">
										<input
											type="text"
											name="name"
											placeholder="Username or Email *"
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											name="password"
											placeholder="Password *"
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<button type="submit" className="btn-default w-100">
											Log In <span></span>
										</button>
									</div>
								</form>
								<div className="btm-tx text-left">
									<span>
										No account?
										<a href="sign-up.html" title="">
											Register now
										</a>
									</span>
									<a href="#" title="">
										Forgot password?
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Login;
