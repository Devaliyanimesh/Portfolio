import { useState, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,   // 👈 import this
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { TextUpdaterNode } from "./TextUpdaterNode";

const initialNodes = [
  {
    id: "n1",
    type: "textUpdater",
    position: { x: 150, y: 100 },
    data: { value: "Node 1" },
    draggable: false,
  },
  {
    id: "n2",
    type: "textUpdater",
    position: { x: 150, y: 200 },
    data: { value: "Node 2" },
    draggable: false,
  },
  {
    id: "n3",
    type: "textUpdater",
    position: { x: 150, y: 300 },
    data: { value: "Node 3" },
    draggable: false,
  },
];

const initialEdges = [
  { id: "e1-2", source: "n1", target: "n2" },
  { id: "e2-3", source: "n2", target: "n3" },
];

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
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const nodeTypes = {
    textUpdater: TextUpdaterNode,
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
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
