/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import cnLocaleData from 'react-intl/locale-data/zh'
import enLocaleData from 'react-intl/locale-data/en'

export class LanguageProvider extends React.Component {
  constructor () {
    super()
    this.genMessages()
  }

  genMessages () {
    this.messages = {}
    addLocaleData(cnLocaleData)
    addLocaleData(enLocaleData)
    this.messages['zh'] = require('./res/zh_CN').default
    this.messages['en'] = require('./res/en').default
  }

  render () {
    return (
      <IntlProvider locale={this.props.locale} key={this.props.locale} messages={this.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    )
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.element.isRequired
}

const mapStateToProps = (state) => ({
  locale : state.locale
})

export default connect(mapStateToProps)(LanguageProvider)
