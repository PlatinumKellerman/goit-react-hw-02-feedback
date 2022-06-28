import s from './buttons.module.css';

function Buttons({
  handleGoodFeedbacks,
  handleNeutralFeedbacks,
  handleBadFeedbacks,
}) {
  return (
    <ul className={s.buttons__list}>
      <li className={s.list__item}>
        <button
          type="button"
          onClick={handleGoodFeedbacks}
          className={s.feedback__button}
        >
          Good
        </button>
      </li>
      <li className={s.list__item}>
        <button
          type="button"
          onClick={handleNeutralFeedbacks}
          className={s.feedback__button}
        >
          Neutral
        </button>
      </li>
      <li className={s.list__item}>
        <button
          type="button"
          onClick={handleBadFeedbacks}
          className={s.feedback__button}
        >
          Bad
        </button>
      </li>
    </ul>
  );
}

export default Buttons;
