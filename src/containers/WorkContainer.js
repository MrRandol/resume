import { connect } from 'react-redux'
import Work from '../components/Work'

const mapStateToProps = (state, ownProps) => {
  return {
    work: state.person.work,
    color: state.app.color
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work)
