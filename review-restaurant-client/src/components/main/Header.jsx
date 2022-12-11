import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
				borderBottom: "2px solid #fa6342"}}>
				<div className="header-content d-flex flex-wrap align-items-center">
					<div className="logo">
						<Link to="/" title>
							<img src={logo} alt="" />
						</Link>
					</div>
					<nav>
						<ul>
							<li>
								<a className="active" href="/home" title>
									Home
								</a>
							</li>
							<li>
								<Link to="/explore" title>
									Khám phá
								</Link>
							</li>
							{
								user &&
									<li>
										<Link to="/timeline" title>
											Timeline
										</Link>
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
					<ul className="oth-lnks ml-auto">

						<li style={{color:"black"}}
							onClick={()=>{
								if(user)
									setOpenModal(true)
								else navigate('/login');
							}
						}
						>
							Viet Review
							<PostReviews openModal={openModal} setOpenModal={setOpenModal}/>
						</li>

						<li>
							{user ? (
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
							) : (
								<>
									<Link to="/register">Register</Link>
									<Link to="/login">Login</Link>
								</>

							)}
						</li>
					</ul>
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