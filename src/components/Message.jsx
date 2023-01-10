import React, { useState } from "react";

  

const YourMessage = () => {
    const [message, setMessage] = useState("");
    console.log("Before log-timestamp");
    console.log("After log-timestamp");



    return (
      <form>
        <h2>Send a christmas message for the world to hear..</h2>
          <input className="messagefield"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="My christmas message"
          aria-label="mymessage" 
          />
          <input type="submit" value="Submit"></input>
      </form>
    
    );
};

      export default YourMessage;