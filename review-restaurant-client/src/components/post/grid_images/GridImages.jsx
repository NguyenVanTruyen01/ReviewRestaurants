import React from 'react'
import "./GridImages.scss"

const GridImages = ({ images, setVisible }) => {

    let lengthImgs = images.length;

    if (lengthImgs > 5) {
        lengthImgs = 5;
    }

    if (lengthImgs < 6)
        return (
            <div className={`grid_images${lengthImgs}`}>

                {
                    images.map((img, index) => {
                        return (
                            <div className='image'>
                                <img src={img.url} alt="" onClick={() => setVisible(true)} />
                            </div>
                        )
                    })
                }

            </div >

        )
    else
        return <></>
}

export default GridImages
