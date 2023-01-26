import Todorowitems from "./Todorowitems";

function Todotable(props) {
    
    return (
     
          <div className="card-footer">
            <table className="table table-hover">
              <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Desc</th>
              <th scope="col">Assigned</th>
            </tr>          
            </thead>
            <tbody>
              {
                props.todos.map(todo=>(
                    <Todorowitems 
                    key={todo.rowNumber}
                    rowNumber={todo.rowNumber}
                    rowJob={todo.rowJob}
                    rowAssigned={todo.rowAssigned}
                    deletetodo={props.deletetodo}/>
                    ))

              }
            </tbody>
            </table>
            
          </div>
        );
  }
  
  export default Todotable;
  