import { DonutChartData } from "./donut-chart.types";

export const getCoordinatesFromPercent = (percent: number) => {
  const x = Math.cos(2 * Math.PI * percent)
  const y = Math.sin(2 * Math.PI * percent)

  return [x, y]
};

export const getPercentagesFromValues = (data: DonutChartData, totalValue: number) => {
  return data.map((sliceData) => ({ ...sliceData, percent: sliceData.value / totalValue }));
};

export const getTotalValue = (data: DonutChartData = []) => {
  return data.reduce((total, currentObject) => total + currentObject.value, 0);
};