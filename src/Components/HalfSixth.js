import React from "react";
import arcade from "../images/icons/arcade.png";

function HalfSixth({description,links,links2,title,description2}) {
  return (
    <div>
      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade} />
                  </div>
                </div>
                <div className="description-wraper white">
                  {description}
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">
                        {links}<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="">Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                  {title}
                </div>
                <div className="description-wraper">
                  {description2}
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
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

export default HalfSixth;
