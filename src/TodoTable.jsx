
const TodoTable = ({todos}) => {
    return(
        <>
        <table border="1" style={{width:"80% ", margin:"20px auto",borderCollapse:"collapse"}}>
            <thead>
               <tr>ID</tr>
               <th>User ID</th>
               <th>title</th>
               <th>Completed</th>
            </thead>
            <tbody>
                {todos.map((todo)=>(
                    <tr key={todo.id}>
                     <td>{todo.id}</td>
                     <td>{todo.userId}</td>
                     <td>{todo.title}</td>
                     <td>{todo.completed?"✅" : "❌"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default TodoTable;