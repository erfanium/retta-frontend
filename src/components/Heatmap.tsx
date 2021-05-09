import { ReactElement, useState } from "react";
import "./Heatmap.css";

interface Props {
  uid: string;
  name: string;
  tags: string[];
  data: number[];
}

const className = (v: number) => `heatmap ${v === 0 ? "disabled" : ""}`;
const opacity = (v: number) => (v === 0 ? 1 : v / 10);

function Heatmap({ data, name, uid, tags }: Props): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="d-inline-flex justify-content-between w-100 mb-2"
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "inline-block" }}>
        <span>{name}</span>
        &nbsp;
        {tags.map((t) => (
          <span className="badge rounded-pill bg-info">{t}</span>
        ))}
        {open && <h6 className="fw-lighter">{uid}</h6>}
      </div>

      <svg width={data.length * 22} height="20" className="heatmap">
        {data.map((d, i) => (
          <rect
            width="20"
            height="20"
            x={i * 22}
            fillOpacity={opacity(d)}
            data-level="0"
            className={className(d)}
          >
          </rect>
        ))}
      </svg>
    </div>
  );
}

export default Heatmap;
