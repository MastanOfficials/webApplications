import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div style={{ marginTop: "3%" ,zIndex:1}}>
      <div className="contactTitle">
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact" id="contact">
        <form>
          <div className="inputfilds">
            <div className="elements">
              <span>Email:</span>

              <input
                type="text"
                placeholder="Enter Mail Id..."
                className="inputTag"
              />
            </div>
            <div className="elements">
              <span>Company Name:</span>

              <input
                type="text"
                placeholder="Enter Company Name..."
                className="inputTag"
              />
            </div>
            <div className="elements">
              <span>About Job Opportunity:</span>

              <textarea
                name=""
                id=""
                cols="50"
                rows="8"
                placeholder="Type Here..."
                className="textareaTag"
               
              ></textarea>
            </div>
            <div className="elements">
              <input type="file" className="inputTag"/>
            </div>
            <div className="btn-container">
              <button>Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
