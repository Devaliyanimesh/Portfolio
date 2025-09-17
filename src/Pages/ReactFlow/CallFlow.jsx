import { useContext,useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { CustomEdge } from "./Edges/CustomEdge";
import Greeting from "./Nodes/Greeting";
import Forword from "./Nodes/Forword";
import SimulCall from "./Nodes/SimulCall";
import Menu from "./Nodes/Menu";
import KeyPad from "./Nodes/KeyPad";
import HangUp from "./Nodes/HangUp";
import VoiceMail from "./Nodes/VoiceMail";
import { MyContext } from "../Context/ContextApi";
import CallRecording from "./Nodes/CallRecording";
import StartCallFlow from "./Nodes/StartCallFlow";
import LastFlow from "./Nodes/LastFlow";
import Recording from "./Nodes/Recording";
import { useNavigate } from "react-router-dom";

const edgeTypes = {
  "custom-edge": CustomEdge,
};

function FlowContent() {
  const { node,setNode,edge,setEdges } = useContext(MyContext);

  const onNodesChange = useCallback(
    (changes) => setNode((nds) => applyNodeChanges(changes,nds)),
    [setNode]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes,eds)),
    [setEdges]
  );

  const nodeTypes = {
    Greeting,
    Forword,
    SimulCall,
    Menu,
    KeyPad,
    HangUp,
    CallRecording,
    StartCallFlow,
    Recording,
    LastFlow,
    VoiceMail,
  };

  return (
    <ReactFlow
      nodes={node}
      edges={edge}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      nodesDraggable={true}
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default function CallFlow() {
  let navigate = useNavigate()

  return (
    <div
      style={{ width: "100vw",height: "100vh",backgroundColor: "#f5f4f5" }}
      className="relative"
    >
      <div className=" absolute cursor-pointer z-[99] right-4 top-2 bg-info text-accent px-6 py-3  text-center font-medium  w-fit rounded-lg " onClick={() => navigate("/project")}>
        Return
      </div>
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}
