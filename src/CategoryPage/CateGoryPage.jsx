import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './CateGoryPage.scss';
import axios from 'axios';
import Price from '../Price/Price';
import { useNavigate } from 'react-router-dom';
const CateGoryPage = () => {
    const { page } = useParams();
    const [data, setDatas] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const URL = `https://fakestoreapi.com/products/category/${page}`;
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
    }, [])

    return (
        <>
            <h2>Category/{page}</h2>
            {
                isLoading ? <div className='category_loading'><h1>Loading....</h1></div> : <div className='category_section_boxes'>
                    {
                        data?.map((e, index) => {
                            return (
                                <div className='category_section_box' key={index} onClick={() => navigate(`/detailsPage/${e.id}`)}>
                                    <img src={e.image} alt="" />
                                    <h3>{e.title}</h3>
                                    <h4>Price : <Price price={e.price} /></h4>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

export default CateGoryPage;