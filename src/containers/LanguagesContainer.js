import { connect } from 'react-redux'
import Languages from '../components/Languages'

const mapStateToProps = (state, ownProps) => {
  return {
    languages: state.person.languages,
    color: state.app.color
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages)
