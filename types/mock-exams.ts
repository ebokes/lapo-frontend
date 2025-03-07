export interface ExamParticipantsType {
  id: number;
  participant: string;
  email: string;
  userId: string;
  dateStarted: string;
  score: number;
  noOfAttempts: number;
  status: string;
}

export interface MockExamType {
  id: number;
  examinationBody: string;
  subject: string;
  dateCreated: string;
  noOfQuestions: number;
  participants: number;
  duration: string;
}
