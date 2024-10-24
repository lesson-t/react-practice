import * as React from "react"
import { createRoot } from "react-dom/client"
import "../css/main.css"
import { AppT } from "./appT"
import { AuthProvider } from "./contexts/AuthContext"
import { Provider } from "@/components/ui/provider"

// Render your React component instead
const root = createRoot(document.getElementById("app")!)
root.render(
  <Provider>
    <AuthProvider>
      <AppT />
    </AuthProvider>
  </Provider>
)
