import { connect } from 'react-redux'
import Footer from '../components/Footer'
var object = require('lodash/fp/object');

const mapStateToProps = (state, ownProps) => {
  var categories = object.keys(state.person)
  return {
    color: state.app.color
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
