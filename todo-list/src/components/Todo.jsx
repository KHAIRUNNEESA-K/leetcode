import React, { useState ,useEffect} from "react";

export default function Todo() {
  const [state, setState] = useState("");
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("todoList");
    if (stored) {
      setDisplay(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(display));
  }, [display]);

  const handleChange = (event) => {
    setState(event.target.value);
  };
  const handleSumbit = () => {
    if (state !== "") {
      setDisplay([...display, { text: state, completed: false }]);
      setState("");
    }
  };
  const handleDelete = (index) => {
    const updateData = display.filter((_, i) => i !== index);
    setDisplay(updateData);
  };

  const handleComplete = (index) => {
    const updatedData = display.map((items, i) => {
      if (i === index) {
        return { ...items, completed: !items.completed };
      }
      return items;
    });
    setDisplay(updatedData);
  };
  return (
    <div>
        <h2>TO DO LIST</h2>
      <input
        type="text"
        value={state}
        onChange={handleChange}
        placeholder="enter to do"
      />
      <button onClick={handleSumbit}>add</button>

      <ul>
        {display.map((items, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={items.completed}
              onChange={() => handleComplete(i)}
            />
            {items.text}
            <button onClick={() => handleDelete(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
