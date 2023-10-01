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
import { bindActionCreators } from 'redux'
import { actionCreators } from './redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSessionUserApi } from './utils/api'
import AllRooms from './components/AllRooms/AllRooms'

function App() {
  const dispatch = useDispatch()
  const {AddUserAction}= bindActionCreators(actionCreators,dispatch)
  useEffect(()=>{
    fetchSessionUser()
  },[])
  const fetchSessionUser=async()=>{
    try {
      const {data,status}= await getSessionUserApi();
      if(status===200){
        AddUserAction(data.message)
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"/home/public"}/>} />
          <Route path='/home' element={<Home />} >
            <Route path='rooms' element={<Rooms />} />
            <Route path='public' element={<AllRooms/>} />
            <Route path='rooms/:id' element={<RoomOutlet/>} >
            <Route path='public' element={<SingleRoom  backItem="Public"/>}/>
            <Route path='private' element={<SingleRoom  backItem="Private"/>}/>
            <Route path='rooms' element={<SingleRoom backItem={"My Room"}/>}/>
            <Route path='settings' element={<Settings />} />
            </Route>
            <Route path='account/:userId' element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
