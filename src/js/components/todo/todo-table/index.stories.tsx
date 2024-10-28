import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { TodoTable } from "./index"
import React from "react"
import ReactDOM from 'react-dom';


const meta = {
  title: "Component/TodoTable",
  component: TodoTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    todoList: [
      {
        id: "123",
        task: "掃除",
        person: "山田太郎",
        deadline: "2024-10-28",
      },
      {
        id: "456",
        task: "買い物",
        person: "田中太郎",
        deadline: "2024-10-28",
      },
      {
        id: "789",
        task: "洗濯",
        person: "浅井太郎",
        deadline: "2024-10-29",
      },
    ],
    deleteTodo: fn(),
  },
} satisfies Meta<typeof TodoTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
