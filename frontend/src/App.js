import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect,useState} from 'react';
import Axios from 'axios';
function App() {
  const [listOfPersons,setListOfPersons]=useState([]);
    const [Name, setName]=useState("");
    useEffect(()=>{
      Axios.get("http://localhost:3005/").then((response)=>{
        setListOfPersons(response.data);
      });
        },[]);
        const createPerson=()=>{
          Axios.post("http://localhost:3005/post",{
              Name
          }).then((response)=>{
          setListOfPersons([...listOfPersons,{Name
          }])
          })
            }
  return (
   

    <div className="App">
      <label for="Name">Name: </label>
		<input type="text" id="Name" name="Name" placeholder="Enter your name:" onChange={(event)=>{
            setName(event.target.value)
        }} />
        <button onCLick={createPerson} class="buttons" type="submit">Subscribe</button>
    </div>
  );
}

export default App;
