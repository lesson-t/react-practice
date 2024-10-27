import * as React from "react"
import { memo } from "react"
import { Button, Td, Tr } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useAuthStore } from "../../../stores/use-auth-store"

type Props = {
  id: string
  task: string
  person: string
  deadline: string
  deleteTodo: (id: string) => void
}

export const TodoItem: React.FC<Props> = memo(
  ({ id, task, person, deadline, deleteTodo }: Props) => {
    const { userName } = useAuthStore()
    return (
      <Tr
        color={userName === person ? "red" : ""}
        data-testid="todo-row"
        data-color={userName === person ? "red" : ""}
      >
        <Td>
          <Link to={`/todo/${id}`}>{id}</Link>
        </Td>
        <Td>{task}</Td>
        <Td>{person}</Td>
        <Td>{deadline}</Td>
        <Td>
          <Button onClick={() => deleteTodo(id)} colorScheme="red" size="xs">
            削除
          </Button>
        </Td>
      </Tr>
    )
  },
)