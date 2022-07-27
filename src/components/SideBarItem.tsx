import {BsChatDots,BsPower} from 'react-icons/bs'

interface SideBarItemProps {
  name:string;
}
const SideBaItem  = ({name}:SideBarItemProps)=>{

 return (
   <div className='mb-[14px] hover:bg-white hover:border-r-[8px] hover:border-[#82AFD8] cursor-pointer p-[5px]  rounded'>
    <div className="flex gap-[16px] items-center">
     <BsChatDots size={20} className="text-[#82AFD8]"/>
     <span className='text-neutral-500 text-[18px]'>
      {name}    
    </span>
    </div>
   </div>
 )
}
export default SideBaItem