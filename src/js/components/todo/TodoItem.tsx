import * as React from "react"
import { useAuth } from "../../hooks/use-auth"
import { memo } from "react"
import { Button, Td, Tr } from "@chakra-ui/react"
import { Link } from "react-router-dom"

type Props = {
  id: string
  task: string
  person: string
  deadline: string
  deleteTodo: (id: string) => void
}

export const TodoItem: React.FC<Props> = memo(
  ({ id, task, person, deadline, deleteTodo }: Props) => {
    const { userName } = useAuth()
    return (
      <Tr color={userName === person ? "red" : ""}>
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
