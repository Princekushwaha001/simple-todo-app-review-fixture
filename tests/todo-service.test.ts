import { describe, expect, it } from 'vitest';
import { TodoService } from '../src/todo-service.js';

describe('TodoService', () => {
  it('creates and reads a todo', () => {
    const service = new TodoService();

    const created = service.createTodo('1', 'Buy milk');

    expect(created).toMatchObject({
      id: '1',
      title: 'Buy milk',
      completed: false
    });
    expect(service.getTodo('1')).toEqual(created);
  });

  it('rejects blank identifiers and titles', () => {
    const service = new TodoService();

    expect(() => service.createTodo(' ', 'Task')).toThrow('Todo id is required');
    expect(() => service.createTodo('1', ' ')).toThrow('Todo title is required');
  });

  it('prevents duplicate identifiers', () => {
    const service = new TodoService();

    service.createTodo('1', 'First');

    expect(() => service.createTodo('1', 'Second')).toThrow('Todo already exists');
  });

  it('returns an empty list initially', () => {
    const service = new TodoService();
    expect(service.listTodos()).toEqual([]);
  });

  it('returns copies instead of exposing internal state', () => {
    const service = new TodoService();
    const created = service.createTodo('1', 'Buy milk');

    created.title = 'Changed outside service';

    expect(service.getTodo('1')?.title).toBe('Buy milk');
  });
});
