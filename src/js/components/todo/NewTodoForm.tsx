import * as React from "react"
import { TextField } from "../parts/TextField"
import { useState } from "react"
import { Button } from "../parts/Button"

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void
}

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = useState<string>("")
  const [newPerson, setNewPerson] = useState<string>("")
  const [newDeadline, setNewDeadline] = useState<string>("")
  console.log("NewTodoFormコンポーネントのレンダー")

  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline)

    setNewTask("")
    setNewPerson("")
    setNewDeadline("")
  }

  return (
    <div className="flex gap-1">
      <TextField
        id="new-task"
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      />
      <TextField
        id="new-person"
        label="担当者名"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      />
      <TextField
        id="new-deadline"
        label="締切"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      <Button onClick={addNewTodo} color="blue">
        追加
      </Button>
    </div>
  )
}
