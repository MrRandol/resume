import React, { Suspense } from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import AppContainer from '../containers/AppContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <Suspense fallback={null}>
      <AppContainer />
    </Suspense>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
