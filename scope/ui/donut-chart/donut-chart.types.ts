export type DonutChartData = {
  color?: string;
  name: string;
  value: number;
}[];

export type DonutChartProps = {
  data: DonutChartData;
};
