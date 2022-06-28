import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback';
import Buttons from './components/Buttons/Buttons';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Container from 'components/Container/Container';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedbacks = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralFeedbacks = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadFeedbacks = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
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
          handleGoodFeedbacks={this.handleGoodFeedbacks}
          handleNeutralFeedbacks={this.handleNeutralFeedbacks}
          handleBadFeedbacks={this.handleBadFeedbacks}
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
