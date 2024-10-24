import * as React from "react"
import { TodoItem } from "./TodoItem"
import { Todo } from "./Type"
import { useAuth } from "../../hooks/use-auth"
import { memo } from "react"

type Props = {
  todoList: Todo[]
  deleteTodo: (id: number) => void
}

const isDeepEqual = (object1: any, object2: any) => {

  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object: any) => {
  return object != null && typeof object === "object";
};

export const TodoList = memo(({ todoList, deleteTodo }: Props) => {
  console.log("TodoListコンポーネントのレンダー")

  return (
    <ul className="mt-4 ml-4 bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-4 font-bold">
        <div>タスク名</div>
        <div>担当者名</div>
        <div>締切</div>
        <div>削除</div>
      </li>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}, isDeepEqual)
