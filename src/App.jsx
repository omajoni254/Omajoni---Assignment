
import { useState } from "react";
import "./App.css"; 

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="container">
      <h1 className="title">Dynamic List Manager</h1>
      <div className="inputcontainer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enteritem..."
          className="inputfield"
        />
        <button onClick={addItem} className="addbutton">
          Add Item
        </button>
      </div>
      <div className="listwrapper">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 