import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import HomeContainer from '../containers/HomeContainer'
import WorkContainer from '../containers/WorkContainer'
import EducationContainer from '../containers/EducationContainer'
import SkillsContainer from '../containers/SkillsContainer'
import InterestsContainer from '../containers/InterestsContainer'
import LanguagesContainer from '../containers/LanguagesContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <HeaderContainer />
    <section id="basics"> <HomeContainer /></section>
    <section id="skills"> <SkillsContainer /></section>
    <section id="work"> <WorkContainer /></section>
    <section id="education"> <EducationContainer /></section>
    <section id="interests"> <InterestsContainer /></section>
    <section id="languages"> <LanguagesContainer /></section>
    <FooterContainer />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
