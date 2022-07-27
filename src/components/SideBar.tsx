import {BsPower} from 'react-icons/bs'
import {IoAdd} from 'react-icons/io5'
import { collection, getDocs, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../Services/firebaseConfig';
import ModalCreateChat from './ModalCreateChat';
import SideBaItem from "./SideBarItem"
import { useState, CSSProperties, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

const SideBar = ()=>{
 


 const [show, setShow] = useState(false);
 const [newChatName,setNewChatName] = useState("")
 const [isLoadingCreateChat,setIsLoadingCreateChat] = useState(false)
 const [listChats, setChats] = useState<any>([])
 const navigate = useNavigate()

 const getData = async ()=>{
  

   setIsLoadingCreateChat(true) 
  const response = await  onSnapshot(collection(db, "chat"), (doc) => {
  
  setChats(doc.docs)
 
  });
 setIsLoadingCreateChat(false)
 }



 const override: CSSProperties = {
  // display: "block",
  marginLeft: "10 px",
  borderColor: "82AFD8",
};

 useEffect(()=>{
  getData()
 },[])
useEffect(()=>{
  getData()
 },[newChatName])
 
 

 const createnewChat = async(e:any)=>{
   
   e.preventDefault()
   setIsLoadingCreateChat(true)

  try{

    await setDoc(doc(db, "chats",newChatName), {});

    setShow(false)
  }catch(e){
    console.log(e)
   }
   setIsLoadingCreateChat(false)
 }
 
 
  

 return (
  <>
  <div className='bg-[#F5F6F7]  h-screen  p-[16px]  relative rounded-r-[30px] overflow-y-auto'>
     <h1 className="text-[#82AFD8] text-[36px] mb-[8px] ">D-Chat</h1>
     <div className="flex gap-[10px] mb-4">
        <div className="w-[113px] h-[1px] bg-slate-200"></div>
        <div className="w-[113px] h-[1px] bg-slate-200"></div>
      <div>
    </div>
    </div>
    <button className='flex items-center gap-[8px] my-[16px] p-[4px] rounded text-white bg-[#82AFD8]'>
     <IoAdd className='text-white' />
      <button onClick={()=> setShow(true)}>
        Criar Sala
      </button>
    </button>
    {listChats?.map((chat:any,index:number)=>(
      <div key={index}>
         <SideBaItem name={chat?.id}/>    
       </div>
      ))
     }
 
  </div>
  <ModalCreateChat show={show} onHide={()=> setShow(false)}>
    <div className='flex items-center justify-center flex-col'>
     <h1 className='text-neutral-500 font-normal text-[18px]'>
        Digite o nome da nova sala.
      </h1>
      <p className='text-neutral-500 text-[11px]'>
       Se o nome for composto separe por infém 
      </p>
      <form onSubmit={createnewChat} className="flex flex-col items-center justify-center" >
       <input type="text" onChange={(e)=> setNewChatName(e.target.value)} className="block border-[#82AFD8] border-2  outline-none text-neutral-500	 h-[40px]" />
      <button disabled={isLoadingCreateChat} className="flex items-center my-[16px] p-[6px]  rounded text-center text-white bg-[#82AFD8] ">
        <ClipLoader color={"white"} loading={isLoadingCreateChat} cssOverride={override} size={16} />  
        {isLoadingCreateChat ? 'Criando chat...':'Criar Chat'}
      </button>
      </form>
   </div>
  </ModalCreateChat>
 </>
 )
}

export default SideBar