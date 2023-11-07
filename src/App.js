import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  const colorOptions = ['#FF5733', '#33FF57', '#3366FF', '#FF33E3', '#c9be97', '#d3dec3', '#658f76', '#47879e', '#3d65d4', '#6b3aba', '#ab6641'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colorOptions} />
    </div>
  );
}

export default App;
