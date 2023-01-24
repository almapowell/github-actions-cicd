import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    setUsername(response.data);
  };

  return (
    <div>
      <h1>My Website</h1>
      <h3>My name is {username}</h3>
    </div>
  );
}

export default App;
