import React from "react";
import Logo from "../../Assets/images/icons/logo-sm.png";
import Cart from "../../Assets/images/icons/cart-sm.png";
import Search from "../../Assets/images/icons/search-icon-sm.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <div>
      <header>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto logo-link" href="/">
                <img src={Logo} />
              </a>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <div className="top-link">
                    <li className="list-inline-item search-link">
                      <a className="nav-link js-scroll-trigger" href="#">
                        <img src={Search} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="nav-link js-scroll-trigger" href="#">
                        Search apple.com
                      </a>
                    </li>
                  </div>

                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/mac/">
                      Mac
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/iphones/">
                      iphone
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      ipad
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      watch
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      tv
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      Music
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#">
                      Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/cart/">
                      <img src={Cart} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
