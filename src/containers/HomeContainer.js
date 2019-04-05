import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state, ownProps) => {
  return {
    basics: state.person.basics,
    color: state.app.color
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
