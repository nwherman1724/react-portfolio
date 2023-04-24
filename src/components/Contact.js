import React, {useState} from "react";
import "./Contact.css";

function Contact() {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        return name = setUserName(value)
      };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        
    };

    return (
        <div class="contactCard" id="Contact">
            <form action="https://formsubmit.co/090af7c3aa391fc3128974ef4d08d01e" method="POST" >
                <h3 class="contactTitle">Contact Me</h3>

                <input 
                    value=""
                    type="text"
                    onChange={handleInputChange}
                    name="name" 
                    placeholder="Your Name" 
                    required
                /> <br/>

                <input 
                    value=""
                    type="email" 
                    onChange={handleInputChange}
                    name="email" 
                    placeholder="Your Email" 
                    required
                /> <br/>

                <input 
                    value=""
                    type="text" 
                    onChange={handleInputChange}
                    name="message" 
                    placeholder="Message" 
                    id="textarea" 
                    required
                /> <br/>

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