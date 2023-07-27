import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyNotes from './pages/MyNotes'
import WriteNote from './pages/WriteNote'
import MyAccount from './pages/MyAccount'
import NotFound from './pages/NotFound'
import { createContext, useState } from 'react'

type UserContextProps = {
  name?: string
  avatar_url?: string
}

type ContextProps = {
  user: UserContextProps,
  setUser: (newValue: UserContextProps) => void
}

export const UserContext = createContext<ContextProps>(null as unknown as ContextProps)

function App() {
  const [user, setUser] = useState<UserContextProps>({})

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/my-notes/:userId' element={<MyNotes />} />
        <Route path='/write-note/:userId' element={<WriteNote />} />
        <Route path='/my-account/:userId' element={<MyAccount />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
