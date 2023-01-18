import React, {FC} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps>  = ({board, setBoard}) => {
    
    function click(cell: Cell) {
        board.changeColor(cell);
        updateBoard();
    }
    
    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard)
    }
    
    return (
        <div className="board">
            {board.cellls.map((cell) =>
                <CellComponent 
                    click={click}
                    key={cell.x}
                    cell={cell}
                />
            )}
        </div>
    );
};

export default BoardComponent;