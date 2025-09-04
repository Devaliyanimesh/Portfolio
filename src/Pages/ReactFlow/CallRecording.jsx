import React, { useState } from "react";
import { Switch, FormControlLabel, Tooltip, Box } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

export default function CallRecording() {
  const [record, setRecord] = useState(false);

  return (
    <div className="w-[550px] min-w-[350px] flex items-center ">

    <Box
      display="flex"
      alignItems="center"
      gap={2}
      p={0.5}
      borderTop={2}
      borderBottom={2}
      borderColor="primary.main"
    >
      {/* Mic Icon with conditional color */}
      <MicIcon
        fontSize="large"
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

      {/* Hint (with tooltip) */}
      <Tooltip
        title="Depending on your region, you may need to notify the other party."
        arrow
      >
        <span style={{ color: "#1D82CA", cursor: "not-allowed" }}>
          Do I need to notify the called?
        </span>
      </Tooltip>
    </Box>
    </div>

  );
}
