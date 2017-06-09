import moment from 'moment';

export default function isNextMonth(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return a.isSame(b.clone().add(1, 'month'), 'month');
}
