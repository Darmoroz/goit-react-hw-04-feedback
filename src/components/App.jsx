import { Component } from 'react';
import {
  Container,
  Notification,
  Statistics,
  FeedbackOptions,
  Section,
} from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return `${Math.ceil((good / this.countTotalFeedback()) * 100)}%`;
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0);
  }

  render() {
    const { bad, neutral, good } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
