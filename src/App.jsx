import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player name="Player 01" symbol="X" />
        <Player name="Player 02" symbol="O" />
      </ol>
    </div>
  );
}

export default App;
