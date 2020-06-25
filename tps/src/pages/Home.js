import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const title = 'Triangle Solo Noble';
  const link = 'Solutions';
  const history = [
    'Triangle Solo Noble is a board game for one player involving movement of marbles on a board with grooves. The game is simply known as Solitaire in the United Kingdom where the card games are called Patience. It is also referred to as Brainvita, especially in India.',
    'The first evidence of the game can be tracked back to the court of Louis XIV, and the specific date of 1687, with an engraving made that year by Claude Auguste Berey of Anne de Rohan-Chabot, Princess of Soubise, with the puzzle by her side. The August 1687 edition of the French literary magazine Mercure galant contains a description of the board, rules, and sample problems. This is the first known reference to the game in print.',
    'The game fills the entire board except for one groove. The objective is, making valid moves, to empty the entire board except for a solitary marble.'
  ];

  return (
    <div className="container">
      <div className="m-3">
        <div className="d-flex justify-content-center">
          <h1 className="text-light">{title}</h1>
        </div>
        <div className="d-flex justify-content-center p-3">
          <img src="/assets/tps.jpg" alt="The princess of Soubise playing solitaire, 1687" className="border rounded" />
        </div>
        <div className="d-flex justify-content-center p-3">
          <Link to="/solutions">
            <button type="button" className="btn btn-success">{link}</button>
          </Link>
        </div>
        <div>
          <h1 className="text-light">History</h1>
          <div className="text-justify">
            {history.map((text, key) => (
              <p key={key} className="text-light">{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
