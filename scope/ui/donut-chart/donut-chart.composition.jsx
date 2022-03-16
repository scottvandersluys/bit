import React from 'react';
import { DonutChart } from './donut-chart';
import { basicDonutChartData, bitThemedDonutChartData, singleItemDonutChartData } from './donut-chart.data';

export const BasicDonutChart = () => (
  <DonutChart data={basicDonutChartData} />
);

export const BitThemedDonutChart = () => (
  <DonutChart data={bitThemedDonutChartData} />
);

export const SingleItemDonutChart = () => (
  <DonutChart data={singleItemDonutChartData} />
);
