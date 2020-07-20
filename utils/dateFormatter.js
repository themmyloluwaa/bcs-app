import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs().format();
dayjs.extend(Calendar);
dayjs.extend(updateLocale);

dayjs().calendar();

const formateDate = (date = "", locale = "en") => {
  dayjs.updateLocale(locale, {
    calendar: {
      lastDay: "[Yesterday,] h:mm A",
      sameDay: "[Today,] h:mm A",
      nextDay: "[Tomorrow,] h:mm A",
      lastWeek: "[last] dddd[,] h:mm A",
      nextWeek: "[Next] dddd[,] h:mm A",
      sameElse: "D/M/YYYY"
    }
  });

  if (!!date === false || date.length === 0) {
    return dayjs().calendar();
  }

  return dayjs(date).calendar();
};

export { formateDate };
