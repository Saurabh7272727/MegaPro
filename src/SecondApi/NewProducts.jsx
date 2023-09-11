import React, { useState, useEffect } from 'react'
import './NewProducts.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './NewProducts.scss';
import Price from '../Price/Price';
import { MdOutlineEqualizer } from 'react-icons/md';
const NewProducts = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(1);
    const [show, setShow] = useState(false);
    const [img, setImg] = useState();
    const { page } = useParams();
    const URL = `https://dummyjson.com/products/${page}`;
    useEffect(() => {
        try {
            axios.get(URL, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                return res;
            }).then((e) => {
                setData(e.data);
                setIsLoading(false);
            })
        } catch (err) {
            console.error(err);
        }
    }, [])
    const CounterHnadler = (tab) => {
        switch (tab) {
            case "plus":
                if (counter === data.stock) {
                    setCounter(5);
                    alert("You limit the cross");
                } else {
                    setCounter(counter + 1);
                }
                break;
            case "min":
                if (counter === 1) {
                    setCounter(1);
                } else {
                    setCounter(counter - 1);
                }
        }
    }
    const AddToCartHanlder = () => {
        setShow(true);
    }
    setTimeout(() => {
        setShow(false);
    }, 3000)
    return (
        <>
            {
                show ? <div className='show_message_port'>
                    <div className="message_port">
                        <img src={data.thumbnail} alt="" />
                        <h2>Added in your Cart</h2>
                    </div>
                </div> : ""
            }
            {
                isLoading ? <div className='New_products_loading'><h2>Loading..</h2></div> : <div className='new_products_page'>
                    <div className="img_new_section_products">
                        <div className="img_multiple_img_section">
                            {
                                data?.images.map((e, index) => {
                                    return (
                                        <img key={index} src={e} onClick={() => setImg(e)}></img>
                                    )
                                })
                            }
                        </div>
                        <div className="main_img_tumbnamle">
                            <img src={img ? img : data.thumbnail} alt="" />
                        </div>
                    </div>
                    <div className="new_products_section_description">
                        <h2>{data.title}</h2>
                        <h5>Brand : {data.brand}</h5>
                        <h4>Description :</h4>
                        <h3>{data.description}</h3>
                        <h2>Price : <del><Price price={data.price} /></del> <ins><Price price={data.price - data.price * data.discountPercentage / 100} /></ins></h2>
                        <span className='new_products_page_counter'><button onClick={() => CounterHnadler("plus")}>+</button><h1>{counter}</h1><button onClick={() => CounterHnadler("min")}>-</button></span>
                        <div className='newCategory_about_section'>
                            <h2>Discount : {data.discountPercentage}%</h2>
                            <h2><MdOutlineEqualizer />{data.rating}</h2>
                            <h2>Stock : {data.stock ? data.stock : <h2 style={{ color: "red" }}>NO</h2>}</h2>
                        </div>
                        <div>
                        </div>
                        <button>Buy</button> <button onClick={AddToCartHanlder}>Add To Cart</button>
                    </div>
                </div>
            }
        </>

    )
}

export default NewProducts;