import React,{ useState } from "react";
import CallFlowHeader from "../../Component/CallFlowHeader";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import { Handle,Position } from "@xyflow/react";

export default function VoiceMail() {
  let [payload,setPayload] = useState({
    voice: {
      voiceText: "",
    },
  });
  return (
    <CallFlowHeader
      title="Voice mail"
      subtitle="Play a message to the caller. Frequently used to notify the caller
  about call recording."
      showClose
      onClose={() => alert("Closed!")}
      bgColor="#ca7a1e"
      icon={<VoicemailIcon className="text-white" />}
    >
      <textarea
        className="border w-full focus:outline-0 rounded-md resize-none p-2"
        maxLength={100}
        placeholder="Write the text that you want your caller to listen to."
        name=""
        id=""
        rows={4}
        onChange={(e) => {
          setPayload({
            ...payload,
            voice: {
              ...payload.voice,
              voiceText: e.target.value,
            },
          });
        }}
      ></textarea>
      <div className="flex justify-end text-black/50">
        <span>{payload.voice.voiceText.length}/100</span>
      </div>
      <Handle
        type="target"
        position={Position.Top} // ऊपर से incoming edge आएगी
        style={{ background: '#1d82ca',width: 10,height: 10 }}
      />
    </CallFlowHeader>
  );
}
