import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MenuIcon from "@mui/icons-material/Menu";
import DialpadIcon from "@mui/icons-material/Dialpad";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function LastFlow() {
    let callFlowlist = [
        { title: "Greeting", color: "#1D82CA", icon: <DraftsIcon className="text-white" /> },
        { title: "Forword", color: "#1cb041", icon: <CallSplitIcon className="text-white" /> },
        { title: "SimulCall", color: "#18bea0", icon: <ConnectWithoutContactIcon className="text-white" /> },
        { title: "Menu", color: "#143ca4", icon: <MenuIcon className="text-white" /> },
        { title: "KeyPad", color: "#ce007c", icon: <DialpadIcon className="text-white" /> },
        { title: "VoiceMail", color: "#ca7a1e", icon: <VoicemailIcon className="text-white" /> },
        { title: "HangUp", color: "#e93c15", icon: <CallEndIcon className="text-white" /> },
    ];

    return (
        <div className="px-[2rem] py-[1rem] rounded-md flex items-center gap-[3rem] bg-accent w-fit">
            {callFlowlist.map((e, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div
                        className="p-2 rounded-[4px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{ backgroundColor: e.color }}
                    >
                        {e.icon}
                    </div>
                    <p className="text-sm mt-1">{e.title}</p>
                </div>
            ))}
        </div>
    );
}
