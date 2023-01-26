import React,{useState} from 'react';
import './App.css';
import Todotable from './components/Todotable';
import Newtodoform from './components/Newtodoform';
function App() {
  const[showaddtodoform,showaddtodoformfunc]=useState(false);
  const [todos,setTodos]=useState([])
  const todoaction =  (desc,assign)=>{
    let rowNumber=0;
    if(todos.length>0)
    {
      rowNumber=todos[todos.length-1].rowNumber+1;
    }
    else
    {
      rowNumber=1;
    }
      const newtodo=
      {
        rowNumber:rowNumber,
        rowJob:desc,
        rowAssigned:assign
      };
      setTodos(todos=>[...todos,newtodo]);
      }
    const deletetodo=(deleterownumber)=>{
      let filtered=todos.filter(function (value)
      {
        return value.rowNumber!==deleterownumber;
      });
      setTodos(filtered);
    }
  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
           Your todo's
        </div>
        <div className="card-footer">
               <Todotable todos={todos} deletetodo={deletetodo}/>
               <button className='btn btn-primary' onClick={()=>showaddtodoformfunc(!showaddtodoform)}>{showaddtodoform ? 'Close New todo' : 'Open New todo'}</button>
               {
                    showaddtodoform && <Newtodoform todoaction={todoaction}/>
               }
        </div>
      </div>
    </div>
  );
  }
export default App;
