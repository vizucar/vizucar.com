import { ArrowLeft, ChartNoAxesCombined } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Chart from "../components/Chart";
import SelectOption from "../components/SelectOption";
import { useStatistics } from "../useStatistics";

export default function Metrics() {
  const staticData = useStaticData();
  const statistics = useStatistics(10);

  const [activeView, setActiveView] = useState<View>("CPU");

  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );
  const ramUsages = useMemo(
    () => statistics.map((stat) => stat.ramUsage),
    [statistics]
  );
  const storageUsages = useMemo(
    () => statistics.map((stat) => stat.storageUsage),
    [statistics]
  );
  const activeUsages = useMemo(() => {
    switch (activeView) {
      case "CPU":
        return cpuUsages;
      case "RAM":
        return ramUsages;
      case "STORAGE":
        return storageUsages;
    }
  }, [activeView, cpuUsages, ramUsages, storageUsages]);

  return (
    <div className="Metrics">
      <div className="top-container">
        <div className="subtitle">
          <a href="/" className="back">
            <ArrowLeft />
          </a>
          <ChartNoAxesCombined size={18} />
          <p>Performance Metrics</p>
        </div>
      </div>
      <div className="metrics-stat">
        <div>
          <SelectOption
            view="CPU"
            onClick={() => setActiveView("CPU")}
            title="CPU"
            data={cpuUsages}
          />
          <SelectOption
            view="RAM"
            onClick={() => setActiveView("RAM")}
            title="RAM"
            data={ramUsages}
          />
          <SelectOption
            view="STORAGE"
            onClick={() => setActiveView("STORAGE")}
            title="STORAGE"
            data={storageUsages}
          />
        </div>
        <div className="mainGrid">
          <div className="mainGridNameStat">
            {activeView == "CPU"
              ? staticData?.cpuModel ?? ""
              : activeView == "RAM"
              ? (staticData?.totalMemoryGB.toString() ?? "") + " GB"
              : (staticData?.totalStorage.total.toString() ?? "") + " GB"}
          </div>
          <div className="legend-top">
            <div>% Utilization</div>
            <div>100 %</div>
          </div>
          <Chart
            selectedView={activeView}
            data={activeUsages}
            maxDataPoints={10}
          />
          <div className="legend-bottom">0 %</div>
        </div>
      </div>
    </div>
  );
}

function useStaticData() {
  const [staticData, setStaticData] = useState<StaticData | null>(null);
  useEffect(() => {
    (async () => {
      setStaticData(await window.electron.getStaticData());
    })();
  }, []);
  return staticData;
}
