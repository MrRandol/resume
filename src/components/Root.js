import React, { Suspense } from 'react';
import { Provider } from 'react-redux'

import AppContainer from '../containers/AppContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <Suspense fallback={null}>
      <AppContainer/>
    </Suspense>
  </Provider>
)

export default Root
