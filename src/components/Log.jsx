const Log = ({ turns }) => {
  return (
    <li id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {" "}
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </li>
  );
};

export default Log;
