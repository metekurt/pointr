import React from "react";
import { useNavigate } from "react-router-dom";

const City = ({ city, clickMessage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/weatherPage", { state: city });
  };
  return (
    <div className="col-1-of-4">
      <div className="city-box">
        <i className="city-box__icon icon-basic-world" />
        <h3 className="heading-tertiary u-margin-bottom-small">{city}</h3>
        {
          <a className="btn " onClick={handleClick}>
            {clickMessage}
          </a>
        }
      </div>
    </div>
  );
};

export default City;
