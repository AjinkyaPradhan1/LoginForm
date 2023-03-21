import {useState} from "react";
import './App.css';
import ExmapleUseEffect from "./ExampleUseEffect";
import ExampleToastify from "./ExampleToastify";

function App() {

  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [mob,setMob] = useState("");
  const [allData,setAllData] = useState([]);

  const submitForm =(e)=>{
    e.preventDefault();
    //alert("Hell");

    const userInput = {name:name,surname:surname,email:email,password:password,mob:mob};
    setAllData([...allData,userInput]);
    //alert(setAllData);
  }

  return (
    <div className="App">
    <h4>Register Form</h4>
      <form action="" onSubmit={submitForm}>
        <div className='formElem'>
          <label htmlFor='name'>Name:&nbsp;</label>
          <input type="text" name="name" id="name" autoComplete='off'
            value = {name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <br></br>
        <div className='formElem'>
          <label htmlFor='surname'>Surname:&nbsp;</label>
          <input type="text" name="surname" id="surname" autoComplete='off'
            value = {surname}
            onChange={(e)=>setSurname(e.target.value)}
          />
        </div>

        <br></br>
        <div className='formElem'>
          <label htmlFor='mob'>Mobile Number:&nbsp;</label>
          <input type="number" name="mob" id="mob" autoComplete='off'
            value = {mob}
            onChange={(e)=>setMob(e.target.value)}
          />
        </div>

        <br></br>
        <div className='formElem'>
          <label htmlFor='email'>Email:&nbsp;</label>
          <input type="email" name="email" id="email" autoComplete='off'
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <br></br>
        <div className='formElem'>
          <label htmlFor='password'>Password:&nbsp;</label>
          <input type="password" name="password" id="password" autoComplete='off'
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <br></br>
        <button className='btSubmit'>Register</button>        
      </form>
      
      <br></br>
      Customer Details:
      
      <div>
        {
          allData.map((curElem)=>{
            //const {name,surname,email,mob,password} = curElem;
            return(
              <div>
              <br/>
                Name:{curElem.name}<br></br>
                Surname:{curElem.surname}<br></br>
                Email:{curElem.email}<br></br>
                Mobile Number:{curElem.mob}<br></br>
                Password:{curElem.password}<br></br>
              </div>
              
            )
          })
        }
        <br/>
      </div>
      
      <br></br>
      <ExmapleUseEffect />
      <ExampleToastify />
    </div>
  );
}

export default App;