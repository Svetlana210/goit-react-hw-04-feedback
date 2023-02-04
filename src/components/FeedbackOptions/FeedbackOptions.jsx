import PropTypes from 'prop-types';
import styles from './feedback-options.module.css';

const FeedbackOptions = ({ options, onButtonClick }) => {
  const elements = options.map(option => {
    return (
      <li key={option}>
        <button
          onClick={() => onButtonClick(option)}
          type="button"
          name={option}
          className={styles.button}
        >
          {option}
        </button>
      </li>
    );
  });

  return <ul className={styles.list}>{elements}</ul>;
};

FeedbackOptions.prototype = {
  onButtonClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackOptions;
