import React from 'react'
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux'
import reducers from './reducers'
import Root from './components/Root'

import './styles/main.scss'

import './i18n'

const store = createStore(reducers)
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Root store={store} />)