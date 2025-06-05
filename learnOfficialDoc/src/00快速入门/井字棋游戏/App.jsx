import { useState } from "react"
import Square from "./Square"
export default function Board() {
    const list = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];
    const [xIsNext, setXIsNext] = useState(true);
    const [squareArr, setSquareArr] = useState(Array(9).fill(null));
    // const [msg, setMsg] = useState('Next Player:X');
    let status = 'Next Player:X';
    function handleClick(i) {
        if (squareArr[i]) return;
        const nextSquareArr = squareArr.slice();
        xIsNext ? nextSquareArr[i] = 'X' : nextSquareArr[i] = 'O';
        setSquareArr(nextSquareArr);
        setXIsNext(!xIsNext);

        // 这里设置后慢了一拍,相当于之前使用类方法生命周期使用的不对
        // const winner = cal(squareArr);
        // if (winner) {
        //     setMsg('Winner:' + winner);
        // } else {
        //     setMsg(xIsNext ? 'Next Player:X' : 'Next Player:O');
        // }
    }

    const winner = cal(squareArr);
    if (winner) {
        status = 'Winner:' + winner;
    } else {
        status = xIsNext ? 'Next Player:X' : 'Next Player:O';
    }




    function cal(squareArr) {
        for (let i = 0; i < list.length; i++) {
            const [a, b, c] = list[i];
            console.log(squareArr[a], squareArr[a] === squareArr[b], squareArr[a] === squareArr[c]);
            if (squareArr[a] && squareArr[a] === squareArr[b] && squareArr[a] === squareArr[c]) {
                return squareArr[a];
            }
        }
        return null;
    }
    return (
        <div className="board">
            <div>{status}</div>
            <div className="board-row">
                <Square value={squareArr[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squareArr[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squareArr[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squareArr[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squareArr[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squareArr[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squareArr[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squareArr[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squareArr[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>

    )
}