import { IoSendSharp} from 'react-icons/io5'
import { collection,where,query,orderBy, doc, setDoc,onSnapshot, addDoc,serverTimestamp,limit} from "firebase/firestore";
import { useState, useEffect } from 'react';
import { auth, db } from '../Services/firebaseConfig';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';

const ChatComponent = ()=>{


 const [message,setMessage] = useState("") 
 const [messages,setMessages] = useState<any>([])

 const getMessages = async ()=>{

 const response = await  onSnapshot(collection(db, "chat"), (doc) => {

   setMessages(doc.docs)
 
   }
  );
 }
 const sendMessage = async()=>{
   
   if(message.length > 0){
     const data = {
        message:{
          author:{
          name:auth.currentUser?.displayName,
          photo:auth.currentUser?.photoURL
          },
          text:message,
          createdAt:serverTimestamp()
          }
        }

     await addDoc(collection(db,"chat"),data)
     setMessage("")
   }
  }
  
 const sendMessageEnter  = async(event:any)=>{
   if(event.code === "Enter"){
    if(message.length > 0){
    const data = {
        message:{
          author:{
          name:auth.currentUser?.displayName,
          photo:auth.currentUser?.photoURL
          },
          text:message,
          createdAt:serverTimestamp()
          }
        }


      await addDoc(collection(db,"chat"),data)
          setMessage("")
      }
     }
  }
 useEffect(()=>{
   getMessages()
  },[])
useEffect(()=>{
   getMessages()
  },[message])


 return (
 <>
  <div className="w-full  h-screen relative overflow-x-hidden">
   <div className='h-[80%] overflow-y-auto'>
    {messages.map((message:any,index:number)=>(
        <ChatMessage message={message.data()} key={index} />
      ))
      }
   </div>
   <div className='w-full h-[20%]'>
    <div className='w-[90%] bg-[#F5F6F7] h-[1px]'></div>
    <div className='flex items-end gap-[8px]'>
     <textarea 
       value={message} 
       onKeyUp={sendMessageEnter} 
       onChange={(e)=> setMessage(e.target.value)} 
       cols={30} rows={5} 
       className="w-[90%] text-neutral-500 border-none pl-[8px] outline-none resize-none"
     >
     </textarea>
      <button 
       className='p-[8px] bg-[#82AFD8]  rounded-md'
       onClick={sendMessage}
          >
       <IoSendSharp className='text-white' size={24} />    
      </button>
   </div>
   </div>
  </div>

 </>
 )
}
export default ChatComponent