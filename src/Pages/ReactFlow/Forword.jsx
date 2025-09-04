import React, { useState } from "react";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import CallFlowHeader from "../Component/CallFlowHeader";
import Input from "../Element/Input";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Dropdown from "../Element/Dropdown";

export default function Forword() {
  const options = [
    { label: "5", value: 1 },
    { label: "10", value: 2 },
    { label: "15", value: 3 },
  ];
  const [phone, setPhone] = useState("");

  function handleChange(e) {
    // remove non-digits
    const val = e.target.value.replace(/\D/g, "");
    setPhone(val.slice(0, 10)); // max 10 digits
  }
  let handleSelect = () => {};

  function formatPhoneNumber(digits) {
    if (!digits) return "";
    const area = digits.slice(0, 3);
    const prefix = digits.slice(3, 6);
    const line = digits.slice(6, 10);

    let formatted = "";
    if (area) formatted = `(${area}`;
    if (prefix) formatted += `) ${prefix}`;
    if (line) formatted += `-${line}`;
    return formatted;
  }

  return (
    <CallFlowHeader
      title="Forward"
      subtitle="This is where the phone will ring when the customers dial your tracking number."
      showClose
      onClose={() => alert("Closed!")}
      bgColor="#1cb041"
      icon={<CallSplitIcon className="text-white" />}
    >
      <Input
        iconLeft={<LocalPhoneIcon className="text-black/30" />}
        type="tel"
        value={formatPhoneNumber(phone)} // format display only
        onChange={handleChange} // store only digits
        placeholder="Enter 10-digit number"
      />

      {phone.length > 0 && phone.length < 10 && (
        <p className="text-error text-sm mt-2">Please enter 10 digits</p>
      )}

      <h5 className="font-normal text-sm pb-2 mt-4">
        Condition (if)
        <span className="text-error"> *</span>
      </h5>
      <div className="border rounded-md p-[0.5rem] text-sm flex items-center flex-wrap gap-1">
        <span>The destination does not answer within</span>
        <Dropdown
          label="select"
          options={options}
          onSelect={handleSelect}
          className="!w-fit "
        />
        <span>the go to next step.</span>
      </div>
    </CallFlowHeader>
  );
}
