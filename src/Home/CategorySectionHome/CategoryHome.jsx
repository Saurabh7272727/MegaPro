import React from 'react'
import './CategoryHome.scss';
import { useNavigate } from 'react-router-dom';
const CategoryHome = () => {
    const navigate = useNavigate();
    const categoryClick = (tab) => {
        switch (tab) {
            case 'electronics':
                navigate("/category/electronics");
                break;
            case 'jewelery':
                navigate("/category/jewelery");
                break;
            case "men's clothing":
                navigate("/category/men's clothing");
                break;
            case "women's clothing":
                navigate("/category/women's clothing");
                break;
        }
    }
    return (
        <div className='category-section-home'>
            <div className="category-box-home" onClick={() => categoryClick("electronics")}>electronics</div>
            <div className="category-box-home" onClick={() => categoryClick("jewelery")}>jewelery</div>
            <div className="category-box-home" onClick={() => categoryClick("men's clothing")}>men's clothing</div>
            <div className="category-box-home" onClick={() => categoryClick("women's clothing")}>women's clothing</div>
        </div>
    )
}



export default CategoryHome