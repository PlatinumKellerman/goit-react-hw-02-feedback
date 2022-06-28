import Container from 'components/Container/Container';
import s from './feedback.module.css';

function Feedback({ title }) {
  return (
    <Container>
      <h1 className={s.title}>{title}</h1>
    </Container>
  );
}

export default Feedback;
