import React from 'react';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './FeaturedProduct.css';



const FeaturedProduct = () => {


    // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    //     <img src="https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/right-arrow.svg" alt="prevArrow" {...props}/> 

    // );

    // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    //     <img src="https://raw.githubusercontent.com/ShravanMeena/clone-of-wanderon-website/b133a937cc66bf0121455513c1d21728e1b86ca0/src/assets/right-arrow.svg" alt="nextArrow" {...props} />
    // );


    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style,  zIndex: '100', left: '20px'}}
    //             onClick={onClick}
    //         />
    //     );
    // }

    // function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, display: "block", background: "green" }}
    //             onClick={onClick}
    //         />
    //     );
    // }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        // prevArrow: <SlickArrowLeft />,
        // nextArrow: <SlickArrowRight />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }



    return (
        <div style={{ width: "80%", margin: '5%' }}>
            <h2> Responsive </h2>
            <Slider {...settings}>
                <div>
                    <h3>1zdf ad </h3>
                    <h3>1zdf ad </h3>
                    <h3>1zdf ad </h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>
        </div>
    );
};

export default FeaturedProduct;
