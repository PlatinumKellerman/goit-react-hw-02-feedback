import s from './statistics.module.css';

function Statistics({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const { good, neutral, bad } = state;
  const total = countTotalFeedback;
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage;
  return (
    <div>
      <h3 className={s.title}>Statistics</h3>
      <p className={s.text}>Good:{good}</p>
      <p className={s.text}>Neutral:{neutral}</p>
      <p className={s.text}>Bad:{bad}</p>
      <p className={s.text}>Total:{total}</p>
      <p className={s.text}>Positive feedback:{positiveFeedbackPercentage}%</p>
    </div>
  );
}

export default Statistics;
