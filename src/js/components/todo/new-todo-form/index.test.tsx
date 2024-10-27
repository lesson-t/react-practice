import { fireEvent, render } from "@testing-library/react"
import { screen } from "@testing-library/dom"
import { NewTodoForm } from "."

describe("NewTodoFormコンポーネントのテスト", () => {
  test("コンポーネントが正しくレンダリングされること", () => {
    render(<NewTodoForm addTodo={() => {}} />)
    const task = screen.getByPlaceholderText("タスク名")
    const person = screen.getByPlaceholderText("担当者名")
    const deadline = screen.getByPlaceholderText("締切")
    const button = screen.getByRole("button", { name: "追加" })
    expect(task).toBeInTheDocument()
    expect(person).toBeInTheDocument()
    expect(deadline).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
  test("input要素に値を入力すると正しくvalueがセットされること", () => {
    render(<NewTodoForm addTodo={() => {}} />)
    const task = screen.getByPlaceholderText("タスク名")
    const person = screen.getByPlaceholderText("担当者名")
    const deadline = screen.getByPlaceholderText("締切")

    fireEvent.change(task, { target: { value: "掃除" } })
    fireEvent.change(person, { target: { value: "山田太郎" } })
    fireEvent.change(deadline, { target: { value: "2024-10-26" } })

    expect(task).toHaveValue("掃除")
    expect(person).toHaveValue("山田太郎")
    expect(deadline).toHaveValue("2024-10-26")
  })
  test("追加ボタンをクリックするとaddTodo関数が実行され、input要素のvalueが空になること", () => {
    const mockAddTodo = jest.fn()

    render(<NewTodoForm addTodo={mockAddTodo} />)
    const task = screen.getByPlaceholderText("タスク名")
    const person = screen.getByPlaceholderText("担当者名")
    const deadline = screen.getByPlaceholderText("締切")
    const button = screen.getByRole("button", { name: "追加" })

    fireEvent.change(task, { target: { value: "掃除" } })
    fireEvent.change(person, { target: { value: "山田太郎" } })
    fireEvent.change(deadline, { target: { value: "2024-10-26" } })

    fireEvent.click(button)

    expect(mockAddTodo).toHaveBeenCalled()

    expect(task).toHaveValue("")
    expect(person).toHaveValue("")
    expect(deadline).toHaveValue("")
  })
})
