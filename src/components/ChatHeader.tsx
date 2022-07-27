import { auth } from "../Services/firebaseConfig"
import DropwdonAccount from './DropwdonAccount';

const ChatHeader = ()=>{
  
 console.log(auth)
  
 return (
   <div className="w-full flex justify-end">
     <DropwdonAccount />
     
   </div> 
 )
}
export default ChatHeader