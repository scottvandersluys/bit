export type DonutChartSliceProps = {
  color?: string;
  name: string;
  percent?: number;
  value: number;
};

export type DonutChartDataProps = DonutChartSliceProps[];

export type DonutChartProps = {
  data: DonutChartDataProps;
};
