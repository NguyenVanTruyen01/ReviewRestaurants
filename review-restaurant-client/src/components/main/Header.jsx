import React, {useState} from 'react';
import { NavLink,Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../redux/requestAPI/authRequests';
import {getProfileUser} from '../../redux/requestAPI/userRequests'
import PostReviews from "../../modals/post_reviews/PostReviews";

const Header = () => {
	const user = useSelector((state) => state.auth.login.currentUser);
	const token = useSelector((state) => state.auth.login?.access_token);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [openModal,setOpenModal] =  useState(false);

	const handleLogout = async () => {
		await logout(token, user._id, dispatch, navigate);
	};

	return (
		<header style={{width: "100%", height: "66px"}}>
			<div className="container-fluid" style={{position:"fixed",
				zIndex: 10,
				background:"#ffffff",
				borderBottom: "2px solid #d8ab37"}}>
				<div className="header-content d-flex flex-wrap align-items-center">
					<div className="logo">
						<Link to="/" title>
							<img src={logo} alt="" />
						</Link>
					</div>

					<div className="nav"
						 style={{display: "flex",
							 justifyContent: "space-between",
							 flex: 1
						 }}>
						<nav>
							<ul>
								<li>
									<NavLink to="/home" title>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to="/explore" title>
										Khám phá
									</NavLink>
								</li>
								{
									user &&
									<li>
										<NavLink to="/timeline" title>
											Timeline
										</NavLink>
									</li>
								}
							</ul>
						</nav>
						{/*navigation end*/}
						<div className="menu-btn">
							<span className="bar1" />
							<span className="bar2" />
							<span className="bar3" />
						</div>

						{/*menu-bar end*/}
						<nav>
							<ul className="oth-lnks ml-auto">

								<li style={{color:"black", cursor: "pointer"}}
									onClick={()=>{
										if(user)
											setOpenModal(true)
										else navigate('/login');
									}
									}
								>
									Viết Review
									<PostReviews openModal={openModal} setOpenModal={setOpenModal}/>
								</li>

								{ user ? (
									<li>
										<>
												<img src={user.avatar} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="" />
												<a  title className="cart-ico" href={`/profile/${user._id}`}
												>
													Hi,{user.userName}
												</a>
												<i className="fal fa-sign-out-alt"
												   style={{fontSize: "20px", cursor: "pointer"}}
												   onClick={handleLogout} ></i>
											</>
									</li>

									) : (
										<>
											<li>
												<NavLink to="/register">Register</NavLink>
											</li>
											<li>
												<NavLink to="/login">Login</NavLink>
											</li>

										</>

									)}
							</ul>

						</nav>

					</div>

				</div>
				<div className="search-bar">
					<div className="container">
						<form></form>
						<input type="text" name="search" placeholder="Search" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;