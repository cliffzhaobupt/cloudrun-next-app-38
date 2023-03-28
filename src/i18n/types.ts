import type { dictionary as dictionaryJa } from './dictionaries/ja';
import type { dictionary as dictionaryEn } from './dictionaries/en';

export type I18nDictKey = keyof typeof dictionaryJa & keyof typeof dictionaryEn;
export type I18nDictionary = Record<I18nDictKey, string>;
