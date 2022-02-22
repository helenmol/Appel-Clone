import React from "react";
import FullSection from "./FullSection";

function Section({alert, title, description, price, sectionclass}) {
return (
<div>
    <FullSection
    brand="New"
    title="iPad Pro"
    description=" Magic Keyboard coming in May "
    price=""
    sectionclass="first-hightlight-wrapper"
    />
    <FullSection
    
    alert="New"
    title="MacBook Air"
    description="Twice the speed. Twice the storage"
    price="From $999"
    sectionclass="second-hightlight-wrapper"
    />
    <FullSection
    alert=""
    title="iPhone 11 Pro"
    description=" Pro cameras. Pro display. Pro performance"
    price=" From $24.95/mo. or $599 with trade‑in"
    sectionclass="third-hightlight-wrapper"
    />
</div>
);
}

export default Section;
