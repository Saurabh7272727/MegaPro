import React, { useState } from 'react'
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { PiCaretDoubleDown } from 'react-icons/pi';
import { BsCaretDownSquare } from 'react-icons/bs';
const Header = () => {
    const [query, setQuery] = useState();
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const MenuClickHandler = () => {
        setMenu(!menu);
    }

    const changeHandler = (event) => {
        setQuery(event.target.value);
    }

    const keyHandler = (event) => {
        if (event.key === "Enter" && query.length >= 1) {
            navigate(`/Search/${query}`);
        }
    }
    return (
        <>
            <header>
                <div className="header_logo" >
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" onClick={() => navigate('/')} />
                </div>
                <div className="option_header">
                    <input list="text" placeholder='Search products and devices' onKeyUp={keyHandler} onChange={changeHandler} />
                    <h3 onClick={() => navigate("/productsPage")}><AiFillShop /> Products</h3>
                    <h3 onClick={() => navigate("/CartPage")}><PiShoppingCartSimpleBold /> Cart</h3>
                </div>
                <div className="hamger_part_mid">
                    <h3 onClick={MenuClickHandler}>{menu ? <PiCaretDoubleDown /> : <BsCaretDownSquare />}</h3>
                </div>
            </header>
            {
                menu ? <div className='hidden-menu-togler'>
                    <div className="option_header">
                        <input list="text" placeholder='Search products and devices' />
                        <h3><AiFillShop /> Products</h3>
                        <h3><PiShoppingCartSimpleBold /> Cart</h3>
                    </div>
                </div> : ""
            }
        </>
    )
}

export default Header;