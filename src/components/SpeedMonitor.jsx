import React from "react";

export default function SpeedMonitor(props){
   
    return(
      props.speed>80?<p Style="color:red">You are exeeding the speed limit</p>:<p>You are within speed limit</p>

    )
}