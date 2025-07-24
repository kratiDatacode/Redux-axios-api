import { useDispatch,useSelector } from 'react-redux'
import {fetchTodos} from "./redux/slice/todo";
import './App.css'
import TodoTable from './TodoTable';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state);

  console.log("State",state);

   // 🔁 Call fetchTodos when the component mounts
    useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if(state.todo.isLoading){
    return <h1>Loading.....</h1>;
  }

  if (state.todo.isError) {
    return <h1>Something went wrong!</h1>;
  }


  return (
    <>
    <div className='App'>
    {/* <button onClick={(e)=>dispatch(fetchTodos())}>Fetch Todos</button> */}
    {/* {
      state.todo.data && state.todo.data.map(e=><li>{e.title}</li>)
    } */}

    {state.todo.data && <TodoTable todos={state.todo.data}/>}

    </div>
    </>
  )
}

export default App