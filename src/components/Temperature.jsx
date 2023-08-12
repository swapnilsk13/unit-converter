import React from "react";
import TemperatureInput from "./TemperatureInput";

export default function Temperature(){
    const [temperature,setTemperature] = React.useState();
    const [scale,setScale] = React.useState("celsius");

    const changeScaleToCelsius =(temperature)=>{
        setScale('celsius')
        setTemperature(temperature)
    }

    const changeScaleToFahrenheit=(temperature)=>{
        setScale('fahrenheit')
        setTemperature(temperature)
    }

    const celToFar=(celsius)=>{
        return (celsius * 9/5) + 32 
    }

    const farToCel=(fahrenheit)=>{
        return (fahrenheit - 32) * 5/9
    }

    let celsius;
    let fahrenheit;
    if(scale==='celsius'){
    celsius=temperature;
    fahrenheit=celToFar(temperature);
    }else{
    celsius=farToCel(temperature);
    fahrenheit=temperature;
    }


    return(
        <div>
            <TemperatureInput
            temperature={celsius}
            scale='celsius'
            onTempChange={changeScaleToCelsius}
            />
             <TemperatureInput
            temperature={fahrenheit}
            scale='fahrenheit'
            onTempChange={changeScaleToFahrenheit}
            />
        </div>
    )
}