import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";
import MobileMenu from "../../components/main/MobileMenu";

const Register = () => {
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
								<Link href="/" title="">
									Home
								</Link>
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
						<div className="col-lg-7">
							<div className="delitaste-form text-center">
								<div className="lg-text">
									<h3>Sign Up With</h3>
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
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="first-name"
													placeholder="First name *"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="last-name"
													placeholder="Last name *"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="phone"
													placeholder="Phone number *"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="email"
													name="email"
													placeholder="Email *"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<h4 className="text-left">Password:</h4>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="password"
													name="password"
													placeholder="Password *"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="password"
													name="confirm-password"
													placeholder="Confirm password *"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<button type="submit" className="btn-default w-100">
													Create Account <span></span>
												</button>
											</div>
										</div>
									</div>
								</form>
								<div className="btm-tx">
									<span className="d-block">
										Already have an account?
										<a href="sign-in.html" title="">
											Log in
										</a>
									</span>
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

export default Register;
