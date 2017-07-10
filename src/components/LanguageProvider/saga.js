import { call, put, select, cancel, takeLatest } from 'redux-saga/effects'
import { CHANGE_LANG, CHANGE_LANG_SUCC, CHANGE_LANG_FAIL } from './reducer'
import axios from 'axios'

const resHttp = axios.create({ responseType: 'json' })

function * loadLang (action) {
  try {
    const ret = yield call(resHttp.get, '/lang/' + action.payload + '.json')
    window.sessionStorage.setItem('lang', action.payload)
    yield put({
      type:CHANGE_LANG_SUCC,
      payload:ret.data
    })
  } catch (error) {
    yield put({
      type:CHANGE_LANG_FAIL
    })
  }
}

export function * changeLang () {
  yield takeLatest(CHANGE_LANG, loadLang)
}

export default [
  changeLang
]
