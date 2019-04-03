import { connect } from 'react-redux'
import Header from '../components/Header'
var object = require('lodash/fp/object');

const mapStateToProps = (state, ownProps) => {
  var categories = object.keys(state.person)
  return {
    categories: categories
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
