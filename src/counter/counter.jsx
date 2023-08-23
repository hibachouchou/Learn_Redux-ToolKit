import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice/counterSlice'



const Counter=()=>{
const count = useSelector((state) => state.counterData.value)
const dispatch = useDispatch()
    return(
        <>
<h1>Counter</h1>
<br/> 
<button onClick={() => dispatch(increment())}> + </button> {count} <button  onClick={() => dispatch(decrement())}> - </button>
        </>
    )
}

export default  Counter