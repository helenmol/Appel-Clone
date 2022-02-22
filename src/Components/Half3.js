import React from "react";
import HalfSixth from "./HalfSixth"

function Half3({ description, links, links2, title, description2 }) {
  return (
    <div>
      <HalfSixth
        description="Agent 8 is a small hero on a big mission"
        links="Play now"
        links2="Learn about Apple Arcade"
        title="Apple Card Monthly Installments"
        description2="Pay for your next iPhone over time, interest-free with Apple Card"
      />
    </div>
  );
}

export default Half3;
