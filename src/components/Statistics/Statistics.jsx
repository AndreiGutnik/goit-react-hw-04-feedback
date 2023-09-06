import React from 'react';
import { StatisticsItem, StatisticsList } from './statistics.styled';

export function Statistics({ state, total, positiveFeedback }) {
  return (
    <StatisticsList>
      {Object.entries(state).map(([key, value]) => {
        return (
          <StatisticsItem key={key}>
            {key}: {value}
          </StatisticsItem>
        );
      })}
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positiveFeedback}%</StatisticsItem>
    </StatisticsList>
  );
}
