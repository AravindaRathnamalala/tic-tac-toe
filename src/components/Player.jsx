import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    if(isEditing) {
      onChangeName(symbol, playerName)
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  let buttonCaption = isEditing ? "Save" : "Edit";

  return (
    <li>
      <span className={isActive ? "active" : undefined}>
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
      </span>
    </li>
  );
};

export default Player;
