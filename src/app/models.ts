export interface graph {
  labels: string[];
  datasets: graphData;
}
export interface graphData {
  label: string;
  backgroundColor: string;
  data: number[];
}
