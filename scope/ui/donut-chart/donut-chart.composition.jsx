import React from 'react';
import { DonutChart } from './donut-chart';
import { donutChartData } from './donut-chart.data';

export const BasicDonutChart = () => (
  <DonutChart data={donutChartData} />
);
