import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import resume from './reducers'
import Root from './components/Root'

const store = createStore(resume)
render(<Root store={store} />, document.getElementById('root'))