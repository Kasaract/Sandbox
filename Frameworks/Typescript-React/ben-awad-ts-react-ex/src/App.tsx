import React from 'react';

// import { TextField } from './TextField';
import { Counter } from './Counter';

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div >
      {/* <TextField text='Hello' handleChange={e => { }} /> */}
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
