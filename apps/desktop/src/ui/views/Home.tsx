import { ChartNoAxesCombined, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="Home">
      <div className="nav">
        <div className="link">
          <ChartNoAxesCombined size={18} />
          <a href="/metrics">Performance Metrics</a>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <input id="search-input" type="text" placeholder="Search..." />
          <Search size={23} />
        </div>
      </div>
    </div>
  );
}
