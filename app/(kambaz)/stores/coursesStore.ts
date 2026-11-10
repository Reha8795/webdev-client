import { create } from "zustand";
import courseData from "../database/courses.json";

export interface Course {
  _id: string; name: string; number: string; term: string; color: string;
  description?: string; startDate?: string;
}
interface CoursesState {
  courses: Course[];
  addCourse: (c: Omit<Course, "_id">) => void;
  updateCourse: (c: Course) => void;
  deleteCourse: (id: string) => void;
}
let nextId = 9000;

export const useCoursesStore = create<CoursesState>((set) => ({
  courses: courseData as Course[],
  addCourse: (c) => set((s) => ({ courses: [...s.courses, { ...c, _id: `C${++nextId}` }] })),
  updateCourse: (c) => set((s) => ({ courses: s.courses.map((x) => (x._id === c._id ? c : x)) })),
  deleteCourse: (id) => set((s) => ({ courses: s.courses.filter((x) => x._id !== id) })),
}));
