import Chart from "./Chart";

type SelectOptionPorps = {
  title: string;
  view: View;
  data: number[];
  onClick: () => void;
};

export default function SelectOption(props: SelectOptionPorps) {
  return (
    <button className="selectOption" onClick={props.onClick}>
      <div className="selectOptionTitle">
        <div>{props.title}</div>
      </div>
      <div className="selectOptionChart">
        <Chart selectedView={props.view} data={props.data} maxDataPoints={10} />
      </div>
    </button>
  );
}
