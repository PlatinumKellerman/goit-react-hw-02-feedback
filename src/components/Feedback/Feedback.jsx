import PropTypes from 'prop-types';
import s from './feedback.module.css';

export function Feedback({ title }) {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
    </>
  );
}

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
