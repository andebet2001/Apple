import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Iphone() {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch("/iphones.json")
        .then((Response)=>Response.json())
        .then((products)=>{
            setProducts(()=>products.products)
        })
    },[])
    console.log(products);
    let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">Iphones</div>
            <div className="brief-description">The best for the brightest</div>
          </div>
        </div>
        {products.map((product) => {
          let id = product.product_url;
          let title = product.product_name;
          let img = product.product_img;
          let brief = product.product_brief_description;
          let startPrice = product.starting_price;
          let priceRange = product.price_range;
          let productPage = "/iphones/" + id;

          let order1 = 1;
          let order2 = 2;
          if (order != 1) {
            order1 = 2;
            order2 = 1;
            order--;
          } else {
            order++;
          }
          let productDiv = (
            <div
              key={id}
              className="row justify-content-center text-center product-holder h-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="title-wraper ">{title}</div>
                <div className="product-brief">{brief}</div>
                <div className="starting-price">{`starting at ${startPrice}`}</div>
                <div>{priceRange}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={productPage}> Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="product-image">
                  <img src={img} />
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </section>
    </div>
  );
}

export default Iphone;
