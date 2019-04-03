import React from 'react'
import Footer from './Footer'
import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'
import WorkContainer from '../containers/WorkContainer'

const categoriesComponent = {
	"basics" : <HomeContainer />,
	"work" 	 : <WorkContainer />
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
