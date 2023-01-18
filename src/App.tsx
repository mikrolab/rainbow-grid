import React, {useEffect, useState} from 'react';
import './App.scss';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import ControlComponent from "./components/ControlComponent";

function App() {
    const [colors, setColors] = useState({
        firstColor: '#FF0000',
        secondColor: '#000000'
    })
    const[board, setBoard] = useState(new Board(colors))


    useEffect( () => {
        console.log(colors)
        restart()
    }, [])

    function restart() {
        const colors = {
            firstColor: '#FF0000',
            secondColor: '#000000'
        }
        setColors(colors);
        const newBoard = new Board(colors);
        newBoard.initCells()
        setBoard(newBoard)
    }
    
    function updateColors(firstColor: string, secondColor: string) {
        const colors = {
            firstColor: firstColor,
            secondColor: secondColor
        }
        setColors(colors);
        const newBoard = new Board(colors);
        newBoard.initCells()
        setBoard(newBoard);
    }
    
    
    return (
        <div className="App">
            <ControlComponent
                restart={restart}
                updateColors={updateColors}
                currentColors={colors}
            />
            <BoardComponent 
                board={board}
                setBoard={setBoard}
            />
        </div>
    );
}

export default App;
