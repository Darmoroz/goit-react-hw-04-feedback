import PropTypes from 'prop-types';

import { ButtonGrid } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGrid>
      {options.map(option => (
        <li key={option}>
          <button name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ButtonGrid>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
