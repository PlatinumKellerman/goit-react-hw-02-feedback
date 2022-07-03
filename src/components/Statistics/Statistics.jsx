import PropTypes from 'prop-types';
import { Container } from '../Container/index';
import s from './statistics.module.css';

export function Statistics({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const { good, neutral, bad } = state;
  const total = countTotalFeedback;
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage;
  return (
    <Container>
      <h3 className={s.title}>Statistics:</h3>
      <p className={s.text}>
        <span className={s.text__key}>Good:</span>
        <span className={s.text__value__good}>{good}</span>
      </p>
      <p className={s.text}>
        <span className={s.text__key}>Neutral:</span>
        <span className={s.text__value__neutral}>{neutral}</span>
      </p>
      <p className={s.text}>
        <span className={s.text__key}>Bad:</span>
        <span className={s.text__value__bad}>{bad}</span>
      </p>
      <p className={s.text}>
        <span className={s.text__key}>Total:</span>
        <span className={s.text__value__total}>{total}</span>
      </p>
      <p className={s.text}>
        <span className={s.text__key}>Positive feedback:</span>
        <span
          className={
            s[
              positiveFeedbackPercentage > 50
                ? 'text__value__percentage__good'
                : 'text__value__percentage__bad'
            ]
          }
        >
          {positiveFeedbackPercentage}%
        </span>
      </p>
    </Container>
  );
}

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};