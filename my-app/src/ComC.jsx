import { React } from "react";
import ComA from "./comA";



export default function ComC () {
  const user = useContext (UserContext);
  
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ComA />);
}

  