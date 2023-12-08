import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(prev => !prev);
  };

  let playerName = isEditing ? (
    <input type="text" required value={name} />
  ) : (
    <span className="player-name">{name}</span>
  );

  let buttonCaption = isEditing ? "Save" : "Edit";

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
      </span>
    </li>
  );
};

export default Player;
