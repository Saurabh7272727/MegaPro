import React, { useState, useEffect } from 'react'
import './ProductsPage.scss';
import ApifetchData from '../Server/ApiOne/ContextApi';
import axios from 'axios';
import Price from '../Price/Price';
import { useNavigate } from 'react-router-dom';
import NewContextApi from '../Server/ApiSecond/NewContextApi';

const ProductsPage = () => {
    const [data, setDatas] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [productsData, setData] = useState("products");
    const navigate = useNavigate();
    const { Newdata, newIsLoading } = NewContextApi("/products");
    console.log(Newdata);
    const URL = `https://fakestoreapi.com/${productsData}`
    const fetchData = async () => {
        try {
            await axios.get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then((res) => {
                return res;
            }).then((e) => {
                setDatas(e?.data);
                setIsLoading(false);
            })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [productsData])
    const ClickHandler = (tab) => {

        switch (tab) {
            case "AllItems":
                setData("products");
                break;
            case "electronics":
                setData("products/category/electronics");
                break;
            case "jewelery":
                setData("products/category/jewelery");
                break;
            case "men's clothing":
                setData("products/category/men's clothing");
                break;
            case "women's clothing":
                setData("products/category/women's clothing");
                break;
            default:
                setData("products/category/saurabh");
                break;
        }
    }
    return (
        <>
            <div className="products_page_section">
                <div className="category_section_products_section">
                    <h1 onClick={() => ClickHandler("AllItems")}>All Products</h1>
                    <button onClick={() => ClickHandler("electronics")}>electronics</button>
                    <button onClick={() => ClickHandler("jewelery")}>jewelery</button>
                    <button onClick={() => ClickHandler("men's clothing")}>men's clothing</button>
                    <button onClick={() => ClickHandler("women's clothing")}>women's clothing</button>
                </div>
                <div className="show_items_section_page">
                    {
                        isLoading ? <div className='loading_products'><h1>Loading...</h1></div> : <div className='product_chmaber'>
                            {
                                data?.map((e, index) => {
                                    return (
                                        <div className='product_chmaber_box' key={index} onClick={() => navigate(`/detailsPage/${e.id}`)}>
                                            <img src={e?.image} alt="" />
                                            <h4>{e?.title}</h4>
                                            <h4>Price : <Price price={e?.price} /></h4>
                                            <h5>Rating : {e?.rating.rate}</h5>
                                        </div>
                                    )
                                })
                            }
                            {
                                newIsLoading ? <div className='loading_products'><h1>Loading....</h1></div> : <div className='product_chmaber'>
                                    {
                                        Newdata?.slice(0, 28).map((e, index) => {
                                            return (
                                                <div className='product_chmaber_box' key={index} onClick={() => navigate(`/NewProducts/details/${e.id}`)}>
                                                    <img src={e?.thumbnail} alt="" />
                                                    <h4>{e?.title}</h4>
                                                    <h4>Price : <Price price={e?.price} /></h4>
                                                    <h5>Rating : {e?.rating}</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default ProductsPage;