import { getStraightPath } from "@xyflow/react";

export function CustomEdge({ id,sourceX,sourceY,targetX,targetY }) {
  const [edgePath] = getStraightPath({ sourceX,sourceY,targetX,targetY });

  return (
    <g>
      <path
        id={id}
        d={edgePath}
        fill="none"
        stroke="#1d82ca"
        strokeWidth={2}
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 5 3.5, 0 7" fill="#1d82ca" />
        </marker>
      </defs>
    </g>
  );
}
