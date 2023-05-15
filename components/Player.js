import { useRef } from 'react';
import YouTube from 'react-youtube'

//YT player and current time subscriber.
//Param:
//timeHandler: uses this handler to set current time of parent prop
export default function Player({ timeHandler }) {

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
                    timeHandler(event.target.getCurrentTime());
                }
                , 10);
        }
    }

    // function handlePause(evet){
    //     if(_ID.current!=null){
    //         clearInterval(_ID.current);
    //         _ID.current = null;
    //     }
    // }

    return (
        <YouTube onPlay={handlePlay}  opts={opts} videoId={"HXuAqmwM3C4"}></YouTube>
    );
}