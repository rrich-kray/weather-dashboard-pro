// All functions herein assume input is UNIX format

export const format_time = (s) => {
  const dtFormat = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    timeZone: "EST",
  });

  return dtFormat.format(new Date(s * 1e3));
};

export const format_date_day = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);
  return dateObj.toLocaleString("en-US", { weekday: "long" });
};

export const format_date = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);
  return dateObj.toLocaleDateString();
};

export const date_shortform = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);
  return `${dateObj
    .toLocaleString("en-US", { month: "long" })
    .slice(0, 3)} ${dateObj.toLocaleString("en-US", { day: "numeric" })}`;
};
