export enum StudentStatus {
  Year1,
  Year2,
  NotEnrolled,
}

export const getStudentStatus = (startYear: number, defaultStartMonth: number = 8): StudentStatus => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const isAfterStartMonth = currentMonth >= defaultStartMonth;

  const yearsPassed = currentYear - startYear - (isAfterStartMonth ? 0 : 1);

  if (yearsPassed === 0) {
    return StudentStatus.Year1;
  } else if (yearsPassed === 1) {
    return StudentStatus.Year2;
  } else {
    return StudentStatus.NotEnrolled;
  }
};