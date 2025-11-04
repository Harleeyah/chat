import React, { useState } from "react";
import "./App.css";

function App() {
  const [friends] = useState([
    { id: 1, name: "Tolu" },
    { id: 2, name: "John" },
    { id: 3, name: "Sulayman" },
    { id: 4, name: "Aliyah" },
  ]);

  const [selectedFriend, setSelectedFriend] = useState("Aliyah");
  const [messages, setMessages] = useState({
    Tolu: [
      { id: 1, text: "Hey! How are you?", sender: "Tolu" },
      { id: 2, text: "I'm good, just coding this chat app 😄", sender: "you" },
    ],
    John: [
      { id: 1, text: "Hey! How are you?", sender: "Tolu" },
      { id: 2, text: "I'm good, just coding this chat app 😄", sender: "you" },
    ],
    Sulayman: [
      { id: 1, text: "Hey! How are you?", sender: "Tolu" },
      { id: 2, text: "I'm good, just coding this chat app 😄", sender: "you" },
    ],
    Aliyah: [
      { id: 1, text: "Hey! How are you?", sender: "Tolu" },
      { id: 2, text: "I'm good, just coding this chat app 😄", sender: "you" },
    ],
  });

  const [newMessage, setNewMessage] = useState("");
  const [activeSender, setActiveSender] = useState("you");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const newMsg = { id: Date.now(), text: newMessage, sender: activeSender };
    setMessages({
      ...messages,
      [selectedFriend]: [...messages[selectedFriend], newMsg],
    });
    setNewMessage("");
  };

  return (
    <div className="app-container">
      <div className="friends-sidebar">
        <div className="friends-header">Friends</div>
        <div className="friends-list">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className={`friend-item ${selectedFriend === friend.name ? 'active' : ''}`}
              onClick={() => setSelectedFriend(friend.name)}
            >
              {friend.name}
            </div>
          ))}
        </div>
      </div>

      <div className="chat-container">
        <div className="chat-header">💬 Chat with {selectedFriend}</div>

        <div className="message-list">
          {messages[selectedFriend].map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.sender === "you" ? "you" : "friend"}`}
            >
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        <div className="controls">
          <label>Send as:</label>
          <select
            value={activeSender}
            onChange={(e) => setActiveSender(e.target.value)}
          >
            <option value="you">You</option>
            <option value={selectedFriend}>{selectedFriend}</option>
          </select>
        </div>

        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
