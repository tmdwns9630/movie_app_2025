import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture} alt={name} />
      <h4>{rating} / 5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.bool.isRequired, // ❗일부러 오류 발생
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Food;
