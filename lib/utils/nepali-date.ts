import NepaliDate from "nepali-date-converter";
import { DayOfWeek, getEndOfWeek, getStartOfWeek } from "..";
NepaliDate.language = "np";
export default NepaliDate;

export const getNepaliDate = (date: Date) => new NepaliDate(date).format("D");

export function isSameMonthNepali(date: Date, comparison: Date) {
  var nepaliDate = new NepaliDate(date); // Convert the Gregorian date to Nepali
  var comparisonNepaliDate = new NepaliDate(comparison); // Convert the Gregorian date to Nepali
  return (
    nepaliDate.getYear() === comparisonNepaliDate.getYear() &&
    nepaliDate.getMonth() === comparisonNepaliDate.getMonth()
  );
}

export function getMonthDaysNepali(
  month: Date,
  firstDayOfWeek: DayOfWeek = 1,
  // @ts-ignore
  timezone: string | undefined = undefined 
): Date[][] {
  const nepaliDate = new NepaliDate(month); // Convert the Gregorian date to Nepali
  const currentYear = nepaliDate.getYear();
  const currentMonth = nepaliDate.getMonth();
  const startOfMonth = new NepaliDate(currentYear, currentMonth, 1);
  const endOfMonth = new NepaliDate(currentYear, currentMonth + 1, 0);
  const endDate = getEndOfWeek(endOfMonth.toJsDate(), firstDayOfWeek);
  const date = getStartOfWeek(startOfMonth.toJsDate(), firstDayOfWeek);
  const weeks: Date[][] = [];

  while (date <= endDate) {
    const days: Date[] = [];

    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    weeks.push(days);
  }

  return weeks;
}

export const formatNepaliDate = (
  date: Date,
  monthLabelFormat?: string | ((month: Date) => React.ReactNode),
  locale?: string
) => {
  if (typeof monthLabelFormat === "function") {
    monthLabelFormat(new NepaliDate(date).toJsDate());
  }
  if (!monthLabelFormat) {
    monthLabelFormat = "YYYY MMMM DD";
  }
  return new NepaliDate(date).format(
    monthLabelFormat as string,
    locale === "ne" ? "np" : "en"
  );
};
