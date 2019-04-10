import React from 'react';

import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import HomeContainer from '../containers/HomeContainer'
import WorkContainer from '../containers/WorkContainer'
import EducationContainer from '../containers/EducationContainer'
import SkillsContainer from '../containers/SkillsContainer'
import InterestsContainer from '../containers/InterestsContainer'
import LanguagesContainer from '../containers/LanguagesContainer'

import { useTranslation } from 'react-i18next';
import * as i18next from 'i18next';

const App = ({ locale, changeLocale, store }) => {
    i18next.on('languageChanged', function(lng) {
      changeLocale(lng)
    })
    const { i18n } = useTranslation();
    const changeLanguage = (l) => {
      var lng = l
      i18n.changeLanguage(lng, () => changeLocale(lng))
    }

    return <>
      <HeaderContainer changeLanguage={changeLanguage} locale={locale} />
      <section id="basics"> <HomeContainer locale={locale} /></section>
      <section id="skills"> <SkillsContainer locale={locale} /></section>
      <section id="work"> <WorkContainer locale={locale} /></section>
      <section id="education"> <EducationContainer locale={locale} /></section>
      <section id="interests"> <InterestsContainer locale={locale} /></section>
      <section id="languages"> <LanguagesContainer locale={locale} /></section>
      <FooterContainer locale={locale} />
    </>
}
export default App
