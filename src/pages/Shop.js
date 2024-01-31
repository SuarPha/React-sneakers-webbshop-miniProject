import React, { useContext } from "react";
import Layout from "../components/shared/Layout";
import FeaturedProduct from "../components/shared/FeaturedProduct";
import { ProductsContext } from "../components/context/ProductsContext";
import "./shop.css";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct { ...product } key={product.id} />
  ));

  return (
    <Layout>
      <div className="product-container">
        <h1 className="page-title">Shop</h1>
        <hr/>
        <div className="products">{allProducts}</div>
      </div>
    </Layout>
  );
};

export default Shop;
    
