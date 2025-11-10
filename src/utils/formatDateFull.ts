import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export const formatDateFull = (dateStr: string) => {
  const date = new Date(dateStr);
  return isNaN(date.getTime())
    ? ''
    : format(date, 'd MMMM yyyy', {
        locale: nl,
      });
};

