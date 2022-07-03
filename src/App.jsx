import React, { Component } from 'react';
import { Feedback } from './components/Feedback/index';
import { Buttons } from './components/Buttons/index';
import { Statistics } from './components/Statistics/index';
import { Notification } from './components/Notification/index';
import { Container } from 'components/Container/index';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbacks = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const PositiveFeedbackPercentage = Math.round(
      Number((good * 100) / totalFeedbacks)
    );
    return PositiveFeedbackPercentage;
  }

  render() {
    return (
      <Container>
        <Feedback title="Please leave feedback" />
        <Buttons
          handleFeedbacks={this.handleFeedbacks}
          stateKeys={Object.keys(this.state)}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            state={this.state}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title="There is no feedback" />
        )}
      </Container>
    );
  }
}
