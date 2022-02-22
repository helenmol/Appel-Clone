import React from "react";
import HalfSection from './HalfSection'
function Half({ title, description, price, title2, links }) {
  return (
    <div>
      <HalfSection
        title="iPhone 11"
        description="Just the right amount of everything"
        price="From $18.70/mo. or $499 with trade‑in"
        title2="Get the latest CDC response to COVID-19"
        links="Watch the PSA"
      />
    </div>
  );
}

export default Half;
