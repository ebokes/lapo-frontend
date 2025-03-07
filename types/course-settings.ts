export interface CoursesType {
  id: number;
  courseImage: any;
  courseDescription: string;
  subject: string;
  dateAdded: string;
  enrolledStudents: number;
  duration: string;
  status: string;
}

export interface ViewCourseType {
  id: number;
  student: string;
  email: string;
  userId: string;
  dateStarted: string;
  finishedDate?: string;
  lastTaken?: string;
  status: string;
}
