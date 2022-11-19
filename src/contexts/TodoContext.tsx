import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { iPropsTodoContextProvider, iTodo, iTodoContext } from "./types";

const TodoContext = createContext({} as iTodoContext);

export const TodoContextProvider = ({
  children,
}: iPropsTodoContextProvider) => {
  const [todoList, setTodoList] = useState([] as iTodo[]);

  const addTodo = (name: string) => {
    const newTodo = {
      id: todoList.length,
      name: name,
      finished: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (todo: iTodo) => {
    const newTodoList = todoList.filter((el) => el !== todo);
    setTodoList([...newTodoList]);
  };

  const finishingTodo = (todo: iTodo) => {
    const newTodo = { ...todo, finished: !todo.finished };
    const newTodoList = todoList.map((el) => (todo === el ? newTodo : el));
    setTodoList([...newTodoList]);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, deleteTodo, finishingTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
