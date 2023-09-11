import React from 'react'
import BannerHome from './BannerHome/BannerHome';
import HomeProducts from './HomeProducts/HomeProducts';
import CategoryHome from './CategorySectionHome/CategoryHome';
import ApifetchData from '../Server/ApiOne/ContextApi';

const Home = () => {
    const { data, isLoading, error } = ApifetchData("/category/electronics");
    return (
        <>
            <CategoryHome />
            <BannerHome />
            <HomeProducts data={data} Loading={isLoading} error={error} title={"Top Rated"} />
        </>
    )
}

export default Home;