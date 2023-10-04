import dayjs from 'dayjs';

export default function dateFormat(date, format = 'DD MMM YYYY') {
  return dayjs(date).format(format);
}
