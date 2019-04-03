import { connect } from 'react-redux'
import Interests from '../components/Interests'

const mapStateToProps = (state, ownProps) => {
  return {
    interests: state.person.interests
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interests)
