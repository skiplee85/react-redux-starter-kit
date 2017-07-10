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
import { changeLang } from './reducer'
import { IntlProvider, addLocaleData } from 'react-intl'
import cnLocaleData from 'react-intl/locale-data/zh'
import enLocaleData from 'react-intl/locale-data/en'

export class LanguageProvider extends React.Component {
  constructor (props) {
    super(props)
    addLocaleData(cnLocaleData)
    addLocaleData(enLocaleData)
    this.mapLocale = {
      'en-US' : 'en',
      'zh-CN' : 'zh',
    }
    let lang = props.lang.name || window.sessionStorage.getItem('lang') || window.navigator.language
    lang = this.mapLocale[lang] ? lang : 'en-US'
    this.props.changeLang(lang)
  }

  render () {
    let { loaded, name, messages } = this.props.lang
    if (!loaded) {
      name = 'en-US'
      messages = {}
    }
    return (
      <IntlProvider locale={this.mapLocale[name]} key={name} messages={messages}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    )
  }
}

LanguageProvider.propTypes = {
  lang       : PropTypes.object,
  changeLang : PropTypes.func,
  children   : PropTypes.element.isRequired,
}

const mapStateToProps = (state) => ({
  lang : state.lang
})

const mapDispatchToProps = {
  changeLang
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider)
