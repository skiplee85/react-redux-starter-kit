import React from 'react'
import { applyRouterMiddleware, browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { useScroll } from 'react-router-scroll'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import LanguageProvider from './LanguageProvider'
import languageProviderReducer from './LanguageProvider/reducer'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    const history = syncHistoryWithStore(browserHistory, store)
    store.injectReducer('locale', languageProviderReducer)
    return (
      <Provider store={this.props.store}>
        <LanguageProvider>
          <div style={{ height: '100%' }}>
            <Router
              history={history}
              children={routes}
              render={
                // Scroll to top when going to a new page, imitating default browser
                // behaviour
                applyRouterMiddleware(useScroll())
              }
              />
          </div>
        </LanguageProvider>
      </Provider>
    )
  }
}

export default App
