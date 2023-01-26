import React,{useState} from "react";
function NewTodoform(props)
{
    const [descChange,setDesc]=useState("");
    const[assigned,setAssigned]=useState("");
    const onSubmittodo=()=>{
        if(descChange !== '' && assigned !=='')
        {
            props.todoaction(descChange,assigned);
            setDesc("")
            setAssigned("")
        }
    }

    return(
        <div className='mt-5'>
            <form>
                <div className='mt-3'>
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" onChange={e=>setAssigned(e.target.value)} value={assigned} required/>                    
                </div>
                <div className="mt-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" row={3} onChange={e=>setDesc(e.target.value)} value={descChange} required></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={onSubmittodo}>Add To Do</button>
            </form>
        </div>
    )
}
export default NewTodoform;