import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import ListProducts from "../../components/ListProducts/ListProducts";
import arrProducts from "./arrProducts";
import HeroCarousel from "../Home/HeroCarousel/HeroCarousel";
import Footer from "../../components/Footer/Footer";





export default function Products() {
  return (
    <div>
      {/* Loader nếu cần */}
      {/* <Loader /> */}

      <Navbar />
      <Search />
      <HeroCarousel />
      {/* CONTENT */}
      <ListProducts />


      <Footer />
    </div>
  );
}
