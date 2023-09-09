import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { artir, azalt } from './redux/features/counter/counterSlice';

function App() {

  const dispatch = useDispatch()

  const { counter } = useSelector(state => state.counter)

  return (
    <div className="App">
      <button onClick={() => dispatch(azalt())}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(artir())}>+</button>
    </div>
  );
}

export default App;
