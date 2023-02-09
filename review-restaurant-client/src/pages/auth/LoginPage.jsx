import React, { useState } from "react";

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
import Footer from "../../components/main/Footer";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/requestAPI/authRequests"

const LoginPage = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSummit = async (e) => {
		e.preventDefault();
		await login(data, dispatch, navigate)
	};

	return (
		<div>
			<Header />
			<MobileMenu />

			<section className="sec-block">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div className="delitaste-form text-center">
								<div className="lg-text">
									<h3>Log In</h3>
									{/* <ul className="social">
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
									</ul> */}
								</div>

								<form onSubmit={handleSummit}>
									<div className="form-group">
										<input
											type="text"
											name="email"
											placeholder="Email *"
											className="form-control"
											onInput={handleChange}
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											name="password"
											placeholder="Password *"
											className="form-control"
											onInput={handleChange}
										/>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="btn-default w-100"
										>
											Log In <span></span>
										</button>
									</div>
								</form>
								<div className="btm-tx text-left">
									<span>
										No account?
										<Link to="/register"> Register now </Link>
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
		</div>
	);
};

export default LoginPage;
