import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CallFlowHeader from "../../Component/CallFlowHeader";
import Dropdown from "../../Element/Dropdown";
import { Handle, Position } from "@xyflow/react";

export default function Menu() {
  const [payload, setPayload] = useState({ menu: { menuText: "" } });

  const numberTypeArray = [
    ...Array(12).fill(1).map((_, i) => ({
      label:
        i < 10
          ? `if Presses ${i}`
          : i === 10
          ? "if Presses *"
          : "if Presses #",
      value: i < 10 ? `${i}` : i === 10 ? "*" : "#",
    })),
  ];

  const [redirectFlow, setRedirectFlow] = useState([
    { label: "if Presses 0", value: "0" },
  ]);

  const getAvailableOptions = (currentIndex) => {
    const usedValues = redirectFlow.map((item) => item.value);
    return numberTypeArray.filter(
      (item) =>
        !usedValues.includes(item.value) ||
        item.value === redirectFlow[currentIndex].value
    );
  };

  const handleDropdownChange = (index, selected) => {
    const updated = [...redirectFlow];
    updated[index] = selected;
    setRedirectFlow(updated);
  };

  const handleAddFlow = () => {
    const usedValues = redirectFlow.map((item) => item.value);
 
    const nextItem = numberTypeArray.find((item) => !usedValues.includes(item.value));
    console.log("Hii ~ Menu.jsx ~ handleAddFlow ~ nextItem:", nextItem)
    if (nextItem) setRedirectFlow([...redirectFlow, nextItem]);
  };

  const handleRemoveFlow = (index) => {
    setRedirectFlow(redirectFlow.filter((_, i) => i !== index));
  };

  // Check if there is any number left to add
  const allUsed = redirectFlow.length >= numberTypeArray.length;

  return (
    <CallFlowHeader
      bgColor="#143ca4"
      title="Menu"
      subtitle="Prompt the caller to select from a menu of options using the keypad on their phone."
      showClose
      onClose={() => alert("Closed!")}
      icon={<MenuIcon className="text-white" />}
    >
      <textarea
        className="border w-full focus:outline-none rounded-md resize-none p-2"
        maxLength={100}
        name="menuText"
        id="menuText"
        placeholder="Write the text that you want your caller to listen to."

        rows={4}
        value={payload.menu.menuText}
        onChange={(e) =>
          setPayload({
            ...payload,
            menu: { ...payload.menu, menuText: e.target.value },
          })
        }
      />

      <div className="flex justify-end text-black/50">
        <span>{payload.menu.menuText.length}/100</span>
      </div>

      <div>
        <p>Redirect caller To</p>

        {redirectFlow.map((item, i) => (
          <div key={i} className="flex items-center  py-1 gap-2">
            <input
              type="text"
              className="flex-grow border-2 rounded-md p-2 focus:outline-none"
              placeholder="Please Enter Number"
              maxLength={12}
            />

            <Dropdown
              label={item.label}
              options={getAvailableOptions(i)}
              childClass="py-2"
              className="w-[130px]"
              onSelect={(val) => handleDropdownChange(i, val)}
            />

            {redirectFlow.length > 1 && (
              <div onClick={() => handleRemoveFlow(i)}>
                <CloseIcon className="text-info/80 hover:text-black cursor-pointer" />
              </div>
            )}
          </div>
        ))}

        <button
          className={`text-sm border border-accent bg-[#18bea0] text-white p-2 rounded-md mt-1 flex justify-center items-center w-fit cursor-pointer hover:bg-[#159a88] ${
            allUsed ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleAddFlow}
          disabled={allUsed}
        >
          <span>Add flow</span>
          <AddIcon className="!text-md text-white ml-1" />
        </button>
      </div>
          <Handle
              type="target"
              position={Position.Top} // ऊपर से incoming edge आएगी
              style={{ background: '#1d82ca', width: 10, height: 10 }}
            />
    </CallFlowHeader>
  );
}
