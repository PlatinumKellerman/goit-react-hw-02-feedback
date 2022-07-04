import PropTypes from 'prop-types';
import { FeedbackTitle } from './Feedback.styled';

export function Feedback({ title }) {
  return (
    <>
      <FeedbackTitle>{title}</FeedbackTitle>
    </>
  );
}

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
