import { Minus, Square, X } from "lucide-react";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <button
          id="minimize"
          onClick={() => window.electron.sendFrameAction("MINIMIZE")}
        >
          <Minus size={16} />
        </button>
        <button
          id="maximize"
          onClick={() => window.electron.sendFrameAction("MAXIMIZE")}
        >
          <Square size={16} />
        </button>
        <button
          id="close"
          onClick={() => window.electron.sendFrameAction("CLOSE")}
        >
          <X size={20} />
        </button>
      </header>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
