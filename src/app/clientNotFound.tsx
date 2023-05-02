'use client';

import { usePathname } from 'next/navigation';
import { dictionary as jaDict } from '@/libs/i18n/dictionaries/ja';
import { dictionary as enDict } from '@/libs/i18n/dictionaries/en';

export const ClientGlobalNotFoundPage: React.FC = () => {
  const pathname = usePathname();
  const dictionary = pathname.startsWith('/ja') ? jaDict : enDict;

  return (
    <html>
      <body>
        <h2>{dictionary['page_global_not_found_title']}</h2>
        <p>{dictionary['page_global_not_found_desc']}</p>
      </body>
    </html>
  );
};
