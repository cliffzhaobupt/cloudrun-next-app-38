import { useI18n } from '@/libs/i18n/hooks/useI18n';
import Link from 'next/link';
import React, { useMemo } from 'react';

type Props = React.ComponentProps<typeof Link>;

export const InternalLink: React.FC<Props> = ({ href, ...restProps }) => {
  const { locale } = useI18n();

  const hrefWithLocale = useMemo(() => {
    if (typeof href === 'string') {
      return `/${locale}${href === '/' ? '' : href}`;
    }

    return {
      ...href,
      pathname: `/${locale}${href.pathname === '/' ? '' : href.pathname}`,
    };
  }, [href, locale]);

  return <Link {...restProps} href={hrefWithLocale} />;
};
