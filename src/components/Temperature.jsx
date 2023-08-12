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

    let cel;
    let far;
    if(scale==='celsius'){
     cel=temperature;
     far=celToFar(temperature);
    }else{
     cel=farToCel(temperature);
     far=temperature;
    }


    return(
        <div>
            <TemperatureInput
            temperature={cel}
            scale='celsius'
            onTempChange={changeScaleToCelsius}
            />
             <TemperatureInput
            temperature={far}
            scale='fahrenheit'
            onTempChange={changeScaleToFahrenheit}
            />
        </div>
    )
}