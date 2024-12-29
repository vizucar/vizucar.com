import { Outlet } from "react-router-dom";
import Header from "./Header";

function LayoutApp() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default LayoutApp;
