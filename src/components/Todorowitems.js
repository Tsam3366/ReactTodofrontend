function Todorowitems(props)
{
    return(
        <tr onClick={()=>props.deletetodo(props.rowNumber)}>
              <th scope="row">{props.rowNumber}</th>
              <td>{props.rowJob}</td>
              <td>{props.rowAssigned}</td>
            </tr>
    );
}
export default Todorowitems