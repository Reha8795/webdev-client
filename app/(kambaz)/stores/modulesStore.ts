import { create } from "zustand";
import moduleData from "../database/modules.json";

export interface Module { _id: string; course: string; name: string; lessons: string[]; }
interface ModulesState {
  modules: Module[];
  addModule: (course: string, name: string) => void;
  updateModule: (id: string, name: string) => void;
  deleteModule: (id: string) => void;
}
let nextId = 9000;

export const useModulesStore = create<ModulesState>((set) => ({
  modules: moduleData as Module[],
  addModule: (course, name) => set((s) => ({ modules: [...s.modules, { _id: `M${++nextId}`, course, name, lessons: [] }] })),
  updateModule: (id, name) => set((s) => ({ modules: s.modules.map((m) => (m._id === id ? { ...m, name } : m)) })),
  deleteModule: (id) => set((s) => ({ modules: s.modules.filter((m) => m._id !== id) })),
}));
