import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { MyContext } from "../Context/ContextApi";

export default function CallFlowHeader({
  title = "Recording",
  subtitle = "",
  showClose = false,
  onClose,
  icon = "",
  bgColor = "#1D82CA",
  id,
  children,
}) {
  const { node, setNode, edge, setEdges } = useContext(MyContext);

  function removednode(nodeid) {
    // 1. Remove the node
    let nodesWithoutRemoved = node.filter((n) => n.id !== nodeid);

    // 2. Update edges
    const incomingEdges = edge.filter((e) => e.target === nodeid);
    const outgoingEdges = edge.filter((e) => e.source === nodeid);

    let updatedEdges = edge.filter(
      (e) => e.source !== nodeid && e.target !== nodeid
    );

    if (incomingEdges.length > 0 && outgoingEdges.length > 0) {
      const newEdge = { ...incomingEdges[0], target: outgoingEdges[0].target };
      updatedEdges.push(newEdge);
    }

    // 3. Recalculate positions for all nodes except lastnode
    const GAP = 150;
    let currentY = 0;

    let newNodes = nodesWithoutRemoved.map((n) => {
      if (n.id === "lastnode") return n;
      const height = n.measured?.height || 100;
      const newPos = { ...n.position, y: currentY };
      currentY += height + GAP;
      return { ...n, position: newPos };
    });

    // 4. Recalculate lastnode position
    const lastNodeIndex = newNodes.findIndex((n) => n.id === "lastnode");
    if (lastNodeIndex !== -1) {
      const maxBottom = Math.max(
        ...newNodes
          .filter((n) => n.id !== "lastnode")
          .map((n) => (n.position.y || 0) + (n.measured?.height || 100))
      );
      newNodes[lastNodeIndex] = {
        ...newNodes[lastNodeIndex],
        position: {
          ...newNodes[lastNodeIndex].position,
          y: maxBottom + 400,
        },
      };
    }

    // 5. Update state
    setNode(newNodes);
    setEdges(updatedEdges);
  }

  return (
    <div className="relative flex justify-center " id={id}>
      <div className="w-[550px] min-w-[350px] bg-white rounded-lg shadow-xl border border-gray-200 p-4">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <div
            className="p-2 rounded-full border-[5px] border-white shadow-md flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </div>
        </div>

        <div className="flex justify-between items-start border-b-[3px] pb-2">
          <div>
            <h3 className="!text-base">{title}</h3>
            {subtitle && <p className="text-sm text-black/50">{subtitle}</p>}
          </div>

          {showClose && (
            <button
              onClick={() => removednode(id)}
              className="text-black/50 hover:text-black"
            >
              <CloseIcon />
            </button>
          )}
        </div>

        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
