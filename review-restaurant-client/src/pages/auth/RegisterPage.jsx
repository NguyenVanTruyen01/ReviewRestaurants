import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";
import MobileMenu from "../../components/main/MobileMenu";
import {useDispatch} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./RegisterPage.scss"

import {register} from "../../redux/requestAPI/authRequests";

import { useForm } from '@mantine/form';
import {MultiSelect, PasswordInput, NumberInput, TextInput, Button, Radio, Textarea, SimpleGrid} from '@mantine/core';


const RegisterPage = () => {

	const [openFormRes,setOpenFormRes] = useState(false);

	//---------------VALIDATE FORM INPUT-----------------------
	const form = useForm({
		initialValues: {
			firstName: '',
			lastName: '',
			userName:'',
			email: '',
			password: '',
			confirmPassword: '',
			address:'',
			gender: 'male',
			role : 'REVIEWER',
			infoRestaurant: {
				characteristics: [],
				menu: [],
				minPrice: 0,
				maxPrice: 0,
				openTime: null,
				closeTime: null,
				utilities:[],
				facebook: "",
				instagram: "",
				introduce: "",
			}
		},

		// functions will be used to validate values at corresponding key
		validate: {
			firstName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
			lastName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
			userName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			address: (value) => (value.length < 2 ? 'Please enter address' : null),
			password: (value) => (value.length < 6 ? 'Password must be more than 6 characters' : null),
			confirmPassword: (value, values) =>
				value !== values.password ? 'Passwords did not match' : null,
			infoRestaurant: {
				characteristics: (value, values) => ( values.role === "RESTAURANT" && value.length <1  ? 'Please choose characteristics of restaurant ' : null),
				openTime: (value, values) =>
					values.role === "RESTAURANT" && value === null ? 'Please select opening hours' : null,
				closeTime: (value, values) =>
					values.role === "RESTAURANT" && value === null ? 'Please select close hours' : null,
				introduce: (value,values) =>  ( values.role === "RESTAURANT" && value.length < 30 ? 'Name must have at least 30 letters' : null),
			}


		},
	});

	//------------------X??? L?? FORM I4 RESTAURANT---------------------
	// const [content,setContent] = useState("");

	const [images,setImages] = useState([]);

	const deleteImages = (index) =>{
		const newArr = [...images]
		newArr.splice(index,1);
		setImages(newArr)
	}

	const handleOnChangeImage = (e)=>{
		const files = [...e.target.files]
		console.log(...e.target.files)

		let err = "";
		let newImages = [];

		files.forEach((file)=>{
			if(!file) return err = "File does not exist"
			if(file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg")
				return err = "Image format is incorrect"
			return newImages.push(file)
		})

		if(err){
			console.log(err)
		}
		else
			setImages([...images, ...newImages]);

	}

	//------------------X??? L?? FORM I4 USER---------------------

	const [data, setData] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		address: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value.trim() });
	};

	const  validateInput = (data) =>{
		const isEmpty = Object.values(data).some(x => x === null || x === '');
		return isEmpty
	}

	const handleSummit = async (data,images) => {

		await register(data,images,dispatch,navigate);
	};

	return (
		<>
			<Header></Header>

			<div className= "RegisterPage">
				<ToastContainer autoClose={2000} />

				<div className="group-form">
					<div className= "form-in4">
						<span className="title title-re">User information</span>
						<form onSubmit={form.onSubmit((values) => handleSummit(values,images) )}>

							<div className="row-form">
								<TextInput name="firstName" withAsterisk label="First Name" placeholder="First name" {...form.getInputProps('firstName')} />
								<TextInput name="lastName" withAsterisk label="Last Name" placeholder="Last Name" {...form.getInputProps('lastName')} />
							</div>

							<div className="row-form">
								<TextInput name="userName" withAsterisk label="User Name" placeholder="Used to display on the website" {...form.getInputProps('userName')} />
								<TextInput name="email" withAsterisk  label="Email" placeholder="Email will be used to login  " {...form.getInputProps('email')} />
							</div>

							<TextInput name="address" withAsterisk label="Address" placeholder="Address" {...form.getInputProps('address')} />

							<div className="row-form">
								<PasswordInput
									label="Password"
									placeholder="Password"
									{...form.getInputProps('password')}
								/>

								<PasswordInput
									label="Confirm password"
									placeholder="Confirm password"
									{...form.getInputProps('confirmPassword')}
								/>
							</div>


							<div className="row-form">
								<Radio.Group
									name="gender"
									orientation="vertical"
									label="Gender"
									spacing="xs"
									withAsterisk
									{...form.getInputProps('gender')}
								>
									<Radio value="male" label="Male" />
									<Radio value="female" label="Female" />
								</Radio.Group>

								<Radio.Group
									name="role"
									orientation="vertical"
									label="Role"
									spacing="xs"
									withAsterisk
									{...form.getInputProps('role')}
								>
									<Radio value="REVIEWER" label="REVIEWER"
										   onClick={()=> setOpenFormRes(false)}/>
									<Radio value="RESTAURANT" label="RESTAURANT"
									onClick={()=> setOpenFormRes(true)}/>
								</Radio.Group>
							</div>

							<Button type="submit" mt="sm">
								Submit
							</Button>
						</form>

					</div>

					{
						openFormRes &&
						<div className= "form-in4">
							<span className="title title-re">Restaurant information</span>
							<form onSubmit={form.onSubmit(console.log)}>

								<MultiSelect
									data={[
										{ value: 1, label: 'S???ng ???o' },
										{ value: 2, label: 'H???n h??' },
										{ value: 3, label: 'L??m vi???c' },
										{ value: 4, label: '?????c s??ch' },
										{ value: 5, label: 'Chill' },
									]}
									label="Characteristics"
									name="characteristics"
									clearable
									placeholder="Pick all characteristics of your restaurant"
									{...form.getInputProps('infoRestaurant.characteristics')}
								/>

								<div className="row-form">
									<NumberInput
										label="Min Price"
										name="minPrice"
										defaultValue={0}
										parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
										formatter={(value) =>
											!Number.isNaN(parseFloat(value))
												? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
												: ''
										}
										{...form.getInputProps('infoRestaurant.minPrice')}
									/>

									<NumberInput
										label="Max Price"
										name='maxPrice'
										defaultValue={1000}
										parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
										formatter={(value) =>
											!Number.isNaN(parseFloat(value))
												? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
												: ''
										}
										{...form.getInputProps('infoRestaurant.maxPrice')}
									/>

								</div>

								<div className="row-form">

									<TextInput name="openTime" type={"time"}
											   withAsterisk  label="Open"
											   {...form.getInputProps('infoRestaurant.openTime')} />

									<TextInput name="closeTime" type={"time"}
											   withAsterisk  label="Close"
											   {...form.getInputProps('infoRestaurant.closeTime')} />
								</div>

								<MultiSelect
									data={[
										{ value: 1, label: 'Wifi mi???n ph??' },
										{ value: 2, label: 'Gi??? xe' },
										{ value: 3, label: 'Mang th?? c??ng' },
										{ value: 4, label: 'Thanh to??n b???ng th???' },
										{ value: 5, label: '??i???u h??a' },
										{ value: 6, label: 'B??n ngo??i tr???i' },
										{ value: 7, label: 'Ch??? ch??i tr??? em' },
										{ value: 8, label: 'Khu v???c h??t thu???c' },
										{ value: 9, label: 'Chi???u b??ng ????' },
										{ value: 10, label: 'Giao h??ng' },
										{ value: 11, label: 'Mang ????? ??n ngo??i' },
										{ value: 12, label: '??n v???t' },
									]}
									label="Utilities"
									name="utilities"
									clearable
									placeholder="Pick all utilities of your restaurant"
									{...form.getInputProps('infoRestaurant.utilities')}
								/>



								<Textarea
									placeholder="Introduce your restaurant"
									withAsterisk
									label="Introduce"
									{...form.getInputProps('infoRestaurant.introduce')}
								/>

								<div className="row-form">
									<TextInput name="facebook"
											   label="Facebook"
											   placeholder="Restaurant's facebook link"
											   {...form.getInputProps('infoRestaurant.facebook')} />

									<TextInput name="instagram"
											   label="instagram"
											   placeholder="Restaurant's instagram link  "
											   {...form.getInputProps('infoRestaurant.instagram')} />
								</div>

								<div  className="row-form">
									<div className="row-img">
										<div className="input_image">
											<label>
												<i className="fa fa-camera"></i>
												<input type="file" name = "file" id={"file"}
													   multiple accept="image/*"
													   onChange={handleOnChangeImage}
												/>
											</label>
										</div>
										<SimpleGrid
											cols={4}
											breakpoints={[
												{ maxWidth: 980, cols: 3, spacing: 'md' },
												{ maxWidth: 755, cols: 2, spacing: 'sm' },
												{ maxWidth: 600, cols: 1, spacing: 'sm' },
											]}
											className="show-img"
										>
											{
												images.map((img,index) => {
													return (
														<div key={index}
															 className="grid-img"
															 id="file_img"
															 style={{width: "128px", height: "128px" ,gap:0}} >

															<img src={URL.createObjectURL(img)}
																 alt={"images"}
																 style={{objectFit: "cover",width: "128px", height: "128px"}}
															/>
															<span
																className="delete-img"
																onClick={()=>deleteImages(index)}
															><i className="fas fa-times"></i></span>
														</div>
													)

												})
											}
										</SimpleGrid>
									</div>
								</div>
							</form>
						</div>
					}



				</div>





				{/*<Header />*/}

				{/*<MobileMenu />*/}

				{/*<section className="pager-section text-center">*/}
				{/*	<div className="fixed-bg bg4"></div>*/}
				{/*	<div className="container">*/}
				{/*		<div className="pager-head">*/}
				{/*			<h2>Sign In</h2>*/}
				{/*			<ul>*/}
				{/*				<li>*/}
				{/*					<Link href="/" title="">*/}
				{/*						Home*/}
				{/*					</Link>*/}
				{/*				</li>*/}
				{/*				<li>*/}
				{/*					<span>Sign in</span>*/}
				{/*				</li>*/}
				{/*			</ul>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}

				{/*<section className="sec-block">*/}
				{/*	<div className="container">*/}
				{/*		<div className="row justify-content-center">*/}
				{/*			<div className="col-lg-7">*/}
				{/*				<div className="delitaste-form text-center">*/}
				{/*					<div className="lg-text">*/}
				{/*						<h3>Sign Up With</h3>*/}
				{/*						<ul className="social">*/}
				{/*							<li>*/}
				{/*								<a className="facebook" href="#" title="">*/}
				{/*									<i className="fab fa-facebook-f"></i>*/}
				{/*								</a>*/}
				{/*							</li>*/}
				{/*							<li>*/}
				{/*								<a className="linkedin" href="#" title="">*/}
				{/*									<i className="fab fa-linkedin"></i>*/}
				{/*								</a>*/}
				{/*							</li>*/}
				{/*							<li>*/}
				{/*								<a className="twitter" href="#" title="">*/}
				{/*									<i className="fab fa-twitter"></i>*/}
				{/*								</a>*/}
				{/*							</li>*/}
				{/*							<li>*/}
				{/*								<a className="google" href="#" title="">*/}
				{/*									<i className="fab fa-google"></i>*/}
				{/*								</a>*/}
				{/*							</li>*/}
				{/*						</ul>*/}
				{/*					</div>*/}
				{/*					<div className="or">*/}
				{/*						<span>or</span>*/}
				{/*					</div>*/}
				{/*					<form onSubmit={handleSummit}>*/}
				{/*						<div className="row">*/}
				{/*							<div className="col-md-6">*/}
				{/*								<div className="form-group">*/}
				{/*									<input*/}
				{/*										type="text"*/}
				{/*										name="firstName"*/}
				{/*										placeholder="First name *"*/}
				{/*										className="form-control"*/}
				{/*										onInput={handleChange}*/}
				{/*									/>*/}
				{/*								</div>*/}
				{/*							</div>*/}
				{/*							<div className="col-md-6">*/}
				{/*								<div className="form-group">*/}
				{/*									<input*/}
				{/*										type="text"*/}
				{/*										name="lastName"*/}
				{/*										placeholder="Last name *"*/}
				{/*										className="form-control"*/}
				{/*										onInput={handleChange}*/}
				{/*									/>*/}
				{/*								</div>*/}
				{/*							</div>*/}
				{/*							<div className="col-md-6">*/}
				{/*								<div className="form-group">*/}
				{/*									<input*/}
				{/*										type="text"*/}
				{/*										name="address"*/}
				{/*										placeholder="Address *"*/}
				{/*										className="form-control"*/}
				{/*										onInput={handleChange}*/}
				{/*									/>*/}
				{/*								</div>*/}
				{/*							</div>*/}
				{/*							<div className="col-md-6">*/}
				{/*								<div className="form-group">*/}
				{/*									<input*/}
				{/*										type="email"*/}
				{/*										name="email"*/}
				{/*										placeholder="Email *"*/}
				{/*										className="form-control"*/}
				{/*										onInput={handleChange}*/}
				{/*									/>*/}
				{/*								</div>*/}
				{/*							</div>*/}
				{/*						</div>*/}
				{/*						<h4 className="text-left">Password:</h4>*/}
				{/*						<div className="row">*/}
				{/*							<div className="col-md-6">*/}
				{/*								<div className="form-group">*/}
				{/*									<input*/}
				{/*										type="password"*/}
				{/*										name="password"*/}
				{/*										placeholder="Password *"*/}
				{/*										className="form-control"*/}
				{/*										onInput={handleChange}*/}
				{/*									/>*/}
				{/*								</div>*/}
				{/*							</div>*/}
				{/*							<div className="col-md-6">*/}
				{/*								<div className="form-group">*/}
				{/*									<input*/}
				{/*										type="password"*/}
				{/*										name="confirm-password"*/}
				{/*										placeholder="Confirm password *"*/}
				{/*										className="form-control"*/}
				{/*									/>*/}
				{/*								</div>*/}
				{/*							</div>*/}
				{/*							<div className="col-md-12">*/}
				{/*								<div className="form-group">*/}
				{/*									<button type="submit" className="btn-default w-100">*/}
				{/*										Create Account <span></span>*/}
				{/*									</button>*/}
				{/*								</div>*/}
				{/*							</div>*/}
				{/*						</div>*/}
				{/*					</form>*/}
				{/*					<div className="btm-tx">*/}
				{/*						<span className="d-block">*/}
				{/*							Already have an account?*/}
				{/*							<Link to="/login"> Login </Link>*/}
				{/*						</span>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}

				{/*<Footer />*/}

			</div>
		</>

	);
};

export default RegisterPage;
