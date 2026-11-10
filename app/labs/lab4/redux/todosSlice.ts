import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo { id: number; title: string; }
interface TodosState { todos: Todo[]; }
let nextId = 100;

const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: [
    { id: 1, title: "Buy milk" },
    { id: 2, title: "Walk the dog" },
    { id: 3, title: "Study React" },
  ] } as TodosState,
  reducers: {
    addTodo: (s, a: PayloadAction<string>) => { s.todos.push({ id: ++nextId, title: a.payload }); },
    deleteTodo: (s, a: PayloadAction<number>) => { s.todos = s.todos.filter((t) => t.id !== a.payload); },
    updateTodo: (s, a: PayloadAction<{ id: number; title: string }>) => {
      const t = s.todos.find((t) => t.id === a.payload.id); if (t) t.title = a.payload.title;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
