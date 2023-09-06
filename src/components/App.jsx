import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round((good * 100) / total) || 0;

  const onLeaveFeedback = key => {
    setState(prevState => ({
      ...prevState,
      [key]: state[key] + 1,
    }));
  };

  return (
    <Layout>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            state={state}
            total={total}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
