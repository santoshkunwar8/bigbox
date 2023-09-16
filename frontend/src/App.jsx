import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Account from './Layout/Account/Account'
import Chats from './Layout/Chats/Chats'
import Files from './Layout/Files/Files'
import Invite from './Layout/Invite/Invite'
import Notifications from './Layout/Notifications/Notifications'
import Rooms from './Layout/Rooms/Rooms'
import Settings from './Layout/Settings/Settings'
import UploadFile from './Layout/upload/UploadFile'
import Home from './pages/Home/Home'
import SingleRoom from './pages/SingleRoom/SingleRoom'
import RoomOutlet from './components/SingleRoom/RoomOutlet'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"/home"}/>} />
          <Route path='/home' element={<Home />} >
            <Route path='rooms' element={<Rooms />} />
            <Route path='rooms/:id' element={<RoomOutlet/>} >
              <Route path='' element={<SingleRoom/>}/>
            <Route path='settings' element={<Settings />} />
            </Route>
            <Route path='files' element={<Files />} />
            <Route path='invite' element={<Invite />} />
            <Route path='chats' element={<Chats />} />
            <Route path='notification' element={<Notifications />} />
            <Route path='account' element={<Account />} />
            <Route path='' index element={<UploadFile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
