import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import CallFlowHeader from "../Component/CallFlowHeader";
import { useState } from "react";

export default function Recording() {
let  [payload,setPayload]=useState({
    recoding:{
        recodingText:""
    }
})

  return (
    <CallFlowHeader
      title="Recording"
      subtitle="Read the message for the caller"
      showClose
      onClose={() => alert("Closed!")}
      icon={<RecordVoiceOverIcon className="text-white" />}
    >
      <textarea
        className="border w-full focus:outline-0 rounded-md resize-none p-2"
        maxLength={100}
        name=""
        id=""
        rows={4}
        onChange={(e) => {
          setPayload({
            ...payload,
            recoding: {
              ...payload.recoding,
              recodingText: e.target.value,
            },
          });
        }}
      ></textarea>
      <div className="flex justify-end text-black/50">
        <span>{payload.recoding.recodingText.length}/100</span>
      </div>
    </CallFlowHeader>
  );
}
