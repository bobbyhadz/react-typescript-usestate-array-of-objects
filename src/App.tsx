import React from 'react';
import {useState} from 'react';

const App = () => {
  // 👇️ const names: string[]
  const [names, setNames] = useState<string[]>([]);

  return (
    <div>
      <button
        onClick={() =>
          setNames(prevNames => [...prevNames, 'Bob'])
        }
      >
        Add name
      </button>

      {names.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
