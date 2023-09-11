import React from 'react'
import './BannerHome.scss';
import { useRef } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const BannerHome = () => {
    const carouselContainer = useRef();
    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
    return (
        <div className='banner_home'>
            <div className='arrow-left' onClick={() => navigation("left")}><MdOutlineArrowBackIos /></div>
            <div className="img_ref_section" ref={carouselContainer}>
                <img className="img-section-banner" src="https://cdn.nitrogem.com/banners/flipkartindia_dbanner1597156572.png"></img>
                <img className="img-section-banner" src="https://static.vecteezy.com/system/resources/previews/002/188/559/original/horizontal-web-banner-with-push-button-yellow-liquid-abstract-shapes-on-purple-background-rounded-corner-banner-illustration-free-vector.jpg"></img>
                <img className="img-section-banner" src="https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Landing-page-banner-scaled.jpg"></img>
            </div>
            <div className='arrow-right' onClick={() => navigation("right")}><MdOutlineArrowForwardIos /></div>
        </div>
    )
}

export default BannerHome;