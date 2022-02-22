import React from "react";

function FullSection({alert, title, description, price, sectionclass}) {
return (
<>
    <section className={sectionclass}>
    <div className="container">
        <div className="new-alert">{alert}</div>

        <div className="title-wraper bold black">{title}</div>

        <div className="description-wrapper black">{description}</div>

        <div className="price-wrapper grey">{price}</div>

        <div className="links-wrapper">
        <ul>
            <li>
            <a href="">Learn more</a>
            </li>
            <li>
            <a href="">Buy</a>
            </li>
        </ul>
        </div>
    </div>
    </section>
</>
);
}

export default FullSection;
