import React from 'react'
import {render} from 'react-dom'

import App from './app'
import '../css/index.scss'

render(
  React.createElement(App),
  document.getElementById('app')
)