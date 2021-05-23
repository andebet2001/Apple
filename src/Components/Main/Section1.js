import React from "react";

function Section1() {
  return (
    <div>
      <section className="first-highlight-wrapper">
        <div className="container col-12">
          <div className="title-wrapper">iPhone 12</div>
          <div className="description-wrapper">Blast past fast</div>
          <div className="price-wrapper">
            From $29.12/mo. or $699 <br />
            before trade-in.<sup> 1</sup>
            <br />
            <br />
            Buy directly from Apple
            <br />
            with special carrier offers.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#"> Learn more</a>
              </li>
              <li>
                <a href="#"> Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
