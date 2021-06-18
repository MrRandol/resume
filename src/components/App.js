import React, { Suspense } from 'react';

import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import HomeContainer from '../containers/HomeContainer'
import WorkContainer from '../containers/WorkContainer'
import EducationContainer from '../containers/EducationContainer'
import SkillsContainer from '../containers/SkillsContainer'
import InterestsContainer from '../containers/InterestsContainer'
import LanguagesContainer from '../containers/LanguagesContainer'

const App = ({ locale, changeLocale, store }) => {

    return (
      <Suspense fallback={<h1>Loading ...</h1>}>
        <HeaderContainer changeLanguage={null} />
        <section id="basics"> <HomeContainer /></section>
        <section id="skills"> <SkillsContainer /></section>
        <section id="work"> <WorkContainer /></section>
        <section id="education"> <EducationContainer /></section>
        <section id="interests"> <InterestsContainer /></section>
        <section id="languages"> <LanguagesContainer /></section>
        <FooterContainer locale={locale} />
      </Suspense>
    );
}
export default App
