import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProductsDetails.css";


const ProductsDetails = () => {

  const { id } = useParams();

  const [products, setProducts] = useState(null);


  useEffect(() => {

    axios(`https://dummyjson.com/products/${id}`)
      .then((res)=>{
        setProducts(res.data);
      });

  },[id]);



  if(!products){
    return <h1>Loading...</h1>
  }



  return (

    <div className="details-container">


      <div className="details-image">

        <img 
          src={products.thumbnail}
          alt={products.title}
        />

      </div>



      <div className="details-content">


        <h1 className="details-title">
          {products.title}
        </h1>


        <p className="details-category">
          {products.category}
        </p>



        <p className="details-description">
          {products.description}
        </p>



        <div className="details-price">

          ${products.price}

        </div>



        <div className="details-info">

          <span>
            ⭐ {products.rating}
          </span>


          <span>
            Stock: {products.stock}
          </span>


        </div>



        <button className="buy-btn">
          Add To Cart
        </button>


      </div>


    </div>

  )

}


export default ProductsDetails;