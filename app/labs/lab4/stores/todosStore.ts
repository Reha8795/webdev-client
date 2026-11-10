import { create } from "zustand";

interface Todo { id: number; title: string; }
interface TodosState {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
}
let nextId = 200;

export const useTodosStore = create<TodosState>((set) => ({
  todos: [
    { id: 1, title: "Read Chapter 4" },
    { id: 2, title: "Build Lab 4" },
    { id: 3, title: "Push a4 branch" },
  ],
  addTodo: (title) => set((s) => ({ todos: [...s.todos, { id: ++nextId, title }] })),
  deleteTodo: (id) => set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
  updateTodo: (id, title) => set((s) => ({ todos: s.todos.map((t) => (t.id === id ? { ...t, title } : t)) })),
}));
