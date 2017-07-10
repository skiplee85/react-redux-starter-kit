import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import messages from './messages'
import { changeLang } from '../../components/LanguageProvider/reducer'

export const PageLayout = ({ children, intl, lang, changeLang }) => (
  <div className='container text-center'>
    <h1>{intl.formatMessage(messages.title)}</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>{intl.formatMessage(messages.home)}</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>{intl.formatMessage(messages.counter)}</Link>
    {' · '}
    <a style={{ cursor:'pointer' }} onClick={changeLang.bind(this, 'zh-CN')}>中文</a>
    {' · '}
    <a style={{ cursor:'pointer' }} onClick={changeLang.bind(this, 'en-US')}>English</a>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  intl       : intlShape.isRequired,
  children   : PropTypes.node,
  lang       : PropTypes.object,
  changeLang : PropTypes.func
}

const mapDispatchToProps = {
  changeLang: changeLang
}

const mapStateToProps = (state) => ({
  lang : state.lang
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(PageLayout))
