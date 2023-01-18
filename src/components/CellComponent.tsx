import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, click}) => {
    return (
        <div
            className="cell"
            style={{backgroundColor: cell.color}}
            onClick={() => click(cell)}
        >
            
        </div>
    );
};

export default CellComponent;