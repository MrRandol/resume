import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state, ownProps) => {
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
