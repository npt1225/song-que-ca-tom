
import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import Features from "./Features/Features";
import ListProducts from "../../components/ListProducts/ListProducts";
import Promotions from "../../components/Promotions/Promotions";
import Menu from "./Menu/Menu";
import HomeSections from "./HomeSections/HomeSections";
import Facts from "./Facts/Facts";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return (
        <div>
            <Loader />
            <Navbar />
            <Search />
            <HeroCarousel />
            <Features />
            <ListProducts />
            <Promotions />
            <Menu />
            <HomeSections />
            <Facts />
            <Footer />
        </div>
    );
}

