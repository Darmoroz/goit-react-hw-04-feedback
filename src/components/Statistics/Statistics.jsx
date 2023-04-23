import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <ul>
      {Object.keys(props).map(prop => (
        <li key={prop}>
          {prop}: {props[prop]}
        </li>
      ))}
    </ul>
  );
};

Statistics.protoTypes = {
  props: PropTypes.exact({
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
