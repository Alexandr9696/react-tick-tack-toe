import React from 'react';
import './Game.css'
import Board from "../Board/Board";
import {calculateWinner} from "../../helper";

const initialState = Array(9).fill(null)

const Game = () => {
  const [board, setBoard] = React.useState(initialState);
  const [xIsNext, setXIsNext] = React.useState(true);
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    // определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return null
    // определить чей ход
    boardCopy[index] = xIsNext ? 'X' : '0'
    // Обновить стейт
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const startNewGame = () => {
    setBoard(initialState)
  }

  return (
    <div className="wrapper">
      <button className="start__btn" onClick={startNewGame}>Начать заново</button>
      <Board squares={board} click={handleClick}/>
      <p className="game__info">
        {
          winner ? 'Победитель ' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : '0')
        }
      </p>
    </div>
  );
};

export default Game;
