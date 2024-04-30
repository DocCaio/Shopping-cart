import React, {useEffect, useState} from "react";

import './_Products.scss';
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard";


function Products() {

  const [products ,setProdutcs] = useState([]);

  useEffect(() => {
      fetchProducts('iphone').then((response) => {
      //console.log(products);
      setProdutcs(response);

    });
  }, []);

  return (
    <section className="products container">
      
      
     { products.map((product) => <ProductCard key={product.id} data={product}/>)}
       
    </section>
  )

}
export default Products;

