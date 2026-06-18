import React from "react";
import "./ProductCard.css";
import { Link } from "react-router";


const ProductsCard = ({ item , cart, setCart }) => {
  const addToCart = ()=>{
    const exists = cart.find((product)=>{
      product.id === item.id
    })
    {exists ? alert('already added') : setCart([...cart, item])}
  // setCart([...cart, item])

  }

// console.log(addToCart);

  return (

    <div className="product-card">


      <div className="product-image">

        <img 
          src={item.thumbnail}
          alt={item.title}
        />


        <span className="sale-badge">
          {item.discountPercentage}% OFF
        </span>


      </div>





      <div className="product-content">


        <h3 className="product-title">

          {item.title}

        </h3>




        <p className="product-description">

          {item.description.slice(0,70)}...

        </p>





        <div className="product-info">


          <span className="product-price">

            ${item.price}

          </span>



          <span className="rating">

            ⭐ {item.rating}

          </span>



        </div>





        <Link to={`/product/${item.id}`}>


          <button className="view-btn">

            View Details

          </button>


        </Link>
        <button className="view-btn" onClick={addToCart}>Add To Cart</button>



      </div>



    </div>

  );

};


export default ProductsCard;