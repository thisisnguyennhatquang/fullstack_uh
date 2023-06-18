import { useState } from "react";

const Header = (props) => {
  return <h1>{props.header}</h1>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header header="give feedback" />
      <Header header="statistics" />
    </div>
  );
};

export default App;
