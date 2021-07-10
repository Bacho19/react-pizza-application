import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'
import { CartPage, HomePage } from './pages'

import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} exact />
      </div>
    </div>
  )
}

export default App
