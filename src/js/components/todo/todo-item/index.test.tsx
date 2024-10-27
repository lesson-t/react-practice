import { fireEvent, render } from "@testing-library/react"
import { TodoItem } from "."
import { BrowserRouter } from "react-router-dom"
import { Table, Tbody } from "@chakra-ui/react"
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

const mockUseAuthStore = jest.fn()
jest.mock("../../../stores/use-auth-store", () => ({
  useAuthStore: () => mockUseAuthStore(),
}))

describe("TodoItemコンポーネントのテスト", () => {
  beforeEach(() => {
    mockUseAuthStore.mockReturnValue({ userName: "田中太郎" })
  })

  test("コンポーネントが正しくレンダリングされること", () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2024-10-26"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    )
    expect(screen.getByText("123")).toBeInTheDocument()
    expect(screen.getByText("掃除")).toBeInTheDocument()
    expect(screen.getByText("山田太郎")).toBeInTheDocument()
    expect(screen.getByText("2024-10-26")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "削除" })).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "/todo/123")
  })
  test("userNameとpersonが一致した場合、colorがredにならないこと", () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2024-10-26"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    )
    expect(screen.getByRole("row")).not.toHaveStyle("color: red")
  })
  test("userNameとpersonが一致した場合、colorがredになること", () => {
    mockUseAuthStore.mockReturnValue({ userName: "山田太郎" })
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2024-10-26"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    )
    // 下記テストが期待通りの結果にならず。rowがundefineとなっている。大体案のテスト作成。
    // expect(screen.getByRole("row")).not.toHaveStyle("color: red")
    expect(screen.getByTestId("todo-row")).toHaveAttribute("data-color", "red")
  })
  test("削除ボタンがクリックされたときに、deleteTodoが呼ばれること", () => {
    const mockDeleteTodo = jest.fn()
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2024-10-26"
              deleteTodo={mockDeleteTodo}
            />
          </Tbody>
        </Table>
      </BrowserRouter>,
    )
    fireEvent.click(screen.getByRole("button", { name: "削除" }))
    expect(mockDeleteTodo).toHaveBeenCalledWith("123")
  })
})
