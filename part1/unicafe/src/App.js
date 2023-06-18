import { useState } from "react";

const Header = (props) => {
  return <h1>{props.header}</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = (props) => {
  return (
    <div>
      {props.text}
      {props.counter}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedTotal = updatedGood + neutral + bad;
    setTotal(updatedTotal);
    setAverage((updatedGood * 1 + neutral * 0 + bad * -1) / updatedTotal);
    setPercentage((updatedGood / updatedTotal) * 100);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedTotal = good + updatedNeutral + bad;
    setTotal(updatedTotal);
    setAverage((good * 1 + updatedNeutral * 0 + bad * -1) / updatedTotal);
    setPercentage((good / updatedTotal) * 100);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedTotal = good + neutral + updatedBad;
    setTotal(updatedTotal);
    setAverage((good * 1 + neutral * 0 + updatedBad * -1) / updatedTotal);
    setPercentage((good / updatedTotal) * 100);
  };

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header header="statistics" />
      <Display text="good " counter={good} />
      <Display text="neutral " counter={neutral} />
      <Display text="bad " counter={bad} />
      <Display text="all " counter={total} />
      <Display text="average " counter={average} />
      <div>positive {percentage}%</div>
    </div>
  );
};

export default App;
