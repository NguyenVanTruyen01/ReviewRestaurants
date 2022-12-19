import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { Modal, useMantineTheme } from '@mantine/core';
import {ToastContainer} from "react-toastify";

import {updateInfoRestaurant} from "../../redux/requestAPI/authRequests";

import { useForm } from '@mantine/form';
import {MultiSelect, NumberInput, TextInput, Button, Textarea, SimpleGrid} from '@mantine/core';


const UpdateRestaurantModal = ({openModal, setOpenModal,currentUser}) => {

    const theme = useMantineTheme();
    //---------------VALIDATE FORM INPUT-----------------------
    const form = useForm({
        initialValues: {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            userName: currentUser.userName,
            address: currentUser.address,
            infoRestaurant: {
                characteristics: currentUser.infoRestaurant.characteristics,
                menu: currentUser.infoRestaurant.menu,
                minPrice: currentUser.infoRestaurant.minPrice,
                maxPrice: currentUser.infoRestaurant.maxPrice,
                openTime: currentUser.infoRestaurant.openTime,
                closeTime: currentUser.infoRestaurant.closeTime,
                utilities:currentUser.infoRestaurant.utilities,
                facebook: currentUser.infoRestaurant.facebook,
                instagram: currentUser.infoRestaurant.instagram,
                introduce: currentUser.infoRestaurant.introduce,
            }
        },

        // functions will be used to validate values at corresponding key
        validate: {
            firstName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            lastName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            userName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            address: (value) => (value.length < 2 ? 'Please enter address' : null),
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

    //------------------XỬ LÝ FORM I4 RESTAURANT---------------------

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

    //------------------XỬ LÝ FORM I4 USER---------------------

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSummit = async (data,images) => {
        await updateInfoRestaurant(data,currentUser,images,dispatch);
        setOpenModal(false);
    };

    return (
        <div className= "RegisterPage">

            <Modal
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                size="xl"
                closeOnClickOutside={true}
                opened={openModal}
                onClose={() => setOpenModal(!openModal)}
            >
                <div className="group-form">
                    <div className= "form-in4">

                        <form
                            style={{display: "flex", flexDirection: "column", gap: "1rem"}}
                            onSubmit={form.onSubmit((values) => handleSummit(values,images) )}>

                            <span className="title title-re" >Cập nhật thông tin</span>

                            <div className="row-form">
                                <TextInput name="firstName" withAsterisk label="First Name" placeholder="First name" {...form.getInputProps('firstName')} />
                            </div>

                            <div className="row-form">
                                <TextInput name="lastName" withAsterisk label="Last Name" placeholder="Last Name" {...form.getInputProps('lastName')} />
                            </div>

                            <div className="row-form">
                                <TextInput name="userName" withAsterisk label="User Name" placeholder="Used to display on the website" {...form.getInputProps('userName')} />
                            </div>

                            <TextInput name="address" withAsterisk label="Address" placeholder="Address" {...form.getInputProps('address')} />


                            {/*IN4 RESTAURANT*/}

                            <MultiSelect
                                data={[
                                    { value: 1, label: 'Sống ảo' },
                                    { value: 2, label: 'Hẹn hò' },
                                    { value: 3, label: 'Làm việc' },
                                    { value: 4, label: 'Đọc sách' },
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
                            </div>

                            <div className="row-form">
                                <TextInput name="closeTime" type={"time"}
                                           withAsterisk  label="Close"
                                           {...form.getInputProps('infoRestaurant.closeTime')} />
                            </div>

                            <MultiSelect
                                data={[
                                    { value: 1, label: 'Wifi miễn phí' },
                                    { value: 2, label: 'Giứ xe' },
                                    { value: 3, label: 'Mang thú cưng' },
                                    { value: 4, label: 'Thanh toán bằng thẻ' },
                                    { value: 5, label: 'Điều hòa' },
                                    { value: 6, label: 'Bàn ngoài trời' },
                                    { value: 7, label: 'Chỗ chơi trẻ em' },
                                    { value: 8, label: 'Khu vực hút thuốc' },
                                    { value: 9, label: 'Chiếu bóng đá' },
                                    { value: 10, label: 'Giao hàng' },
                                    { value: 11, label: 'Mang đồ ăn ngoài' },
                                    { value: 12, label: 'Ăn vặt' },
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

                            </div>


                            <TextInput name="instagram"
                                       label="Instagram"
                                       placeholder="Restaurant's instagram link  "
                                       {...form.getInputProps('infoRestaurant.instagram')} />

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

                            <Button type="submit" mt="sm">
                                Submit
                            </Button>
                        </form>

                    </div>

                </div>

            </Modal>
        </div>
    );
};


export default UpdateRestaurantModal