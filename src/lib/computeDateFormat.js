import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';
import isWithinRange from 'date-fns/is_within_range';
import subDays from 'date-fns/sub_days';

export default date => {
  return isWithinRange(date, subDays(new Date(), 10), new Date())
    ? distanceInWordsToNow(date, { addSuffix: true })
    : format(date, `MMMM Do YYYY`);
};
