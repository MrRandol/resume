import { connect } from 'react-redux'
import Interests from '../components/Interests'

const mapStateToProps = (state, ownProps) => {
  return {
    interests: state.person.interests,
    color: state.app.color
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interests)
