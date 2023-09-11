import React from 'react'
import './DetailsPage.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Price from '../Price/Price';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { DataTransfer } from '../CartPage/ConnectionPage';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
const DetailsPage = () => {
    const mainData = useContext(DataTransfer);
    const navigate = useNavigate();
    const { Page } = useParams();
    // local states;
    const [counter, setCounter] = useState(1);
    const [message, setMessage] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showCard, setShowCart] = useState(false);
    // 
    const URL = ` https://fakestoreapi.com/products/${Page}`;
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchApi = async () => {
        try {
            await axios.get(URL, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                return res;
            }).then((e) => {
                setData(e?.data);
                setIsLoading(false);
            })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [Page]);

    const counterHandler = (tab) => {
        switch (tab) {
            case "plus":
                if (counter >= 5) {
                    alert("you Only buy only 5 items this projects");
                    setCounter(1);
                    setMessage(true);
                } else {
                    setCounter(counter + 1)
                }
                break;
            case "min":
                if (counter === 1) {
                    setCounter(1);
                    setMessage(false);
                } else {
                    setCounter(counter - 1)
                }
        }
    }
    const AddCartHandler = () => {
        if (counter === 1) {
            setShowMessage(true);
            mainData(data.image, data.title, counter, data.price * counter + 12, data.price, data.id);

        } else {
            setShowCart(true);
        }
    }
    setTimeout(() => {
        setShowMessage(false);
    }, 3000)


    const AddEnterHandler = () => {
        mainData(data.image, data.title, counter, data.price * counter + 12, data.price, data.id);
        navigate('/CartPage')
    }
    return (
        <>
            {
                showCard ?
                    <div className='show_card_section_details'>
                        <div className="details_of_products">
                            <img src={data?.image} alt="" />
                            <div className='details_of_products_details'>
                                <h1>{data.title}</h1>
                                <h2>Price :<Price price={data.price} /></h2>
                                <h2>Quantity : {counter}</h2>
                                <h4>Shiping Charge : <Price price={12} /></h4>
                                <h2>Total Amount : <Price price={data.price * counter + 12} /></h2>
                                <div>
                                    <button>BUY</button> <button onClick={AddEnterHandler}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="cancel_details_page">
                            <button onClick={() => setShowCart(false)}><MdCancel /></button>
                        </div>
                    </div> : ""
            }
            <div className="detailspage">
                <div className="img-section-details-page">
                    <img src={data?.image} alt="" />
                </div>
                <div className="description-details-page">
                    {
                        isLoading ?
                            <div className='details_page_loading'>
                                <div className="title"></div>
                                <div className="des"></div>
                                <div className="title"></div>
                                <div className="addtocart"></div>
                                <div className="counter"></div>
                            </div> :
                            <div className='details_main_descriptions_page'>
                                <h2>{data.title}</h2><br />
                                <h1>Price : <Price price={data.price} /></h1><br />
                                <span>Description : {data.description}</span>
                                <div className='details_about_page'>
                                    <h2>Category : {data.category}</h2>
                                    <h2><BsBookmarkStarFill />{data.rating.rate}</h2>
                                    <span>Overview : {data.rating.count}</span>
                                </div>
                                <div className='AddToCartCounter'>
                                    <button onClick={() => counterHandler("plus")}>+</button>
                                    <h2>{counter}</h2>
                                    <button onClick={() => counterHandler("min")}>-</button>
                                </div>
                                {
                                    message ? <p style={{ color: "red" }}>You cross the limit </p> : <p>You buy a products only five..</p>
                                }
                                <button className='buttonCArt' onClick={AddCartHandler}>Add To Cart</button>
                            </div>
                    }
                </div>
            </div>
            {
                showMessage ? <div className='show_mesaage'>ADDED Item!</div> : ""
            }

        </>
    )
}

export default DetailsPage;