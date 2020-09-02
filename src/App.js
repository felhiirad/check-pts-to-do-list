import React, { useState } from 'react';
import './App.css';

function App() {
  const [item,setItem]=useState('')
  const [time,setTime]=useState('')
  const [todos,setTodos]=useState([])
  const handleInput=(e)=>{
    setItem(e.target.value)
  }
  const handleTodos=()=>{
    let d=new Date()
    console.log(d)
    setTodos([...todos,{id:Math.random(),item:item,temp:d.toDateString(),datePrev:time}])
  }
  const removeItem=(x)=>{
       setTodos(todos.filter(el=>el.id!==x))
  }
  const editeItem=(y)=>{
    let z=prompt('give me the new value')
    setTodos(todos.map(el=>el.id == y?{id:y,item:z,temp:el.temp,datePrev:el.datePrev} :el) )
    
 
  
  }
  return (
    <div style={{  
      textAlign:"center",
     
    }}>
      <h1 style={{textAlign:'center',fontFamily:'cursive'}}> To    Do    List</h1>
      <br></br>
      <br></br>
    <input type="text" placeholder="task" onChange={(e)=>handleInput(e)} style={{width:'555px',borderRadius:'30px'  }} />
    <input type="date" onChange={(e)=>setTime(e.target.value)}style={{borderRadius:'30px'}} />
    <div className='div' onClick={handleTodos} >Add task</div>
    <div>{todos.map(el=><div style={{backgroundColor:"grey", borderRadius:'75px'}}>
      <p>{el.item}</p>
      <p style={{fontFamily:'cursive',textDecoration:'underline'}}>CREER LE :{el.temp}</p>
      <p style={{fontFamily:'cursive',textDecoration:'underline'}}>DATE PREVU : {el.datePrev}</p>
      <button className="button1 button4" onClick={()=>removeItem(el.id)}>Delete</button>
      <button className="button button5" onClick={()=>editeItem(el.id)}>Edite</button>
     
    </div>)}</div>
    </div>
  );
}

export default App;
