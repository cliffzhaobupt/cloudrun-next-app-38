'use client';

import { usePathname } from 'next/navigation';
import { dictionary as jaDict } from '@/libs/i18n/dictionaries/ja';
import { dictionary as enDict } from '@/libs/i18n/dictionaries/en';

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset(): void;
}) {
  const pathname = usePathname();
  const dictionary = pathname.startsWith('/ja') ? jaDict : enDict;

  return (
    <html>
      <h2>{dictionary['page_global_error_title']}</h2>
      <button type="button" onClick={reset}>
        {dictionary['page_global_error_retry_button']}
      </button>
    </html>
  );
}
