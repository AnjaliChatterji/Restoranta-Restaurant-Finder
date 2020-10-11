import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props)  => {
  const [state, setState] = useState({ name: '', day: '', restaurant: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name, day, restaurant } = steps;
    setState({ name, day, restaurant });
  }, [props])

    const { name, day, restaurant } = state;
    return (<div></div>
    );
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;