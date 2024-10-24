import * as React from "react"
import { createRoot } from "react-dom/client"
import "../css/main.css"
import { AppT } from "./appT"
import { AuthProvider } from "./contexts/AuthContext"
import { ChakraProvider } from '@chakra-ui/react'

// Render your React component instead
const root = createRoot(document.getElementById("app")!)
root.render(
  <ChakraProvider>
    <AuthProvider>
      <AppT />
    </AuthProvider>
  </ChakraProvider>
)
