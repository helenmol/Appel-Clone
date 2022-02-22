import React from "react";

const HeaderLink = ({ link, name, link1, name1 }) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={link}>
          {name}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={link1}>
          <img src={name1} />
        </a>
      </li>
    </>
  );
};

export default HeaderLink;
