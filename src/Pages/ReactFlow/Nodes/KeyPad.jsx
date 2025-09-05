import React from 'react'
import CallFlowHeader from '../../Component/CallFlowHeader'
import DialpadIcon from '@mui/icons-material/Dialpad';
import Dropdown from '../../Element/Dropdown';
import { Handle, Position } from '@xyflow/react';

export default function KeyPad() {
    const options = [
        { label: "5",value: 1 },
        { label: "10",value: 2 },
        { label: "15",value: 3 },
    ];

    function handleChange(e) {
    }
    return (
        <CallFlowHeader
            bgColor="#ce007c"
            title="keypad Entry"
            subtitle="Prompt the caller to enter a code. This can be a pin , account number
  ,or any numeric identifier that includes upto 15 digits . The code
  they enter show in the lead center and on their timeline."
            showClose
            onClose={() => alert("Closed!")}
            icon={<DialpadIcon className="text-white" />}
        >
            <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                value={""}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 text-black`}
                required
                placeholder="Enter  pin, number,account "
            />
            <h5 className="font-normal text-sm pb-2 mt-4">
                Condition (if)
                <span className="text-error"> *</span>
            </h5>
            <div className="border rounded-md p-[0.5rem] text-sm flex items-center flex-wrap gap-1 mt-1">
                <span>The destination does not answer within</span>
                <Dropdown
                    label="select"
                    options={options}
                    onSelect={handleChange}
                    className="!w-fit "
                />
                <span>the go to next step.</span>
            </div>
                <Handle
                    type="target"
                    position={Position.Top} // ऊपर से incoming edge आएगी
                    style={{ background: '#1d82ca', width: 10, height: 10 }}
                  />
        </CallFlowHeader>
    )
}
