import * as React from "react"
import { createRoot } from "react-dom/client"
import { NameList } from "./components/NameList"
import "../css/main.css"
import { AppT } from "./appT"

// Render your React component instead
const root = createRoot(document.getElementById("app")!)
root.render(<AppT />)

const nameRoot = createRoot(document.getElementById("name")!)
nameRoot.render(<NameList />)
