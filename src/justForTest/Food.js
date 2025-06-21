import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>제 점수는요 {rating}/5.0입니다</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.number.isRequired, // 틀린 타입 지정
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Food;
