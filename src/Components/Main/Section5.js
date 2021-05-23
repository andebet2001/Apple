import React from "react";

function Section5() {
  return (
    <div>
      <section className="fifth-highlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="logo-wrapper"></div>
                <div className="description-wrapper">
                  Bundle up to six Apple services.
                  <br />
                  And enjoy more for less.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="#">Learn more</a>
                    </li>
                    <li className="try-it">
                      <a href="#">
                        Try it free <sup>4</sup>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="logo-wrapper"></div>
                <div className="title-wrapper">
                  For lovers of
                  <br />
                  Apple
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Shop gifts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section5;
