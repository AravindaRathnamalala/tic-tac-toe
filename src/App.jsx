import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 01" symbol="X" />
        <Player initialName="Player 02" symbol="O" />
      </ol>
    </div>
  );
}

export default App;
