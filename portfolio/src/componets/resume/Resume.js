import React from 'react';
import "./Resume.css"
import resume from "../../resumepdf/MastanResume.pdf"

const Resume = () => {
  return (
  <>
  
        
  <embed src={resume}title="Resume" width="85%" height="95%" type="" className='containerResume'/>
          {/* <iframe src={resume} title="Resume" width="15 00px" height="700px"></iframe> */}
  </>
  )
}

export default Resume