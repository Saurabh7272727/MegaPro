import React from 'react'
import './HomeProducts.scss';
import Price from '../../Price/Price';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProducts = ({ data, Loading, error, title }) => {
    const navigate = useNavigate();

    const carouselContainer = useRef();
    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container?.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <>
            <h1 className='Home-products-h1'>{title}</h1>
            <div className='Home_top_products'>
                <AiOutlineArrowLeft className='left-arrow-home' onClick={() => navigation("left")} />
                {
                    Loading ? <div className='loading-home'><h1>Loading...</h1></div> : <div className='Top_rated_home_box' ref={carouselContainer}>
                        {
                            data?.map((e, index) => {
                                return (
                                    <div className='top_Rated_products' key={index} onClick={() => navigate(`/detailsPage/${e.id}`)}>
                                        <img src={e?.image} alt="" />
                                        <div className='h4'>
                                            <h4>{e.title}</h4>
                                            <h3>Price : <Price price={e.price} /></h3><span><BsFillBookmarkStarFill /> {e.rating.rate}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <AiOutlineArrowRight className='left-arrow-home' onClick={() => navigation("right")} />
            </div>
        </>
    )
}

export default HomeProducts;