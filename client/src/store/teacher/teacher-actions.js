import { teacherActionTypes } from "./teacher-action-types";

export const selectTeacherSlug = (teacherSlug) => ({
  type: teacherActionTypes.SELECT_TEACHER_SLUG,
  payload: teacherSlug,
});
