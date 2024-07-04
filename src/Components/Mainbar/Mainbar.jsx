import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import "./Mainbar.css"
import { Context } from '../../Context/Context'

const Mainbar = () => {


   const {onsent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

   const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onsent();
    }
  };
   

  return (

    <div className="main">

  <div className="nav">


  <div>Gemini</div>
  <img src={assets.user_icon} alt="" className="" />

  </div>

  <div className="main-container">


{ !showResult ?<>
  

   
  
  <div className="greet">
   
   <p><span>Heloo, Prabu</span></p>
   <p className="">How can I help you today ?</p>

  </div>


  <div className="cards">
  
  <div className="card">
    
    <p>Suggest beautifull place to see on an upcomming road trips</p>
    <img src={assets.compass_icon} alt="" className="" />

  </div>

  <div className="card">
    
    <p>Briefly summarize the concept : urban planning</p>
    <img src={assets.bulb_icon} alt="" className="" />

  </div>

  <div className="card">
    
    <p>Brainstorm team bonding activities for our work retreat</p>
    <img src={assets.message_icon} alt="" className="" />

  </div>

  <div className="card">
    
    <p>Improve the readability of the following code</p>
    <img src={assets.code_icon} alt="" className="" />

  </div>

  </div>


 
</> : <div className='result'>  
    
      
   <div className="result-tittle">

    <img src={assets.user_icon} alt="" className="" />
    <p>{recentPrompt}</p>
   </div>

   <div className="result-data">
    
    <img src={assets.gemini_icon} alt="" className="" />
    {loading? <div className="loader">
        <hr />
        <hr />
        <hr />
    </div> :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
   


   </div>

      </div>}


 


  <div className="main-bottom">


<div className="search-box">

<input type="text" onKeyUp={handleKeyPress} value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter a prompt here' className="input" />

<div className="">

<img src={assets.gallery_icon} alt="" /><img src={assets.mic_icon} alt="" />{input?<img onClick={()=>onsent()} src={assets.send_icon} alt="" />:null}


</div>





</div>

<div>
<p className="bottom-info">

Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini Apps.

</p>
</div>




</div>




 </div>


 
  
    </div>
    
  )




}


export default Mainbar