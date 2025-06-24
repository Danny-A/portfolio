import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  // Just ensure consistent formatting with explicit locale
  return isNaN(date.getTime())
    ? ''
    : format(date, 'MMMM yyyy', {
        locale: nl,
      });
};
