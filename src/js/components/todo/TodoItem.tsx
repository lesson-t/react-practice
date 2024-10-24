import * as React from "react"
import { Button } from "../parts/Button"
import { useAuth } from "../../hooks/use-auth"
import { memo } from "react"

type Props = {
  id: number
  task: string
  person: string
  deadline: string
  deleteTodo: (id: number) => void
}

export const TodoItem: React.FC<Props> = memo(({
  id,
  task,
  person,
  deadline,
  deleteTodo,
}: Props) => {
  const { userName } = useAuth()
  console.log("TodoItemコンポーネントのレンダー")
  const style = userName === person ? "text-red-600 font-bold" : ""
  return (
    <li className="grid grid-cols-4">
      <div>{task}</div>
      <div className={style}>{person}</div>
      <div>{deadline}</div>
      <div>
        <Button onClick={() => deleteTodo(id)} color="red">
          削除
        </Button>
      </div>
    </li>
  )
})
