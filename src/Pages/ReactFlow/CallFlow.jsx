import { useState, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { CustomEdge } from "./Edges/CustomEdge";
import Greeting from "./Nodes/Greeting";
import Forword from "./Nodes/Forword";


const initialNodes = [
  {
    id: "n1",
    type: "Greeting",
    position: { x: 150, y: 100 },
    data: { value: "Node 1" },
  },
  {
    id: "n2",
    type: "Forword",
    position: { x: 150, y: 400 },
    data: { value: "Node 2" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "n1", target: "n2", type: "custom-edge" },
];

const edgeTypes = {
  "custom-edge": CustomEdge,
};

function FlowContent() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: "custom-edge" }, eds)),
    []
  );

  const nodeTypes = {
    Greeting,
    Forword,
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default function CallFlow() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#f5f4f5" }}>
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}
