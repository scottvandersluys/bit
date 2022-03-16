import React from 'react';
import { render } from '@testing-library/react';
import { BasicDonutChart } from './donut-chart.composition';


it('should render', () => {
  const rendered = render(<BasicDonutChart />);
  expect(rendered).toBeTruthy();
});

