import React, { useState } from "react";

  

function YourMessage() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      const currentTime = new Date().toLocaleString();
      const storedMessages =
      JSON.parse(localStorage.getItem("messages")) || [];
      const newMessages = [...storedMessages, { message, timestamp: currentTime }];
      localStorage.setItem('messages', JSON.stringify(newMessages));
      setMessage('');
    }
    console.log(message);
    
  



    return (
      <form onSubmit={handleSubmit}>
        <h2>Send a christmas message for the world to hear..</h2>
          <input className="messagefield"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)} 
          placeholder="My christmas message"
          aria-label="mymessage" 
          />
          <input className="submit" type="submit" value="Submit"></input>
      </form>
    
    );
}

      export default YourMessage;