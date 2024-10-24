import * as React from "react"
import { useAuth } from "./hooks/use-auth"
import { Login } from "./pages/Login"
import { Todo } from "./pages/Todo"

export const AppT = () => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <Login />
  }

  return <Todo />
}
