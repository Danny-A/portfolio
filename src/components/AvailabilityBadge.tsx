import { cacheLife } from 'next/cache';

import { formatDate } from '~/utils/formatDate';

// Depends on the current time, so it is cached explicitly (refreshes hourly)
// instead of blocking the static shell.
export default async function AvailabilityBadge({ availableFrom }: { availableFrom: string }) {
  'use cache';
  cacheLife('hours');

  return (
    <div className="flex">
      <p className="rounded-sm bg-green-200 px-2 py-1 text-xs text-green-800">
        {new Date(availableFrom) <= new Date() ? 'Beschikbaar' : `Beschikbaar vanaf ${formatDate(availableFrom)}`}
      </p>
    </div>
  );
}
