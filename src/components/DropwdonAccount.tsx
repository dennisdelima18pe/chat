import { auth } from "../Services/firebaseConfig"
import { useState } from 'react';
import { BsPower } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const DropwdonAccount = ()=>{

 const [display,setDisplay] = useState(true)
 const navigate = useNavigate()

 const onSognout = async ()=>{
    await auth.signOut()
    navigate('/')
  }

  return (
   <div className="relative">
     <div className="flex items-center gap-[4px]">
        <img src={String(auth.currentUser?.photoURL)} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
        <div>{auth.currentUser?.displayName}</div>
     </div>  
      
    <div className={`shadow-inner w-[100px]	${display ? 'block':'hidden'}`}>
      <button onClick={onSognout} className='absolute bottom-[10px] flex items-center gap-[8px] font-normal'>
       <BsPower  size={20} className="text-neutral-500"/>
     <span className='text-neutral-500 font-[20px]'>Sair</span>
    </button>
    </div>
   </div>
  )
}
export default DropwdonAccount