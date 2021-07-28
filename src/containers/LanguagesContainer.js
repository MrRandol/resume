import { connect } from 'react-redux'
import Languages from '../components/Languages'

const mapStateToProps = (state, ownProps) => {
  return {
    languages: state.person.languages
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages)
