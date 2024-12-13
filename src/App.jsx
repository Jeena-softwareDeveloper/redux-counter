import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset } from './Redux/counter';

function App() {
  const countpatch = useDispatch();
  const btnincrement=()=>countpatch(increment())
 const countsel=useSelector((state)=>state.counter.value)
  return (
 <div><h2>Your Counting Value: {countsel}</h2>
 <div>
 <button onClick={btnincrement}> click here</button>
 <button onClick={()=>countpatch(decrement())}> click here</button>
 <button onClick={()=>countpatch(reset())}> click here</button>
 </div>
 </div>
 
  )
}

export default App
