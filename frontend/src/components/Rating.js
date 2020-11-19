import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, numReviews, color }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span style={{ margin: '0 0.1rem' }} key={i}>
        <i
          style={{ color }}
          className={
            rating >= i
              ? 'fas fa-star'
              : rating >= i - 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    );
  }

  return (
    <div className="rating">
      {stars}
      <span>{numReviews && ` ${numReviews} reviews`}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
