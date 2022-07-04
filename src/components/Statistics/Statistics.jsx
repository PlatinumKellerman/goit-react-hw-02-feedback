import PropTypes from 'prop-types';
import { Container } from '../Container/index';
import {
  StatisticsTitle,
  Text,
  TextKey,
  TextValueGood,
  TextValueNeutral,
  TextValueBad,
  TextValueTotal,
  Percentage,
} from './Statistics.styled';

export function Statistics({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const { good, neutral, bad } = state;
  const total = countTotalFeedback;
  return (
    <Container>
      <StatisticsTitle>Statistics:</StatisticsTitle>
      <Text>
        <TextKey>Good:</TextKey>
        <TextValueGood>{good}</TextValueGood>
      </Text>
      <Text>
        <TextKey>Neutral:</TextKey>
        <TextValueNeutral>{neutral}</TextValueNeutral>
      </Text>
      <Text>
        <TextKey>Bad:</TextKey>
        <TextValueBad>{bad}</TextValueBad>
      </Text>
      <Text>
        <TextKey>Total:</TextKey>
        <TextValueTotal>{total}</TextValueTotal>
      </Text>
      <Text>
        <TextKey>Positive feedback:</TextKey>
        <Percentage
          style={{
            color: countPositiveFeedbackPercentage > 49 ? 'limegreen' : 'red',
          }}
        >
          {countPositiveFeedbackPercentage}%
        </Percentage>
      </Text>
    </Container>
  );
}

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
