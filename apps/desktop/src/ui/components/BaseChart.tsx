import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type BaseChartProps = {
  data: { value: number | undefined }[];
  fill: string;
  stroke: string;
};

export default function BaseChart(props: BaseChartProps) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <AreaChart data={props.data}>
        <CartesianGrid stroke="#333" strokeDasharray="1 1" fill="#fff" />
        <Area
          dataKey={"value"}
          fillOpacity={0.3}
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth={3}
          type={"monotone"}
          isAnimationActive={true}
        />
        <XAxis stroke="transparent" height={0} />
        <YAxis domain={[0, 100]} stroke="transparent" width={0} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
