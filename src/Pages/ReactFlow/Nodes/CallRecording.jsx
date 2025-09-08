import React, { useState } from "react";
import { Switch, FormControlLabel, Tooltip, Box } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import { Handle, Position } from "@xyflow/react";

export default function CallRecording() {
  const [record, setRecord] = useState(false);

  return (
    <>
      {/* <Handle
        type="source"
        position={Position.Top}
        style={{ background: "#1d82ca", width: 10, height: 10 }}
      /> */}
      <div className="w-[550px]  border-t-[3px] border-b-[3px] border-callInfo flex justify-center items-center ">
        {/* Mic Icon with conditional color */}
        <div className="flex gap-3 items-center">
          <MicIcon
            fontSize="medium"
            sx={{
              color: record ? "primary.main" : "rgba(0,0,0,0.5)", // blue when ON, black/50 when OFF
            }}
          />
          <span>Record Calls</span>
          {/* Label + Switch */}
          <FormControlLabel
            control={
              <Switch
                checked={record}
                onChange={(e) => setRecord(e.target.checked)}
                color="primary"
              />
            }
          />
        </div>

        {/* Hint (with tooltip) */}
        <Tooltip
          title="Depending on your region, you may need to notify the other party."
          arrow
        >
          <span
            style={{ color: "#1D82CA", cursor: "not-allowed" }}
            className="text-xs"
          >
            Do I need to notify the called?
          </span>
        </Tooltip>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#1d82ca", width: 10, height: 10 }}
      />
    </>
  );
}
