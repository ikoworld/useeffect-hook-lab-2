import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

export default function Home() {
  
  const [username, setUsername] = useState('');
  const [data,setData]=useState({});

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((resp) => resp.json())
  //     .then((data) => setUsername(data));
  // }, [input]);

  useEffect(() => {
    async function fetchData() {

        const response = await fetch(`https://api.github.com/users/${username}`);

          const data = await response.json();
          setData(data);
          console.log(data);

    }

    fetchData();
  }, [username]);


  return (
    <div className="card">
      <Form setUsername= {setUsername} />
      <UserCard data ={data} username = {username}  />
    </div>
  );
}


