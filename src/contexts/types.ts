export interface iPropsTodoContextProvider {
  children: React.ReactNode;
}

export interface iTodoContext {
  todoList: iTodo[];
  addTodo: (name: string) => void;
  deleteTodo: (todo: iTodo) => void;
  finishingTodo: (todo: iTodo) => void;
}

export interface iTodo {
  id: number;
  name: string;
  finished: boolean;
}
