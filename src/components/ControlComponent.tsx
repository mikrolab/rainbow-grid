import React, {FC, useState} from 'react';
import {Board} from "../models/Board";

interface ControlProps {
    restart: () => void;
    updateColors: (firstColor: string, secondColor: string) => void;
    currentColors: any;
}

const ControlComponent:FC<ControlProps> = ({restart, updateColors, currentColors}) => {
    const [firstColor, setFirstColor] = useState('');
    const [secondColor, setSecondColor] = useState('');
    
    function validation() {
        let regex = /[0-9A-Fa-f]{6}/g;
        
        if (!firstColor.match(regex) || !secondColor.match(regex)) {
            alert('Wrong colors format')
        } else {
            updateColors(firstColor, secondColor)
            setFirstColor('');
            setSecondColor('');
        }
    }
    
    return (
        <div className="controlPanel">
            <button 
                className="btn"
                onClick={restart}
            >
                Restart board
            </button>
            <div className="newColors">
                <p>Write colors in hex format</p>
                <label htmlFor="firstColor">
                    Change first color (now: <span>{currentColors.firstColor}</span>):
                    <input type="text" name="firstColor" id="firstColor" value={firstColor} onInput={e => setFirstColor(e.currentTarget.value)} />
                </label>
                <label htmlFor="secondColor">
                    Change second color (now: <span>{currentColors.secondColor}</span>):
                    <input type="text" name="secondColor" id="secondColor" value={secondColor} onInput={e => setSecondColor(e.currentTarget.value)} />
                </label>
                <button
                    onClick={validation}
                    className="btn"
                >
                    Set new colors
                </button>
            </div>
        </div>
    );
};

export default ControlComponent;