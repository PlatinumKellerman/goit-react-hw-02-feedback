import PropTypes from 'prop-types';
import s from './notification.module.css';

function Notification({ title }) {
  return <p className={s.notification__text}>{title}</p>;
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;
