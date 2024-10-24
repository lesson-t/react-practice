import * as React from "react"
import { Heading } from "../components/parts/Heading"
import { Button } from "../components/parts/Button"
import { NewTodoForm } from "../components/todo/NewTodoForm"
import { TodoList } from "../components/todo/TodoList"
import { useTodoList } from "../hooks/use-todo-list"
import { useAuth } from "../hooks/use-auth"
import { TextField } from "../components/parts/TextField"

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList()
  const { logout, userName } = useAuth()
  console.log("Todoコンポーネントのレンダー")

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{userName}</div>
      <div>
        <Button onClick={logout} color="red">
          ログアウト
        </Button>
      </div>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TextField
            id={"filter-word"}
            label="絞込み"
            value={filterWord}
            onChange={setFilterWord}
            type={"text"}
          />
        </div>
        <div className="mt-8">
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
      </div>
    </main>
  )
}
