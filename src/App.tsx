import { Counter } from "./components/Counter";
import { User } from "./components/User";

import { FatherTimer } from "./components/FatherTimer";
import { CounterRed } from "./components/CounterRed";

import { Form } from "./components/Form";
import { Form2 } from "./components/Form2";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr/>

      <h2>UseState</h2>
      <Counter />
      <br/>
      <User />
      <br/>
      <h2>UseEffect - useRef</h2>
      <hr/>
      <FatherTimer/>

      <h2>useReducer</h2>
      <hr />
      <CounterRed />


      <h2>Custom Hooks</h2>
      <hr />
      <Form />
      <Form2/>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
