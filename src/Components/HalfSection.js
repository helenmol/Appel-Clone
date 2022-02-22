import React from "react";

function HalfSection({title, description, price, title2, links}) {
  return (
    <div>
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">{title}</div>
                <div className="description-wraper">{description}</div>
                <div className="price-wrapper">
                  {price}
                  <sup>1</sup>
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
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">{title2}</div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="">{links}</a>
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

export default HalfSection;
