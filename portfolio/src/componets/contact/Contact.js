import React, { useRef } from "react";
import "./Contact.css";
import email from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    email
      .sendForm(
        "service_u86tlh6",
        "template_viqc9hb",
        form.current,
        "r7tzchLSot0KytBli"
      )
      .then((res) => console.log(res.text)
      )
      .catch((err) => console.log(err.text));
  };
  return (
    <div style={{ marginTop: "3%", zIndex: 1 }}>
      <div className="contactTitle">
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact" id="contact">
        <form ref={form} onSubmit={submitForm}>
          <div className="inputfilds">
            <div className="elements">
              <span>Your Name:</span>

              <input
                type="text"
                placeholder="Enter Your name..."
                className="inputTag"
                name="user_name"
                required
              />
            </div>
            <div className="elements">
              <span>Your Email:</span>

              <input
                type="email"
                placeholder="Enter Email Address..."
                className="inputTag"
                name="user_email"
                required
              />
            </div>
            <div className="elements">
              <span>Message:</span>

              <textarea
                cols="50"
                rows="8"
                name="message"
                placeholder="Type Here..."
                className="textareaTag"
                required
              ></textarea>
            </div>
            {/* <div className="elements">
              <input type="file" className="inputTag"/>
            </div> */}
            <div className="btn-container">
              <button type="submit" value="send">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
