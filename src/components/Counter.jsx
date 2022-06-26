import React from 'react'
import Actions from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


function Counter() {

  const count = useSelector(state => state.countReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <p><button onClick={() => dispatch(Actions.countActions.sayiArttir(1))}>Arttir</button></p>
      <p>{count}</p>
      <p><button onClick={() => dispatch(Actions.countActions.sayiAzalt(1))}>Azalt</button></p>

    </div>
  )
}

export default Counter