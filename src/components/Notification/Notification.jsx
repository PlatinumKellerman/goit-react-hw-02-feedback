import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

export function Notification({ title }) {
  return <NotificationText>{title}</NotificationText>;
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
