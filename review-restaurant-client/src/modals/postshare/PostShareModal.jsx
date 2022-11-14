import React, {useState,useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Modal, useMantineTheme ,Textarea ,Button, SimpleGrid } from '@mantine/core';
import "./PostShareModal.css"
import {createPost} from "../../redux/requestAPI/postRequests"
import {imageUpload} from "../../utils/imageUpload";

const PostShareModal = ()=>{
    const theme = useMantineTheme();

    const dispatch = useDispatch();

    const {currentUser, access_token} = useSelector(state => state.auth?.login);

    const [openModal,setOpenModal] =  useState(false);

    const [content,setContent] = useState("");

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

        console.log(images)
    }

    const handleSharePost = async ()=>{
       const media =  await createPost( currentUser._id, currentUser._id, content,images,dispatch, access_token);
       setOpenModal(!openModal)
    }


return (
    <>
        <button onClick={()=>setOpenModal(!openModal)}>
            {currentUser.lastName}, what are you thinking?
        </button>

        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={"50%"}
            closeOnClickOutside={true}
            opened={openModal}
            onClose={() => setOpenModal(!openModal)}
        >

            <Textarea
                placeholder="What are you thinking ?"
                withAsterisk
                onChange={(e)=>setContent(e.target.value)}
            />


            <div className="input_image">
                <input type="file" name = "file" id={"file"}
                       multiple accept="image/*"
                       onChange={handleOnChangeImage}/>
            </div>


            <SimpleGrid
                cols={3}
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
                                 id="file_img"
                                 style={{width: "128px", height: "128px"}} >
                                <img src={URL.createObjectURL(img)}
                                     alt={"images"}
                                     style={{objectFit: "cover",width: "128px", height: "128px"}}
                                />
                                <span
                                    onClick={()=>deleteImages(index)}
                                >&times;</span>
                            </div>
                            )

                })
                }
            </SimpleGrid>


            <Button variant="gradient"
                    gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                    onClick={handleSharePost}
            >Share post</Button>

        </Modal>
    </>

    )
}

export default PostShareModal


// //Share man hinh
// const handleStream = ()=>{
//     setStream(true);
//     if(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia){
//         navigator.mediaDevices.getDisplayMedia({video: true})
//             .then(mediaStream =>{
//                 videoRef.current.srcObject = mediaStream
//                 videoRef.current.play()
//                 const track = mediaStream.getTracks();
//                 setTracks(track[0]);
//             })
//             .catch((err) => console.log(err))
//     }
// }