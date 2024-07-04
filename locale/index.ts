import * as Localization from "expo-localization";
import { I18n, TranslateOptions } from "i18n-js";

import EN from "./en.json";

const translations = {
  en: EN,
};

const i18n = new I18n(translations);

i18n.locale = Localization.getLocales().at(0)?.languageCode || 'en';
i18n.enableFallback = true;

const translate = (key: string, args?: TranslateOptions) => {
  return i18n.t(key, args);
};

export default translate;
export { i18n };
