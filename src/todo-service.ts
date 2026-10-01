import { cloneTodo, type Todo } from './todo.js';

export class TodoService {
  private readonly todos = new Map<string, Todo>();

  createTodo(id: string, title: string): Todo {
    const normalizedId = id.trim();
    const normalizedTitle = title.trim();

    if (!normalizedId) {
      throw new Error('Todo id is required');
    }

    if (!normalizedTitle) {
      throw new Error('Todo title is required');
    }

    if (this.todos.has(normalizedId)) {
      throw new Error('Todo already exists');
    }

    const todo: Todo = {
      id: normalizedId,
      title: normalizedTitle,
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.todos.set(normalizedId, todo);
    return cloneTodo(todo);
  }

  getTodo(id: string): Todo | undefined {
    const todo = this.todos.get(id.trim());
    return todo ? cloneTodo(todo) : undefined;
  }

  listTodos(): Todo[] {
    return [...this.todos.values()].map(cloneTodo);
  }
}
