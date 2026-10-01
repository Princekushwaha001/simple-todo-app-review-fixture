export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export function cloneTodo(todo: Todo): Todo {
  return { ...todo };
}
