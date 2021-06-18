import { connect } from 'react-redux'
import Education from '../components/Education'

const mapStateToProps = (state, ownProps) => {
  return {
    education: state.person.education
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education)
