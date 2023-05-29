import React, { useEffect, useState } from "react";


const Navbar=()=>{
    const [active,setActive]=useState(false);
    const [login,setLogin]=useState(false)


    

    const isActive=()=>{
        window.scrollY>0 ? setActive(true):setActive(false)
    }
   useEffect(()=>{
   window.addEventListener("scroll",isActive)
   return ()=> window.removeEventListener("scroll",isActive)
   },[])
 const currentUser={
    id:1,
    username:"mastan",
    isSeller:true
 }

    return <>
    <div className="navbars">
    <div className={ active ? "Navbar active" : "navbar"}>
      <div>
       <h1> Some Website</h1>
      </div>
      <div className="nav-items">
        <div >Our Business</div>
        <div>Explor</div>
        <div>English</div>
        <div> Signin</div>
       { !currentUser?.isSeller && <div>Become a seller</div>}
    
       
   { !currentUser &&   <div><button className="button-join">Join</button></div>}

   {
    !currentUser && (
       <div></div>
    )
   }
      </div>
    </div>

  { active ? 
   <div>
<hr />
      <div className="navbar-items">
        
      <div>Graphics & Design</div>
      <div>Video & animation</div>
      <div>Writing & Translation</div>
      <div>AI Services</div>
      <div>Digital Marketing</div>
      <div>Music & Audio</div>
      <div>Programming & Tech</div>
      <div>Business</div>
      <div>LifeStyle</div>

      </div>
      </div>
      : null
     
  }

    </div>
    
    </>
}
export default Navbar;
