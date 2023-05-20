import { useRef } from 'react';
import YouTube from 'react-youtube'

//YT player and current time subscriber.
//Param:
//timeHandler: uses this handler to set current time of parent prop
export default function Player({ timeHandler, metaData, currentBeat ,beatHandler, timeUpdate, timeUpdateHandler, YTData}) {

  
    var _ID = useRef(null);//uses setInterval to store ID for time subscriber

    //opts for size of YT player
    const opts = {
        height: '300px',
        width: '100%',
    }

    //handler for playing and subscribing the time keeper.
    function handlePlay(event) {
        if (_ID.current == null) {
            _ID.current = setInterval(
                () => {
                    let currentTime = event.target.getCurrentTime();


                    timeHandler(currentTime);
                    
                    beatHandler(Math.floor((currentTime+metaData[2])/(60/metaData[0])));
                    
                }
                , 60);
        }
    }

    function onReady(e){
        YTData(e.target);
    }

    // function handlePause(evet){
    //     if(_ID.current!=null){
    //         clearInterval(_ID.current);
    //         _ID.current = null;
    //     }
    // }

    return (
        <YouTube onPlay={handlePlay} opts={opts} videoId={"HXuAqmwM3C4"} onReady={onReady}></YouTube>
    );
}