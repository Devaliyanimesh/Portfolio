import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from '../src/Pages/Router/Router'
import CallFlow from './Pages/ReactFlow/CallFlow'

// const JavascriptApp = React.lazy(() => import('JavascriptCode/code'));
// const TerminalApp = React.lazy(() => import('terminal/terminal'));

export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
      <CallFlow />
    </div>
  )
}
