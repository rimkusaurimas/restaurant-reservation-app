export const timeDifference = (time) => {
  const previous = Date.parse(time);
  const current = Date.now();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + "S";
  }
  if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + "M";
  }

  if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + "H";
  }

  if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + "D";
  }

  if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + "MO";
  }

  return Math.round(elapsed / msPerYear) + "Y";
};

export const getFormattedDate = () => {
  const dateObj = new Date();
  const weekday = dateObj.toLocaleString("default", { weekday: "long" });
  const month = dateObj.toLocaleString("default", { month: "long" });
  return `${weekday}, ${dateObj.getDate()} ${month}`;
};

export const formatDate = (dateToFormat) => {
  const date = new Date(`${dateToFormat}`).toLocaleDateString();
  return date;
};

export const formatTime = (timeToFormat) => {
  const time = new Date(`${timeToFormat}`)
    .toLocaleTimeString("en-US")
    .split(" ");
  const formatTime = time[0].split(":").splice(0, 2).join(":");
  const dayTime = time[1];
  const formattedTime = `${formatTime} ${dayTime}`;

  return formattedTime;
};
