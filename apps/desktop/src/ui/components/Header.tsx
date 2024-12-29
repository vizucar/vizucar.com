import { Minus, Square, X } from "lucide-react";

export default function Header() {
  return (
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
  );
}
