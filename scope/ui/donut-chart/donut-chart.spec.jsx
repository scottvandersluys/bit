import React from 'react';
import { render } from '@testing-library/react';
import { BasicDonutChart } from './donut-chart.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicDonutChart />);
  const rendered = getByText('hello from DonutChart');
  expect(rendered).toBeTruthy();
});

