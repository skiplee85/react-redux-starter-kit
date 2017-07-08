/**
 * Add injectors to store
 */
export default function addAsyncInjectors (store, makeRootReducer) {
  /**
 * Inject an asynchronously loaded reducer
 */
  store.injectReducer = (key, reducer) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }
  /**
   * Inject an asynchronously loaded saga
   */
  store.injectSagas = (sagas) => {
    sagas.map(store.runSaga)
  }
}
