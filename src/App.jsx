import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {

  const [activePlayer, setActivePlayer]  = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currentPlayer) =>  currentPlayer === "X" ? "O" : "X");
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 01" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 02" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;
