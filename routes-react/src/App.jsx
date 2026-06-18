import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./App.css";
import axios from "axios";
import ProductsCard from "./components/ProductsCard";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";


const App = () => {


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([])



  useEffect(() => {


    axios("https://dummyjson.com/products")

      .then((res) => {

        setData(res.data.products);

        console.log(res.data.products);

      })


      .catch((err) => {

        setError(true);

        console.log(err);

      })


      .finally(() => {

        setLoading(false);

      });



  }, []);





  return (
    

    <>


      {/* NAVBAR */}

      <nav className="navbar">


        <div className="logo">

          <h2>
            MyStore
          </h2>

        </div>



        <ul className="nav-links">


          <li>
            <Link to="/">
              Home
            </Link>
          </li>


          <li>
            <Link to="/about">
              About
            </Link>
          </li>


          <li>
            <Link to="/services">
              Services
            </Link>
          </li>


          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>


          <li>
            <Link to="/Dashbord">
              Dashboard
            </Link>
          </li>


        </ul>



        <button className="nav-btn">

          Shop Now

        </button>
       <Link to="/cart"> <h2>Cart: {cart.length}</h2>  </Link>



      </nav>





      {/* HERO */}


      <section className="hero">


        <h1>
          Discover Premium Products
        </h1>


        <p>
          Shop the latest products with amazing deals
        </p>


      </section>





      {/* STATES */}



      {
        loading &&

        <div className="loading">

          Loading Products...

        </div>

      }



      {
        error &&

        <div className="error">

          Something went wrong

        </div>

      }





      {/* PRODUCTS */}


      <section className="shop">


        <h2 className="section-title">

          Latest Products

        </h2>
        



        <div className="products">


          {
            data && data.map((item) => (

<ProductsCard
  key={item.id}
  item={item}
  setCart={setCart}
  cart={cart}
/>


            ))

          }


        </div>



      </section>
    



    </>

  );

};


export default App;