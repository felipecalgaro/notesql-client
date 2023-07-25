import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyNotes from './pages/MyNotes'
import WriteNote from './pages/WriteNote'
import MyAccount from './pages/MyAccount'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/my-notes/:userId' element={<MyNotes />} />
      <Route path='/write-note/:userId' element={<WriteNote />} />
      <Route path='/my-account/:userId' element={<MyAccount />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
