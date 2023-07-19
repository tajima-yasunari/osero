import { useState } from 'react';
import styles from './index.module.css';

const directions = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
];

const Home = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 2, 2, 0, 2, 2, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 2, 2, 2, 2, 2, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ]);
  const [turnColor, setTurnColor] = useState(1);
  const newBoard: number[][] = JSON.parse(JSON.stringify(board));
  const click = (x: number, y: number) => {
    if (board[y][x] === 0) {
      for (const direction of directions) {
        for (let distance = 1; distance <= 7; distance++) {
          if (board[y + distance * direction[0]] === undefined) {
            break;
          } else if (
            board[y + distance * direction[0]][x + distance * direction[1]] === undefined
          ) {
            break;
          } else if (
            board[y + distance * direction[0]][x + distance * direction[1]] === turnColor
          ) {
            if (distance > 1) {
              for (let back = distance; back >= 0; back -= 1) {
                newBoard[y + back * direction[0]][x + back * direction[1]] = turnColor;
              }
              setBoard(newBoard);
              setTurnColor(3 - turnColor);
            }
            break;
          } else if (
            board[y + distance * direction[0]][x + distance * direction[1]] ===
            3 - turnColor
          ) {
            continue;
          } else if (board[y + distance * direction[0]][x + distance * direction[1]] === 0) {
            break;
          } else {
            console.log('error');
          }
        }
      }
    }
  };
  const blackCount = () => board.flat().filter((i) => i === 1).length;
  const whiteCount = () => board.flat().filter((i) => i === 2).length;
  return (
    <div className={styles.container}>
      <>{blackCount()}</>
      <>{whiteCount()}</>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.boarder} key={`${y}-${x}`} onClick={() => click(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.disk}
                  style={{ backgroundColor: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
