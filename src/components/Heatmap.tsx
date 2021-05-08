import { ReactElement } from "react";
import "./Heatmap.css";

interface Props {
  name: string;
  data: number[];
}

const className = (v: number) => `heatmap ${v === 0 ? "disabled" : ""}`;
const opacity = (v: number) => (v === 0 ? 1 : v / 10);

function Heatmap({ data, name }: Props): ReactElement {
  return (
    <div className="d-inline-flex justify-content-between w-100">
      <span>{name}</span>
      <svg width={data.length * 22} height="20" className="heatmap">
        {data.map((d, i) => (
          <rect
            width="20"
            height="20"
            x={i * 22}
            fillOpacity={opacity(d)}
            data-level="0"
            className={className(d)}
          ></rect>
        ))}
      </svg>
    </div>
  );
}

export default Heatmap;
