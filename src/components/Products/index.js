import React, {useEffect, useState} from "react";

import './_Products.scss';
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard";
import Loading from "../Loading";



function Products() {

  const [products ,setProdutcs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetchProducts('iphone').then((response) => {
      //console.log(products);
      setProdutcs(response);
      setLoading(false);

    });
  }, []);

  return (
    (loading && <Loading/>  ) ||  (
   
     <section className="products container">
      
      
    { products.map((product) => <ProductCard key={product.id} data={product}/>)}
      
   </section>  )
 
  )

}
export default Products;

