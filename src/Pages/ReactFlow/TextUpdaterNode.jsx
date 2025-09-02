import { Handle, Position } from "@xyflow/react";
import { useCallback } from "react";

export function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      style={{
        padding: 10,
        border: "1px solid #999",
        borderRadius: 5,
        background: "#fff",
        minWidth: 100,
      }}
    >
      <Handle type="target" position={Position.Left} />
      <div>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          defaultValue={data.value}
          onChange={onChange}
          className="nodrag"
        />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
