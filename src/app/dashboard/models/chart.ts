export interface Chart {
  name: string;
  series?: ChartSeries[];
}

export interface ChartSeries {
  value: number;
  name: string;
}
