import React from 'react'
import Association_Login from './components/Association_Login'
import Home from './components/Home'
import Player_Login from './components/Player_Login'

import Refree_Login from './components/Refree_Login'
import {Route, Routes} from 'react-router-dom';



const App = () => {
  return (
    <>
      <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/playerLogin" element={<Player_Login/>}/>
          <Route path = "/refreeLogin" element={<Refree_Login/>}/>
          <Route path="/associationLogin" element={<Association_Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App