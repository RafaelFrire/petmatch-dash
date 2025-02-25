export const formatDateDayMonthYear = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};
