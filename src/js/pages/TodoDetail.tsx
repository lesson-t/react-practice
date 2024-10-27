import { Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useTodoList } from "../hooks/use-todo-list"
import { Layout } from "../components/layout"
import { NotFound } from "./NotFound"

export const TodoDetail = () => {
  let { id } = useParams()
  const { todoList } = useTodoList()

  const todo = todoList.find((todo) => todo.id === id)

  if (!todo) return <NotFound></NotFound>
  return (
    <Layout title="TODO詳細">
      <Box as="section" mt="20">
        <Box>ID:{todo?.id}</Box>
        <Box>タスク名：{todo?.task}</Box>
        <Box>担当者名：{todo?.person}</Box>
        <Box>締切：{todo?.deadline}</Box>
      </Box>
    </Layout>
  )
}
