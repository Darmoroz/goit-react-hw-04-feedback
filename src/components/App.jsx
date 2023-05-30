import { useState } from 'react';
import {
  Container,
  Notification,
  Statistics,
  FeedbackOptions,
  Section,
} from 'components';

export const App = () => {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);

  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.ceil((good / countTotalFeedback()) * 100)}%`;
  };
  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['bad', 'neutral', 'good']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
};
