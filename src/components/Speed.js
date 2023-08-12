import React from 'react';
import SpeedInput from './SpeedInput';
import SpeedMonitor from './SpeedMonitor';
import Temperature from './Temperature';


function Speed() {
 const [speed,setSpeed]=React.useState();
 const [scale,setScale]=React.useState("km");


 const changeScaleTokm = (speed)=>{
  setScale('km')
  setSpeed(speed)
 }

 const changeScaleToMile = (speed) =>{
  setScale('mi')
  setSpeed(speed)
 }

 const kmToMi=(kmph)=>{
  return kmph * 0.6213;
 }

 const miToKm = (miph)=>{
  return miph / 0.6213;
 }

 let kmph;
 let miph;
 if(scale==='km'){
  kmph=speed;
  miph=kmToMi(speed);
 }else{
  kmph=miToKm(speed);
  miph=speed;
 }
  return (
    <div className='app'>
    <SpeedInput
    speed={kmph}
    scale='km'
    changeSpeed={changeScaleTokm}
    />
    <SpeedInput 
    speed={miph}
    scale='mi'
    changeSpeed={changeScaleToMile}
    />

    <SpeedMonitor speed={kmph}/>

    </div>
  )
  }

export default Speed;
