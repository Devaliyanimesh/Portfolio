import DraftsIcon from "@mui/icons-material/Drafts";
import { useState } from "react";
import CallFlowHeader from "../../Component/CallFlowHeader";
import { Handle,Position } from "@xyflow/react";
export default function Greeting() {
  let [payload,setPayload] = useState({
    greeting: {
      greetingText: "",
    },
  });

  return (
    <CallFlowHeader
      title="Greeting"
      subtitle="Play a message to the caller. Frequently used to notify the caller
        about call recording."
      showClose
      onClose={() => alert("Closed!")}
      icon={<DraftsIcon className="text-white" />}
    >
     <Handle
        type="source"
        position={Position.Bottom} // ऊपर से incoming edge आएगी
        style={{ background: '#1d82ca',width: 10,height: 10 }}
      />



      <textarea
        className="border w-full focus:outline-0 rounded-md resize-none p-2"
        maxLength={100}
        name=""
        id=""
        rows={4}
        placeholder="Write the text that you want your caller to listen to."

        onChange={(e) => {
          setPayload({
            ...payload,
            greeting: {
              ...payload.greeting,
              greetingText: e.target.value,
            },
          });
        }}
      ></textarea>
      <div className="flex justify-end text-black/50">
        <span>{payload.greeting.greetingText.length}/100</span>
      </div>

      <Handle
        type="target"
        position={Position.Top} // ऊपर से incoming edge आएगी
        style={{ background: '#1d82ca',width: 10,height: 10 }}
      />

    </CallFlowHeader>
  );
}
