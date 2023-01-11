import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// English
import en from "./assets/locales/en.json";
// Croatian
import hr from "./assets/locales/hr.json";

/**
 *
 *
 * @enum {number}
 */
enum Language {
  English = "en",
  Croatian = "hr",
}

type LanguageReturnType = string[];

/** @type {*} */
const resources: any = {
  [Language.English]: { translation: en },
  [Language.Croatian]: { translation: hr },
};

/** @type {*} */
const i18nUse: Promise<any> = i18n.use(initReactI18next).init({
  resources,
  lng: Language.Croatian,
  interpolation: {
    escapeValue: false,
  },
});

/**
 *
 *
 * @return {*}  {string}
 */
const getCurrentLanguage = (): string => i18n.language;

/**
 *
 *
 * @return {*}  {LanguageReturnType[]}
 */
const getLanguagesList = (): LanguageReturnType[] => {
  return [
    ["English", Language.English],
    ["Croatian", Language.Croatian],
  ];
};

/**
 *
 *
 * @param {Language} language
 */
const changeCurrentLanguage = (language: Language): void => {
  i18n.changeLanguage(language);
};

/**
 *
 *
 * @param {string} code
 * @return {*}  {boolean}
 */
const existsLanguageByCode = (code: string): boolean => {
  const languages: LanguageReturnType[] = getLanguagesList();
  let exists = false;

  languages.forEach((lang) => {
    if (lang[0].toLowerCase() === code.toLowerCase()) {
      exists = true;
      return;
    }
  });

  return exists;
};

export type { LanguageReturnType };
export {
  Language,
  getCurrentLanguage,
  getLanguagesList,
  changeCurrentLanguage,
  existsLanguageByCode,
  i18nUse,
};
