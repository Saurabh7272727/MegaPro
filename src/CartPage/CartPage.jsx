import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { CartPageNew } from './ConnectionPage';
import "./CartPage.scss";
import Price from '../Price/Price';
import { DeleteItems } from './ConnectionPage';
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
    const [show, setShow] = useState();
    const data = useContext(CartPageNew);
    const deleteitems = useContext(DeleteItems);
    const navigate = useNavigate();
    const DeleteHandler = (id) => {
        deleteitems((saurabh) => {
            return saurabh.filter((curElem, index) => {
                return index !== id
            })
        })
    }
    console.log(data.id);
    return (
        <>
            <div className='Cart_page_main_section'>
                {data.length >= 1 ?
                    <div className="items_details">
                        {
                            data.map((e, index) => {
                                return (
                                    <div className='items_box' key={index}>
                                        <img src={e.img} alt="" onClick={() => navigate(`/detailsPage/${e.id}`)} />
                                        <div className="details_of_items">
                                            <h3>{e.title}</h3>
                                            <h4>Quantity : {e.counter}</h4>
                                            <h4>Price : <Price price={e.price} /></h4>
                                            <p>Total Amount : <Price price={e.totalamount} /></p>
                                        </div>
                                        <button onClick={() => DeleteHandler(index)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div> : ""}
                <div className="items_bill_payement">
                    <h2 style={{ color: "red" }}>You Added in cart  {data.length > 1 ? data.length - 1 : "No"} items</h2>
                    <img src="https://purepng.com/public/uploads/medium/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png" alt="" />
                    <button>Check Orders</button>
                </div>
            </div>

        </>
    )
}

export default CartPage;