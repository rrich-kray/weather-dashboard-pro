export const format_time = (s) => {
  const dtFormat = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    timeZone: "EST",
  });

  return dtFormat.format(new Date(s * 1e3));
};
