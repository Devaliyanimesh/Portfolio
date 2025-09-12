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

  // random id generate करने का helper
  function generateId() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 4; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  // किसी भी node का next Y निकालने के लिए helper
  function getNextY(prevNodeId, gap = 150, fallbackHeight = 100) {
    const el = document.getElementById(prevNodeId);
    const rect = el?.getBoundingClientRect();
    const prevHeight = rect?.height || fallbackHeight;

    const prevNode = node.find((n) => n.id === prevNodeId);
    const prevY = prevNode?.position?.y || 0;

    return prevY + prevHeight + gap;
  }

  function nodeAddFun(title) {
    const prevNode = node[node.length - 2];
    const lastNode = node[node.length - 1]; // हमेशा lastnode

    // नया node का Y calculate
    const newY = getNextY(prevNode.id, 150);

    // नया node बनाओ
    const createnode = {
      id: generateId(),
      type: title,
      position: { x: 100, y: newY },
      draggable: false,
    };

    // edges clone
    const newEdges = [...edge];

    // last edge update (new node को target बनाओ)
    const lastEdge = {
      ...newEdges[newEdges.length - 1],
      target: createnode.id,
    };
    newEdges[newEdges.length - 1] = lastEdge;

    // lastnode के लिए नया edge
    const lastedgeFix = {
      id: createnode.id + "-edge",
      source: createnode.id,
      target: lastNode.id,
      type: "custom-edge",
    };

    // nodes में नया node add करो
    const newNodes = [...node];
    if (title === "VoiceMail" || title === "HangUp") {
      newNodes.splice(newNodes.length - 1, 1, createnode);
    } else {
      newNodes.splice(newNodes.length - 1, 0, createnode);
    }

    // ✅ अब lastnode हमेशा सबसे नीचे वाले bottom + 400 पर जाएगा
    const GAP = 400;
    const maxBottom = Math.max(
      ...newNodes
        .filter((n) => n.id !== "lastnode")
        .map((n) => (n.position.y || 0) + (n.measured?.height || 100))
    );

    lastNode.position.y = maxBottom + GAP;

    // नया edge add करो
    newEdges.push(lastedgeFix);

    // state update
    setNode(newNodes);
    setEdges(newEdges);

    console.log(node ,edge)
  }

  // dynamic list of call flow buttons
  const callFlowlist = [
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

  return (
    <div className="px-[2rem] py-[1rem] rounded-md flex items-center gap-[3rem] bg-accent w-fit">
      {callFlowlist.map((e, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="p-2 rounded-[4px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: e.color }}
            onClick={() => nodeAddFun(e.title)}
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
