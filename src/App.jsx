import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Pages/Router/Router";
import CallFlow from "./Pages/ReactFlow/CallFlow";
import Recording from "./Pages/ReactFlow/Recording";
import Greeting from "./Pages/ReactFlow/Greeting";
import Forword from "./Pages/ReactFlow/Forword";


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

   
      <Forword/>
    </div>
  );
}
