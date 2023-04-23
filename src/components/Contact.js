import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div class="contactCard" id="Contact">
            <form action="https://formsubmit.co/090af7c3aa391fc3128974ef4d08d01e" method="POST" >
                <h3 class="contactTitle">Contact Me</h3>

                {/* <label for="name">Name:</label>  */}
                <input type="text" name="name" placeholder="Your Name" required/> <br/>

                {/* <label for="email">Email:</label>  */}
                <input type="email" name="email" placeholder="Your Email" required/> <br/>

                <div >
                    {/* <label for="message">Message:</label>  */}
                    <input type="text" name="message" placeholder="Message" id="textarea" required/> <br/>
                </div>
                <button type="submit">Send</button>
            </form>
       </div>
    )
}

export default Contact;