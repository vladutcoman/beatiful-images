
type Times = {
  yearsDiff: number;
  monthsDiff: number;
  weeksDiff: number;
  daysDiff: number;
  hoursDiff: number;
}

export const getHoursDiff = (postDate: Date, currentDate: Date): number => {
  const t2 = currentDate.getTime();
  const t1 = postDate.getTime();

  return Math.floor((t2 - t1) / (3600 * 1000));
}

export const getDaysDiff = (postDate: Date, currentDate: Date): number => {
  const t2 = currentDate.getTime();
  const t1 = postDate.getTime();

  return Math.floor((t2 - t1) / (24 * 3600 * 1000));
}

export const getWeeksDiff = (postDate: Date, currentDate: Date): number => {
  const t2 = currentDate.getTime();
  const t1 = postDate.getTime();

  return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7));
}

export const getMonthsDiff = (postDate: Date, currentDate: Date): number => {
  const d1Y = postDate.getFullYear();
  const d2Y = currentDate.getFullYear();
  const d1M = postDate.getMonth();
  const d2M = currentDate.getMonth();

  return Math.floor((d2M + 12 * d2Y) - (d1M + 12 * d1Y));
}

export const getYearsDiff = (postDate: Date, currentDate: Date): number => {
  return Math.floor(currentDate.getFullYear() - postDate.getFullYear());
}

export const getTimeText = ({
  yearsDiff,
  monthsDiff,
  weeksDiff,
  daysDiff,
  hoursDiff,
}: Times): string => {
  const durationValues = [
    { unit: "year", value: yearsDiff },
    { unit: "month", value: monthsDiff },
    { unit: "week", value: weeksDiff },
    { unit: "day", value: daysDiff },
    { unit: "hour", value: hoursDiff },
  ];

  const duration = durationValues.find((dv) => dv.value > 0);

  if (duration) {
    return `${duration.value} ${duration.unit}${duration.value > 1 ? "s" : ""} ago`;
  }

  return "Just now";
};