import { connect } from 'react-redux'
import App from '../components/App'

import { changeLocale } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
  changeLocale: (lng) => dispatch(changeLocale(lng))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
