import { useState, FormEvent } from "react";
import { DataUsers } from "../pages/user";
import { ListRepo } from "../pages/repos";
import { Form } from "./form";


export function App(){
const [name, setName] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  }

return(
  <div>
    <Form handleSubmit={handleSubmit} setName={setName} />
    <DataUsers name={name}/>
    <ListRepo name={name}/>
  </div>
)
}
export default App