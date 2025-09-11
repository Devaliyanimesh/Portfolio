import React, { useContext } from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MenuIcon from "@mui/icons-material/Menu";
import DialpadIcon from "@mui/icons-material/Dialpad";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { Handle, Position } from "@xyflow/react";
import { MyContext } from "../../Context/ContextApi";

export default function LastFlow() {
  const { node, edge, setNode, setEdges } = useContext(MyContext);

  function generateId() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 4; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  // let callFlowTypes = {
  //   Greeting: {
  //     id: "",
  //     type: "Greeting",
  //     position: { x: 100, y: 250 },
  //   },
  //   Forword: {
  //     id: "",
  //     type: "Forword",
  //     position: { x: 100, y: 250 },
  //   },
  //   SimulCall: {
  //     id: "",
  //     type: "SimulCall",
  //     position: { x: 100, y: 250 },
  //   },
  //   Menu: {
  //     id: "",
  //     type: "Menu",
  //     position: { x: 100, y: 250 },
  //   },
  //   KeyPad: {
  //     id: "",
  //     type: "KeyPad",
  //     position: { x: 100, y: 250 },
  //   },
  //   VoiceMail: {
  //     id: "",
  //     type: "VoiceMail",
  //     position: { x: 100, y: 250 },
  //   },
  //   HangUp: {
  //     id: "",
  //     type: "HangUp",
  //     position: { x: 100, y: 250 },
  //   },
  // };

  let callFlowlist = [
    {
      title: "Greeting",
      color: "#1D82CA",
      icon: <DraftsIcon className="text-white" />,
    },
    {
      title: "Forword",
      color: "#1cb041",
      icon: <CallSplitIcon className="text-white" />,
    },
    {
      title: "SimulCall",
      color: "#18bea0",
      icon: <ConnectWithoutContactIcon className="text-white" />,
    },
    {
      title: "Menu",
      color: "#143ca4",
      icon: <MenuIcon className="text-white" />,
    },
    {
      title: "KeyPad",
      color: "#ce007c",
      icon: <DialpadIcon className="text-white" />,
    },
    {
      title: "VoiceMail",
      color: "#ca7a1e",
      icon: <VoicemailIcon className="text-white" />,
    },
    {
      title: "HangUp",
      color: "#e93c15",
      icon: <CallEndIcon className="text-white" />,
    },
  ];

  function nodeAddFun(title) {
    const nodeindex = node[node.length - 2]; // second last node
    console.log(
      "Hii ~ LastFlow.jsx ~ nodeAddFun ~ nodeindex:",
      node[node.length - 1]
    );
    let lastcompoent = node[node.length - 1];
    // create new node
    const createnode = {
      id: generateId(),
      type: title,
      position: { x: 100, y: nodeindex?.position.y + 350 },
    };
    lastcompoent.position.y = lastcompoent?.position.y + 350;
    // clone edges
    const newEdges = [...edge];

    // update last edge (point to new node instead of lastnode)
    const lastEdge = {
      ...newEdges[newEdges.length - 1],
      target: createnode.id,
    };
    newEdges[newEdges.length - 1] = lastEdge;

    // create new edge (new node → lastnode)
    const lastedgeFix = {
      id: createnode.id + "king",
      source: createnode.id,
      target: "lastnode",
      type: "custom-edge",
    };

    // clone nodes & insert new node before lastnode
    const newNodes = [...node];
    newNodes.splice(newNodes.length - 1, 0, createnode);

    // push new edge
    newEdges.splice(newEdges.length - 0, 0, lastedgeFix);

    // update state
    setNode(newNodes);
    console.log("Hii ~ LastFlow.jsx ~ nodeAddFun ~ newNodes:", newNodes);
    setEdges(newEdges);
    console.log("Hii ~ LastFlow.jsx ~ nodeAddFun ~ newEdges:", newEdges);
  }

  return (
    <div className="px-[2rem] py-[1rem] rounded-md flex items-center gap-[3rem] bg-accent w-fit">
      {callFlowlist.map((e, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="p-2 rounded-[4px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: e.color }}
            onClick={() => {
              nodeAddFun(e.title);
            }}
          >
            {e.icon}
          </div>
          <p className="text-sm mt-1">{e.title}</p>
        </div>
      ))}
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#1d82ca", width: 10, height: 10 }}
      />
    </div>
  );
}
