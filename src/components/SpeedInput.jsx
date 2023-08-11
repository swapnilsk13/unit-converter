import React from 'react';

const scalesName={
  km:'km per hour',
  mi:'miles per hour'
}

export default function SpeedInput(props) {
  const {speed,scale,changeSpeed} = props;
  return (
    <fieldset>
        <legend>Speed in {scalesName[scale]}</legend>
      {/* <label>Speed {props.unit}</label> */}
      <input type='number'
      value={speed}
      onChange={(e)=>changeSpeed(e.target.value)}
      />
      <br/>
      {/* <SpeedMonitor speed={speed}/> */}
      </fieldset>
  );
}

