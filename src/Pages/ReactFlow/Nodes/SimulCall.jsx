import React, { useState } from "react";
// deskphone
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CallFlowHeader from "../../Component/CallFlowHeader";
import Dropdown from "../../Element/Dropdown";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Handle, Position } from "@xyflow/react";
export default function SimulCall() {
  const options = [
    { label: "5", value: 1 },
    { label: "10", value: 2 },
    { label: "15", value: 3 },
  ];
  const phoneoptions = [
    { label: "Number", value: "number" },
    { label: "Extension", value: "extension" },
    { label: "SIP", value: "sip" },
  ];

  let [calllist, setCalllist] = useState([{ title: "", value: "" }]);
  return (
    <CallFlowHeader
      title="SimulCall"
      subtitle="We'll dial all numbers in the Simulcall at the same time. The first
  person to answer will be connected to the caller."
      showClose
      onClose={() => alert("Closed!")}
      bgColor="#18bea0"
      icon={<ConnectWithoutContactIcon className="text-white" />}
    >
        <Handle
        type="source"
        position={Position.Bottom} // ऊपर से incoming edge आएगी
        style={{ background: '#1d82ca',width: 10,height: 10 }}
      />

      <div className="text-base font-normal mb-2">Forward call to</div>

      {/* Input + Dropdown */}
      {calllist.map((e, i) => {
        return (
          <div className="flex items-center bg-accent py-1 gap-2" key={i}>
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
              className="w-[130px]"
              onSelect={(val) => console.log("Selected:", val)}
            />
            <div
              className={`${calllist.length < 2 ? "hidden" : ""}`}
              onClick={() => {
                setCalllist(calllist.filter((e, index) => index !== i));
              }}
            >
              <CloseIcon className="text-info/80 hover:text-black" />
            </div>
          </div>
        );
      })}

      <div
        className=" text-sm border border-accent bg-[#18bea0]  text-white p-2  rounded-md mt-1 flex  justify-center items-center w-fit cursor-pointer "
        onClick={() => {
          setCalllist([...calllist, { title: "", value: "" }]);
        }}
      >
        {" "}
        <span>Add Number</span> <AddIcon className="!text-md text-white" />{" "}
      </div>

      {/* Condition Section */}
      <div className="mt-4">
        <h5 className="font-normal text-base pb-2">
          Condition (if) <span className="text-error">*</span>
        </h5>
        <div className="border rounded-md p-2 ">
          <span className="text-sm">
            The destination does not answer within
          </span>{" "}
          <Dropdown
            defaultValue={{ label: "5", value: 1 }}
            options={options}
            className="!w-[80px]"
            onSelect={(val) => console.log("Timeout:", val)}
          />
          <span className="text-sm ml-1">then go to next step.</span>
        </div>
      </div>
          <Handle
              type="target"
              position={Position.Top} // ऊपर से incoming edge आएगी
              style={{ background: '#1d82ca', width: 10, height: 10 }}
            />
    </CallFlowHeader>
  );
}
