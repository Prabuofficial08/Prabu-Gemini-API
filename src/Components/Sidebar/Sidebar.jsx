import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets"
import { Context } from '../../Context/Context';



const Sidebar = () => {


  const {onsent,prevPrompts,setRecentPrompt,newchat} = useContext(Context);

  const [extended,setExtended]=useState(false)

  const loadprompt = async (prompt)=>{
    setRecentPrompt(prompt);
    await onsent(prompt);
  }


  return (
    <div className='sidebar'>


    <div className="top">


   <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="" className="menu" />




   <div onClick={()=>newchat()} className="newchat">
   <img src={assets.plus_icon} alt="" className="" />

    {extended?<p>New Chat</p>:null}
    
    
    </div>


    {extended? <div className="recent">
   
   <p className="recenttittle">Recent</p>

  {prevPrompts.map((item,index)=>{

    return(
 
      <div onClick={()=>loadprompt(item)} className="recent-entry">

      <img src={assets.message_icon} alt="" className="" />
      <p>{item.slice(0,18)}...</p>
 
      </div>


    )

  })}
   
    


   </div>:null}
    


    
      

    </div>

    
    <div className="bottom">

     <div className="bottom-item recent-entry">
   
   
             <img src={assets.question_icon} alt="" className="" />
            {extended?<p className="">Help</p>:null} 



     </div>

     
     <div className="bottom-item recent-entry">
   
   
   <img src={assets.history_icon} alt="" className="" />
   {extended?<p className="">Activity</p>:null} 



     </div>


     
     <div className="bottom-item recent-entry">
   
   
   <img src={assets.setting_icon} alt="" className="" />
   {extended?<p className="">Setting</p>:null} 



     </div>

    </div>



    </div>
  )
}

export default Sidebar