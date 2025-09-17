import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/Pages/Router/Router";


export default function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
