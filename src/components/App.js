import React from 'react'
import Footer from './Footer'
import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'
import WorkContainer from '../containers/WorkContainer'
import EducationContainer from '../containers/EducationContainer'
import SkillsContainer from '../containers/SkillsContainer'
import InterestsContainer from '../containers/InterestsContainer'
import LanguagesContainer from '../containers/LanguagesContainer'

const categoriesComponent = {
	"basics"       : <HomeContainer />,
	"work" 	       : <WorkContainer />,
	"education" 	 : <EducationContainer />,
	"skills" 	 		 : <SkillsContainer />,
	"interests" 	 : <InterestsContainer />,
	"languages" 	 : <LanguagesContainer />
}

const App = ({ match: { params } }) => {
  return (
    <div>
      <HeaderContainer />
      { categoriesComponent[params.category] || categoriesComponent["basics"] }
      <Footer />
    </div>
  )
}

export default App
