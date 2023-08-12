import React from "react";

const ScaleName={
    celsius:'celsius',
    fahrenheit:'fahrenheit'
}

export default function TemperatureInput(props){
    const {temperature,scale,onTempChange} = props
    return(
        <fieldset>
            <legend>Temperature in {ScaleName[scale]}</legend>
            <input type="number"
            value={temperature}
            onChange={(e)=>onTempChange(e.target.value)}
            />
        </fieldset>
    )
}

