import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Pages/Router/Router";
import CallFlow from "./Pages/ReactFlow/CallFlow";
import Recording from "./Pages/ReactFlow/Recording";
import Greeting from "./Pages/ReactFlow/Greeting";
import Forword from "./Pages/ReactFlow/Forword";
import StartCallFlow from "./Pages/ReactFlow/StartCallFlow";
import CallRecording from "./Pages/ReactFlow/CallRecording";
import SimulCall from "./Pages/ReactFlow/SimulCall";
import Menu from "./Pages/ReactFlow/Menu";
import VoiceMail from "./Pages/ReactFlow/VoiceMail";
import HangUp from "./Pages/ReactFlow/HangUp";

// const JavascriptApp = React.lazy(() => import('JavascriptCode/code'));
// const TerminalApp = React.lazy(() => import('terminal/terminal'));

export default function App() {
  let [payload, setPayload] = useState({
    recoding: {
      recodingText: "",
    },
  });
  return (
    <div>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}

      {/* <Forword/> */}
      {/* <VoiceMail/> */}
      <HangUp />
    </div>
  );
}
