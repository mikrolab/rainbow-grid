import {Board} from "./Board";

export class Cell {
    readonly x: number;
    color: string;
    readonly available: boolean;
    id: number;
    board: Board;
    
    constructor(board: Board, x: number, color: string, available: boolean) {
        this.x = x;
        this.color = color;
        this.board = board;
        this.available = available;
        this.id = Math.random();
    }
}