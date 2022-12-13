import { useState } from "react";
import reactLogo from "./assets/react.svg";

// CSS
import "./App.css";

//Main component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="TestH1">Test Page</h1>
      <Navlink title="Home" text="some text here" />
      <Navlink title="About" text="some more text" />
      <Navlink title="About" text="even more text" />
      <componentWithChildren>
        <h3>Child 1</h3>
        <h3>Child 2</h3>
        <h3>Child 3</h3>
      </componentWithChildren>

      <MyComponent>
        <p>Test 1</p>
        <p>Test 2</p>
        <p>Test 3</p>
      </MyComponent>

      <Welcome className="VelkommenTxt" name="Lars Gunnar" />
    </div>
  );
}

//NAV

function Navlink(props) {
  //Destructuring object
  const { title, text } = props;

  const display = true;

  return (
    <li>
      <a href="./">{title}</a>
    </li>
  );
}

//Comp

function ComponentWithChildren(props) {
  console.log(props);

  return <div>{props.children}</div>;
}

//My component

function MyComponent(props) {
  return <div>{props.children}</div>;
}

function Welcome(props) {
  const { name } = props;
  return <h2 className={"WelcomeStyle"}>Hello, {name}</h2>;
}

export default App;
