import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState(null);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => setUsers(res.data))
    .catch((err)=> console.log(err))
  },[]  )
  return (
    users && users.map(users => <div>{users.company.name}</div>)
  );
}
