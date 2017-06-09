import moment from 'moment';

export default function isPrevMonth(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return a.isSame(b.clone().subtract(1, 'month'), 'month')
}
