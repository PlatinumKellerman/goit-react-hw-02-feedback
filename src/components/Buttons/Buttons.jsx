import PropTypes from 'prop-types';
import s from './buttons.module.css';

export function Buttons({ handleFeedbacks, stateKeys }) {
  return stateKeys.map(button => {
    return (
      <button
        className={s.buttons}
        key={button}
        name={button}
        type="button"
        onClick={handleFeedbacks}
      >
        {button}
      </button>
    );
  });
}

Buttons.propTypes = {
  handleFeedbacks: PropTypes.func.isRequired,
  stateKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
};
