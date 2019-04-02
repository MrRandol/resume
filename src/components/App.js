import React from 'react'
import Footer from './Footer'
import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'

const App = ({ match: { params } }) => {
	var currentCategory;
	switch (params.category) {
		default:
			currentCategory = <HomeContainer />
	}
  return (
    <div>
      <HeaderContainer />
      { currentCategory }
      <Footer />
    </div>
  )
}

export default App
