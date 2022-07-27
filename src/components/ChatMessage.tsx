const ChatMessage = ({message,key}:any)=>{

 
 return (

  <div className='flex items-center gap-[8px] p-[8px]' key={key}>
     <img src={message.message.author.photo} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
     <div>
       <div className='text-[#82AFD8]'>
         {message.message.author.name}
         <span>{message.message.createAt}</span>
       </div>
       <div className='text-neutral-500'>
          {message.message.text}
       </div>        
    </div>
   </div> 
 )
}
export default ChatMessage