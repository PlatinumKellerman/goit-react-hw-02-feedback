import PropTypes from 'prop-types';
import { FeedbackButtons } from './Buttons.styled';

export function Buttons({ handleFeedbacks, stateKeys }) {
  return stateKeys.map(button => {
    return (
      <FeedbackButtons
        key={button}
        name={button}
        type="button"
        onClick={handleFeedbacks}
      >
        {button}
      </FeedbackButtons>
    );
  });
}

Buttons.propTypes = {
  handleFeedbacks: PropTypes.func.isRequired,
  stateKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
};
