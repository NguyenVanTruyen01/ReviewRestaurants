import React from 'react';
import { Image } from 'antd';
const SliderImages = ({ images, visible, setVisible }) => {
    console.log("dsa")
    // const [scaleStep, setScaleStep] = useState(0.5);
    return (
        <div
            style={{
                display: 'none',
            }}
        >
            <Image.PreviewGroup
                preview={{
                    visible,
                    onVisibleChange: (value) => {
                        setVisible(value);
                    },
                }}
            >
                {
                    images.map((image, index) => {
                        return (
                            <Image
                                style={{
                                    display: 'none',
                                }}
                                src={image.url}
                            />
                        )
                    })
                }
            </Image.PreviewGroup>

        </div>
    );
};
export default SliderImages;