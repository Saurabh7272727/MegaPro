import React from 'react'
import './SearchPage.scss';
import { useParams } from 'react-router-dom';
import ContextApi from './Server/ContextApi';
import Price from '../Price/Price';
import { MdOutlineEqualizer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const SearchPage = () => {
    const { query } = useParams();
    const { data, isLoading } = ContextApi(`${query}`);
    const navigate = useNavigate();
    return (
        <>
            <div className="search_page_details">
                <h2>Search/{query}</h2>
                {
                    isLoading ? <div className='loading_search'><img src="https://icon-library.com/images/free-loading-icon/free-loading-icon-14.jpg" alt="" /></div> : <div className='search_boxes_items'>
                        {
                            data?.map((e, index) => {
                                return (
                                    <div className='items_box_search' key={index} onClick={() => navigate(`/NewProducts/details/${e.id}`)}>
                                        <img src={e?.thumbnail} alt="" />
                                        <h3>{e?.title}</h3>
                                        <h4>Price : <Price price={e?.price} /></h4>
                                        <div className='search_about_box'>
                                            <h5>Brand : {e?.brand}</h5> <p><MdOutlineEqualizer />{e.rating}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default SearchPage;