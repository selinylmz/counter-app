import {useState} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,incrementByAmount} from '../redux/counter/counterSlice';

function Counter() {
    const [amount,setAmount]=useState(0);
    const countValue=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={()=>dispatch(decrement())}>Decrement(azalt)</button> {/*azalt */}
            <button onClick={()=>dispatch(increment())}>Increment(arttir)</button>
            <br/><br/>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={()=>dispatch(incrementByAmount(amount))}>Increment by Amount(verilen miktar kadar arttir)</button>
        </div> 
    )
}

export default Counter;
