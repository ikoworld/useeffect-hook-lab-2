import { useState } from "react";
export default function Form({ setUsername }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setUsername(value);
  };

  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          value={input}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
