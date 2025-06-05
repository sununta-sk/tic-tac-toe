import React, { useState, useEffect } from "react";

function App() {
  const [ticTacToe, setTicTacToe] = useState(["","","","","","","","","",]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(false);


  const sayHello = (buttonNumber) => {
    if (winner === false) {
    
    const newTicTacToe = [...ticTacToe];
    if (newTicTacToe[buttonNumber] === "") {
      newTicTacToe[buttonNumber] = turn;
      setTicTacToe(newTicTacToe);
      if (turn === "X") {
        setTurn("O");
      } else {
        setTurn("X");
      }
    }
  }
}

  const checkWinner = () => {
  const winningCombinations = [
    [0, 1, 2], // 0
    [3, 4, 5],  
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (ticTacToe[a] === ticTacToe[b] && ticTacToe[b] === ticTacToe[c] && ticTacToe[a] !== "") {
      setWinner(true);
    }
  }
  }

  useEffect(() => {
    checkWinner();
  }, [ticTacToe]);

  return (
    <div className= "h-screen w-screen flex flex-col">
      <div className="h-3/6 w-full flex items-center justify-center"><h1 className="text-5xl">Tic Tac Toe</h1></div>
      <div
        className="grid grid-cols-3 grid-rows-3  
      h-[1000px] w-screen text-4xl p-6"
      >
        <button
          className="border-2 border-black bg-blue-200"
          onClick={() => sayHello(0)}
        >
          {ticTacToe[0]}
        </button>
        <button
          className="border-2 border-black bg-blue-300"
          onClick={() => sayHello(1)}
        >
          {ticTacToe[1]}
        </button>
        <button
          className="border-2 border-black bg-blue-200"
          onClick={() => sayHello(2)}
        >
          {ticTacToe[2]}
        </button>
        <button
          className="border-2 border-black bg-blue-300"
          onClick={() => sayHello(3)}
        >
          {ticTacToe[3]}
        </button>
        <button
          className="border-2 border-black bg-blue-200"
          onClick={() => sayHello(4)}
        >
          {ticTacToe[4]}
        </button>
        <button
          className="border-2 border-black bg-blue-300"
          onClick={() => sayHello(5)}
        >
          {ticTacToe[5]}
        </button>
        <button
          className="border-2 border-black bg-blue-200"
          onClick={() => sayHello(6)}
        >
          {ticTacToe[6]}
        </button>
        <button
          className="border-2 border-black bg-blue-300"
          onClick={() => sayHello(7)}
        >
          {ticTacToe[7]}
        </button>
        <button
          className="border-2 border-black bg-blue-200"
          onClick={() => sayHello(8)}
        >
          {ticTacToe[8]}
        </button>
      </div>
      {winner && <div className="h-full w-full text-5xl items-center justify-center flex"><h1>Winner</h1></div>}
    </div>
  );
}

export default App;
