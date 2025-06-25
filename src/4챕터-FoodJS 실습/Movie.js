import React from "react";
import PropTypes from "prop-types";

function Movie({ title, year }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
