import React, { Suspense } from 'react';

import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import ProfileContainer from '../containers/ProfileContainer'
import WorkContainer from '../containers/WorkContainer'
import EducationContainer from '../containers/EducationContainer'
import SkillsContainer from '../containers/SkillsContainer'
import InterestsContainer from '../containers/InterestsContainer'
import LanguagesContainer from '../containers/LanguagesContainer'
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const App = ({ locale, changeLocale, store }) => {

    return (
      <Suspense fallback={<Container fluid className="center"><Spinner animation="border" />Fetching data ...</Container>}>
        <Container fluid className="p-0 m-0">
          <HeaderContainer changeLanguage={null} />
          <section id="profile"> <ProfileContainer /></section>
          <section id="work"> <WorkContainer /></section>
          <section id="education"> <EducationContainer /></section>
          <section id="skills"> <SkillsContainer /></section>
          <section id="languages"> <LanguagesContainer /></section>

          {/* <section id="interests"> <InterestsContainer /></section> */}

          <FooterContainer locale={locale} />
        </Container>

      </Suspense>
    );
}
export default App
