import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/counterActions';

const Counter = () => {

  const dispatch = useDispatch();

  const { count } = useSelector(state => state.counter)

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )

}

export default Counter;