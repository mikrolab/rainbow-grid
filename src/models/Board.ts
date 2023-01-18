import {Cell} from "./Cell";

export class Board {
    cellls: Cell[] = [];
    readonly  colors: any;
    
    constructor(colors: object) {
        this.colors = colors;
    }
    
    public initCells() {
        
        for (let i = 0; i < 256; i++) {
            let x = 0;
            let j = 0;
            do {
                x++;
                j = Math.pow(3, x)
            } while (j<i)
            
            if (j === i) {
                this.cellls.push(new Cell(this, i, this.colors.firstColor, false ))
            } else {
                this.cellls.push(new Cell(this, i, this.getColor(), true))
            }
        }
    }

    public getColor() {
        let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let hexColorCode = "#";
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * hexNumbers.length);
            hexColorCode += hexNumbers[randomIndex];
        }
        if (hexColorCode === this.colors.firstColor || hexColorCode === this.colors.secondColor){
            this.getColor()
        }
        return hexColorCode;
    }
    
    public changeColor(cell: Cell) {
        if (this.cellls[cell.x].available) {
            this.cellls[cell.x].color = this.getColor();
        } else {
            if (this.cellls[cell.x].color === this.colors.firstColor) {
                this.cellls[cell.x].color = this.colors.secondColor
            } else {
                this.cellls[cell.x].color = this.colors.firstColor
            }
        }
    }
    
    public getCopyBoard(): Board {
        const newBoard = new Board(this.colors);
        newBoard.cellls = this.cellls;
        return newBoard;
    }
}