import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'

import Home from './pages/Home'
import Clans from './pages/Clans'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Ranks from './pages/Ranks'

import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <NotificationContainer />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/clans'>
          <Clans />
        </Route>
        <Route exact path='/news'>
          <News />
        </Route>
        <Route exact path='/news/:id'>
          <NewsDetail />
        </Route>
        <Route exact path='/ranks'>
          <Ranks />
        </Route>

        <Route path='*'>{/* <Error /> */}</Route>
      </Switch>
    </Router>
  )
}

export default App
