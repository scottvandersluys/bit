import React, { useMemo, useState } from 'react';
import { DonutChartProps } from './donut-chart.types';
import { getCoordinatesFromPercent, getPercentagesFromValues, getTotalValue } from './donut-chart.utils';

import './donut-chart.styles.scss';

export function DonutChart(props: DonutChartProps) {
  const { data } = props;

  const [selected, setSelected] = useState(null);

  const totalValue = useMemo(() => getTotalValue(data), [data]);
  const dataWithPercentages = useMemo(() => getPercentagesFromValues(data, totalValue), [data, totalValue]);

  const handleSelect = (slice) => () => {
    setSelected(selected?.name === slice.name ? null : slice)
  }

  const renderSlices = () => {
    let cumulativePercent = 0;

    return dataWithPercentages.map((slice) => {
      const { color, name, percent } = slice;

      if (!percent) return null;

      const style = color ? { fill: color } : null;

      if (percent === 1) {
        return (
          <circle className="donut-chart-slice" key={name} name={name} r={1} rx={0} ry={0} style={style} />
        );
      }

      const classList = ["donut-chart-slice"];
      if (selected?.name === name) classList.push('is-selected');

      const [startX, startY] = getCoordinatesFromPercent(cumulativePercent);
      cumulativePercent += percent;
      const [endX, endY] = getCoordinatesFromPercent(cumulativePercent);
      const largeArcFlag = percent > 0.5 ? 1 : 0;

      const pathData =
        `M ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} L 0 0 L ${startX} ${startY}`;

      return (
        <path className={classList.join(" ")} d={pathData} key={name} name={name} onClick={handleSelect(slice)} style={style} />
      )
    });
  };

  const classList = ["donut-chart"];
  if (selected) classList.push('has-selection');

  return (
    <svg className={classList.join(" ")} viewBox="-1 -1 2 2">
      { renderSlices() }
      <circle className="donut-chart-hole" onClick={() => setSelected(null)} r={ 0.8 } rx={ 0 } ry={ 0 } />
      <text className="donut-chart-name" x="0" y="0.175">{ selected?.name || "Total" }</text>
      <text className="donut-chart-value" x="0" y="-0.07">{ selected?.value || totalValue }</text>
    </svg>
  );
}
