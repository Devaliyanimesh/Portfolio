import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Pages/Router/Router";

import LastFlow from "./Pages/ReactFlow/LastFlow";



export default function App() {

  return (
    <div>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}


      <LastFlow />
    </div>
  );
}
