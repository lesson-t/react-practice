import * as React from "react"
import { NewTodoForm } from "../components/todo/new-todo-form"
import { useTodoList } from "../hooks/use-todo-list"
import { Box, Heading, Input } from "@chakra-ui/react"
import { TodoTable } from "../components/todo/todo-table"
import { Layout } from "../components/layout"

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } =
    useTodoList()

  return (
    <Layout title="TODO">
      <Box as="section" mt="20">
        <Heading as="h2" size="xl">
          新規TODO作成
        </Heading>
        <Box mt="10">
          <NewTodoForm addTodo={addTodo} />
        </Box>
      </Box>

      <Box as="section" mt="20">
        <Heading as="h2" size="xl">
          TODO一覧
        </Heading>
        <Box mt="10">
          <Input
            placeholder="絞込み"
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
            w={40}
          />
        </Box>
        <Box mt="10">
          <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
        </Box>
      </Box>
    </Layout>
  )
}
