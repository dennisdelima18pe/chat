import { auth } from '../Services/firebaseConfig'
import { useEffect } from 'react';
import {browserLocalPersistence,setPersistence} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import ChatComponent from '../components/ChatComponent';


const Chat  = ()=>{
 
 const navigate = useNavigate()
 const sessionUserPersistente = async()=>{

  await setPersistence(auth,browserLocalPersistence)
  if(!auth.currentUser) return navigate('/')
 }

  useEffect(()=>{
   sessionUserPersistente()
  },[])
  


 return (
  <div className='flex w-full h-screen'>
    <div className='w-[18%]'>
       <SideBar />
    </div>
    <div className='w-[82%]'>
      <ChatComponent />
    </div>
  </div>
 )
}
export default Chat