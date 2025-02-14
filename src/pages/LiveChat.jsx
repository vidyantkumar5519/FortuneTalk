import React from 'react'
import LiveChatPageComponentModal from '../pagesComponent/LiveChatPageComponentModal';
import liveChatBGImage from '../assets/image/liveChatBGImage.png'

const LiveChat = () => {
    const [showModal, setShowModal] = React.useState(false);
  return (
    <div className='bg-[#FFF0E0]'>
<div class="flex-1 w-full lg:w-[90%] border-x mx-auto  justify-between flex flex-col h-screen bg-gray-100">
   <div class="flex sm:items-center justify-between p:2 sm:p-6 py-3 border-b-2 border-gray-200 bg-white">
      <div class="relative flex items-center space-x-4">
         <div class="relative">
            <span class="absolute text-green-500 right-0 bottom-0">
               <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
               </svg>
            </span>
         <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/>
         </div>
         <div class="flex flex-col leading-tight">
            <div class="text-2xl mt-1 flex items-center">
               <span class="text-[#F27806] mr-3">Astro Guruji</span>
            </div>
            <span class="text-base text-[#FF0404]">Chat in process</span>
         </div>
      </div>
      <div class="flex items-center space-x-2">
         <button type="button" class="inline-flex items-center justify-center px-4 rounded-[38px] bg-[#F27806] h-10 w-auto transition duration-500 ease-in-out text-white font-medium hover:shadow-2xl focus:outline-none">
           05:00 min
         </button>
         <button type="button" class="inline-flex items-center justify-center px-4 rounded-[38px] bg-[#FF0404] h-10 w-auto transition duration-500 ease-in-out text-white font-medium hover:shadow-2xl focus:outline-none" onClick={() => setShowModal(true)}>
           End Chat
         </button>
         <LiveChatPageComponentModal showModal={showModal} setShowModal={setShowModal} />
      </div>
   </div>
   <div className='h-screen'>
   <div id="messages" class="flex-1 flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch bg-cover sm:p-6" style={{backgroundImage: `url(${liveChatBGImage})`}}>
     
     <div class="chat-message">
        <div class="flex items-end justify-end">
           <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#F27806] text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
           </div>
           <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
        </div>
     </div>
     <div class="chat-message">
        <div class="flex items-end">
           <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
             
              <div>
                 <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#FFECDB] text-gray-600">
                    Check the line above (it ends with a # so, I'm running it as root )
                    <pre># npm install -g @vue/devtools</pre>
                 </span>
              </div>
           </div>
           <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
        </div>
     </div>
     <div class="chat-message">
        <div class="flex items-end justify-end">
           <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#F27806] text-white ">Name: Sayali Chavan 
Birth Date: 5-08-1999 
Birth Time: 6:50 PM 
Gender: Female 
Birth Place: Mumbai, Maharashtra, India 
Problem: Wealth and Property 
Preferred Language: Hindi</span></div>
           </div>
           <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
        </div>
     </div>
     <div class="chat-message">
        <div class="flex items-end">
           <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#FFECDB] text-gray-600">Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)</span></div>
           </div>
           <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
        </div>
     </div>
     <div class="chat-message">
        <div class="flex items-end justify-end">
           <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#F27806] text-white ">Name: Sayali Chavan 
Birth Date: 5-08-1999 
Birth Time: 6:50 PM 
Gender: Female 
Birth Place: Mumbai, Maharashtra, India 
Problem: Wealth and Property 
Preferred Language: Hindi</span></div>
           </div>
           <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
        </div>
     </div>
     <div class="chat-message">
        <div class="flex items-end">
           <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#FFECDB] text-gray-600">Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)</span></div>
           </div>
           <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
        </div>
     </div>
   
    
  
     
  </div>
   </div>
   <div class="border-t-2 border-gray-200 bg-white py-3">
      <div class="relative flex ">
         <span class="absolute inset-y-0 flex items-center">
         <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-[#FFECDB] focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
               </svg>
            </button>
            
            <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-[#FFECDB] focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
               </svg>
            </button>
         </span>
         <input type="text" placeholder="Write your message!" class="w-full bg-white focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-24 rounded-md py-3"/>
         <div class="absolute right-0 items-center inset-y-0 flex">
            
            <button type="button" class="inline-flex items-center justify-center rounded-[39px] px-4 lg:px-8 py-1 mr-5 transition duration-500 ease-in-out text-white bg-[#F27806] hover:bg-shadow-lg focus:outline-none">
              Send
            </button>
         </div>
      </div>
   </div>
</div>
    </div>
  )
}

export default LiveChat