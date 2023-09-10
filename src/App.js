// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { artir, azalt } from './redux/features/counter/counterSlice';

// function App() {

//   const dispatch = useDispatch()

//   const { counter } = useSelector(state => state.counter)

//   return (
//     <div className="App">
//       <button onClick={() => dispatch(azalt())}>-</button>
//       <span>{counter}</span>
//       <button onClick={() => dispatch(artir())}>+</button>
//     </div>
//   );
// }

// export default App;
// src/App.js

import React from 'react';
import './App.css';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <h1>Not Defteri Uygulaması</h1>
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;
