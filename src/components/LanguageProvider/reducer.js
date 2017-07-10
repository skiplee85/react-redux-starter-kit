/*
 *
 * LanguageProvider reducer
 *
 */

export const CHANGE_LANG = 'LanguageProvider/CHANGE_LANG'
export const CHANGE_LANG_SUCC = 'LanguageProvider/CHANGE_LANG_SUCC'
export const CHANGE_LANG_FAIL = 'LanguageProvider/CHANGE_LANG_FAIL'

export function changeLang (lang) {
  return {
    type: CHANGE_LANG,
    payload: lang
  }
}

const initialState = { loaded:false }
function languageProviderReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        name: action.payload
      }
    case CHANGE_LANG_SUCC:
      return {
        ...state,
        loaded: true,
        messages: action.payload
      }
    case CHANGE_LANG_FAIL:
      return {
        ...state,
        loaded: false
      }
    default:
      return state
  }
}

export default languageProviderReducer
