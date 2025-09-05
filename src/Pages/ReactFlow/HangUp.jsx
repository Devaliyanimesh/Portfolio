import React from "react";
import CallFlowHeader from "../Component/CallFlowHeader";
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function HangUp() {
  return (
    <CallFlowHeader
      title="Hung up"
      subtitle="Play a message to the caller. Frequently used to notify the caller
about call recording."
      showClose
      onClose={() => alert("Closed!")}
      bgColor="#e93c15"
      icon={<CallEndIcon className="text-white" />}
    ></CallFlowHeader>
  );
}
