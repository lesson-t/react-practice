import { render } from "@testing-library/react"
import { TodoTable } from "."
import { fireEvent, screen } from "@testing-library/dom"
import { BrowserRouter } from "react-router-dom"

describe("TodoTableコンポーネントのテスト", () => {
  test("コンポーネントが正しくレンダリングされること", () => {
    render(
      <BrowserRouter>
        <TodoTable
          todoList={[
            {
              id: "123",
              task: "掃除",
              person: "山田太郎",
              deadline: "2024-10-26",
            },
            {
              id: "456",
              task: "買い物",
              person: "田中太郎",
              deadline: "2024-10-27",
            },
          ]}
          deleteTodo={() => {}}
        />
      </BrowserRouter>,
    )

    const th = screen.getAllByRole("columnheader")
    expect(th[0].textContent).toBe("ID")
    expect(th[1].textContent).toBe("タスク名")
    expect(th[2].textContent).toBe("担当者名")
    expect(th[3].textContent).toBe("締切")
    expect(th[4].textContent).toBe("削除")

    expect(screen.getByText("123")).toBeInTheDocument()
    expect(screen.getByText("掃除")).toBeInTheDocument()
    expect(screen.getByText("山田太郎")).toBeInTheDocument()
    expect(screen.getByText("2024-10-26")).toBeInTheDocument()

    expect(screen.getByText("456")).toBeInTheDocument()
    expect(screen.getByText("買い物")).toBeInTheDocument()
    expect(screen.getByText("田中太郎")).toBeInTheDocument()
    expect(screen.getByText("2024-10-27")).toBeInTheDocument()

    const buttonList = screen.getAllByRole("button", { name: "削除" })
    expect(buttonList).toHaveLength(2)
  })
  test("削除ボタンがクリックされたときに、deleteTodoが呼ばれること", () => {
    const mockDeleteTodo = jest.fn()
    render(
      <BrowserRouter>
        <TodoTable
          todoList={[
            {
              id: "123",
              task: "掃除",
              person: "山田太郎",
              deadline: "2024-10-26",
            },
            {
              id: "456",
              task: "買い物",
              person: "田中太郎",
              deadline: "2024-10-27",
            },
          ]}
          deleteTodo={mockDeleteTodo}
        />
      </BrowserRouter>,
    )
    const buttonList = screen.getAllByRole("button", { name: "削除" })
    fireEvent.click(buttonList[0])
    expect(mockDeleteTodo).toHaveBeenCalledWith("123")
    fireEvent.click(buttonList[1])
    expect(mockDeleteTodo).toHaveBeenCalledWith("456")
  })
})
