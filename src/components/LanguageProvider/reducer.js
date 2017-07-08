/*
 *
 * LanguageProvider reducer
 *
 */

const CHANGE_LOCALE = 'LanguageProvider/CHANGE_LOCALE'

export function changeLocale (languageLocale) {
  console.log(languageLocale)
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  }
}

const initialState = 'en'
function languageProviderReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return action.locale
    default:
      return state
  }
}

export default languageProviderReducer
