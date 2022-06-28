import s from './notification.module.css';

function Notification({ title }) {
  return <p className={s.notification__text}>{title}</p>;
}

export default Notification;
