import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Text = (props) => <text>{props.text}</text>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients."
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(7));

  const handleButtonClick = () => {
    const copy = [...anecdotes];
    var randomIndex = Math.floor(Math.random() * copy.length);
    setSelected(randomIndex);
  };

  const handleVoteButtonClick = () => {
    const copy = [...points];
    console.log(copy);
    copy[selected] += 1;
    setPoints(copy);
  };

  const findItemWithMostVotes = () => {
    const max = Math.max(...points);
    const maxIndex = points.indexOf(max);
    const foundItem = anecdotes[maxIndex];
    return (
      <>
        <p> {foundItem} </p>
        <p>{"Has " + max + " votes."}</p>
      </>
    );
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[selected]}
      <p> {"Has " + points[selected] + " votes."} </p>
      <Button text="NEXT ANECDOTE" handleClick={handleButtonClick} />
      <Button text="VOTE" handleClick={handleVoteButtonClick} />
      <h3>Anecdote with most votes</h3>
      {findItemWithMostVotes()}
    </div>
  );
};

export default App;
