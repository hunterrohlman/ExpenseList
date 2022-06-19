import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart: React.FC<any> = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint: any) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints:any) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
