import { connect } from 'react-redux'
import Skills from '../components/Skills'

const mapStateToProps = (state, ownProps) => {
  return {
    skills: state.person.skills
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills)
