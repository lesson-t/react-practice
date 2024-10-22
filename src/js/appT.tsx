import * as React from "react"
import { TodoList } from "./components/todo/TodoList"
import { Heading } from "./components/parts/Heading"
import { NewTodoFrom } from "./components/todo/NewTodoForm"
import { useTodoList } from "./components/todo/use-todo-list"

export const AppT = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList()

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoFrom addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
      </div>
    </main>
  )
}
