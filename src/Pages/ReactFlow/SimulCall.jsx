import React from "react";
// deskphone
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CallFlowHeader from "../Component/CallFlowHeader";
import Dropdown from "../Element/Dropdown";

export default function SimulCall() {
  const options = [
    { label: "5", value: 1 },
    { label: "10", value: 2 },
    { label: "15", value: 3 },
  ];
    const phoneoptions = [
    { label: "Number", value: "number" },
    { label: "Extension", value: "extension" },
    { label: "SIP", value: "sip"},
  ];
  return (
    <CallFlowHeader
      title="SimulCall"
      subtitle="We'll dial all numbers in the Simulcall at the same time. The first
  person to answer will be connected to the caller."
      showClose
      onClose={() => alert("Closed!")}
      icon={<ConnectWithoutContactIcon className="text-white" />}
    >
      <div className="text-base font-normal mb-2">Forward call to</div>

      {/* Input + Dropdown */}
      <div className="flex items-center bg-accent p-1 gap-2">
        <input
          type="text"
          className="flex-grow border-2  rounded-md p-2 focus:outline-none bg-accent"
          placeholder="Please Enter Number"
          maxLength="12"
        />

        {/* Custom Dropdown */}
        <Dropdown
          label="Number"
          options={phoneoptions}
          childClass="py-2"
          onSelect={(val) => console.log("Selected:", val)}
        />
      </div>

      {/* Condition Section */}
      <div className="mt-4">
        <h5 className="font-normal text-base pb-2">
          Condition (if) <span className="text-error">*</span>
        </h5>
        <div className="border rounded-md p-2">
          <span className="text-sm">
            The destination does not answer within
          </span>{" "}
          <Dropdown
            label="select"
            options={options}
            onSelect={(val) => console.log("Timeout:", val)}
          />
          <span className="text-sm ml-1">then go to next step</span>
        </div>
      </div>
    </CallFlowHeader>
  );
}
