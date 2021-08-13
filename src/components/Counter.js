import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
const counter = useSelector(state => state.counter)
const dispatch = useDispatch()

  const toggleCounterHandler = () => {};
  const incrementHandler = ()=>{
    dispatch()
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button>increment</button>
        <button>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
