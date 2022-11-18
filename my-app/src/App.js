import { React, useState, createContext } from "react";
import ComA from "./comA";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Rizwan Khalid");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <ComA />
    </UserContext.Provider>
  );
}
