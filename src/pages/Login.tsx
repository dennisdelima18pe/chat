import {signInWithPopup,browserLocalPersistence,setPersistence} from "firebase/auth";
import {auth, provider } from "../Services/firebaseConfig";
import {AiOutlineGoogle} from 'react-icons/ai'

import { useEffect, useState } from "react";

import Loading from '../components/Loading';
import {useNavigate } from  'react-router-dom'


const Login = ()=>{

 
 const [loading,setLoading] = useState(true)
 const  navigate = useNavigate()

 const sessionUSer = async ()=>{
  
  await setPersistence(auth,browserLocalPersistence)
  if(auth.currentUser){
    setLoading(true)
    navigate("/chat")
  }
  setLoading(false)
 }


 useEffect(()=>{
 sessionUSer()

 },[])


 
 const handleLogin = async  (e:any)=>{  

   e.preventDefault()

   await signInWithPopup(auth,provider)

  if(auth.currentUser){
    setLoading(true)
    navigate("/chat")
  }
 }
 
 
  if(loading) return  <Loading />

 return (
  <div className="flex w-full h-screen">
   <div className="w-[40%] bg-slate-200 justify-center hidden md:flex items-center">
     <img src="assets/foto4.png" />
    </div>
    <div className="w-full  md:w-[60%] flex flex-col items-center justify-center">
      <img src="assets/foto4.png" className="block md:hidden w-[60%] min-w-[60%]" />
      <h1 className="text-[#82AFD8] text-[36px] ">D-Chat</h1>
      <div className="flex gap-[10px] mb-4">
       <div className="w-[113px] h-[1px] bg-slate-200"></div>
       <div className="w-[113px] h-[1px] bg-slate-200"></div>
        <div>
       </div>
      </div>
      <button onClick={handleLogin} className="flex items-center gap-[8px] bg-[#82AFD8] text-white py-[12px] px-[18px]">
         <AiOutlineGoogle size={24} />
         <span>Cadastrar com o google</span>
        </button>
    </div>
   </div>
 )
}
export default Login