import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Pages/Router/Router";
import CallFlow from "./Pages/ReactFlow/CallFlow";


export default function App() {

  return (
    <div>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
      <CallFlow/>
    </div>
  );
}
