import React, {useState} from "react";
import "./Contact.css";

function Contact() {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [nameShowRequired, setNameShowRequired] = useState(false);
    const [emailShowRequired, setEmailShowRequired] = useState(false);
    const [messageShowRequired, setMessageShowRequired] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if(name === "name") {
            setUserName(value)
        }if (name === "email") {
            setUserEmail(value)
        }if (name === "message"){
            setUserMessage(value)
        }
      };

      const handleBlur = (e) => {
        if(!e.target.value && e.target.name === "name"){
           setNameShowRequired(true);//display field required
        }else if (!e.target.value && e.target.name === "email"){
            setEmailShowRequired(true);
        }else if (!e.target.value && e.target.name === "message"){
            setMessageShowRequired(true);
        }
        else {
            setNameShowRequired(false);
            setEmailShowRequired(false);
            setMessageShowRequired(false);
        }
      }

    //   function email validation use regex
    // https://regexr.com/2ri2c

    const handleFormSubmit = (e) => {
        e.preventDefault();

        
    };

    return (
        <div class="contactCard" id="Contact">
            <form action="https://formsubmit.co/090af7c3aa391fc3128974ef4d08d01e" method="POST" >
                <h3 class="contactTitle">Contact Me</h3>

                <input 
                    value={userName}
                    type="text"
                    onChange={handleInputChange}
                    onBlur= {handleBlur}
                    name="name" 
                    placeholder="Your Name" 
                    required
                /> <br/>

                {nameShowRequired && (<div>Field Required</div>)}

                <input 
                    value={userEmail}
                    type="email" 
                    onChange={handleInputChange}
                    onBlur= {handleBlur}
                    name="email" 
                    placeholder="Your Email" 
                    required
                /> <br/>

                {emailShowRequired && (<div>Field Required</div>)}

                <input 
                    value={userMessage}
                    type="text" 
                    onChange={handleInputChange}
                    onBlur= {handleBlur}
                    name="message" 
                    placeholder="Message" 
                    id="textarea" 
                    required
                /> <br/>

                {messageShowRequired && (<div>Field Required</div>)}

                <button 
                    type="submit"
                    onClick={handleFormSubmit}>
                      Send
                </button>
            </form>
            
       </div>
    )
}

export default Contact;