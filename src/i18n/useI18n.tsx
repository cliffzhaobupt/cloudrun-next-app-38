import { createContext, useCallback, useContext } from 'react';
import { i18n } from './config';
import { I18nDictionary, I18nDictKey } from './types';

type I18nContextType = {
  locale: string;
  t(key: I18nDictKey): string;
};

const I18nContext = createContext<I18nContextType>({
  locale: i18n.defaultLocale,
  t: () => '',
});

interface I18nProviderProps {
  locale: string;
  dictionary: I18nDictionary;
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  locale,
  dictionary,
  children,
}) => {
  const translateFunc = useCallback(
    (key: I18nDictKey) => {
      return dictionary[key];
    },
    [dictionary]
  );

  return (
    <I18nContext.Provider
      value={{
        locale,
        t: translateFunc,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
