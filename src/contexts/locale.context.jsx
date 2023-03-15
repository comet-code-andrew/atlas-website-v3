import en from "../../locales/en";
import tr from "../../locales/tr";

import {createContext, useState} from "react";

// The value that we will access
export const LocaleContext = createContext({
  currentLocale: null,
  setCurrentLocale: () => null,
})

// An "alias" component whos only purpose is to take our LocalContext and wrap it around children branches
export const LocaleProvider = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(en);

  const setLocaleToEN = () => {
    setCurrentLocale(en)
  }

  const setLocaleToTR = () => {
    setCurrentLocale(tr)
  }

  // value is variable which holds all the states, and setStates that we want to expose to children branches
  const value = {currentLocale, setLocaleToTR, setLocaleToEN};
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
