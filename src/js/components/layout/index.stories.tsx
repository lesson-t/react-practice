import type { Meta, StoryObj } from "@storybook/react"
import { Layout } from "./index"
import { useAuthStore } from "../../stores/use-auth-store"
import { useEffect } from "react"
import React from "react"
import ReactDOM from 'react-dom';

const meta = {
  title: "Component/Layout",
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    title: "TODOリスト",
  },
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => {
      const { login } = useAuthStore()
      useEffect(() => {
        login("山田太郎")
      }, [])
      return <Story />
    }
  ]
}
