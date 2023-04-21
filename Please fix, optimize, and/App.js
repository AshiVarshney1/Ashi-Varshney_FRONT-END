import React from 'react';
import List from './list';

function App() {
  const items = [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
  ];

  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
