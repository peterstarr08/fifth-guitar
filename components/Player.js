import { useRef } from 'react';
import YouTube from 'react-youtube'


export default function Player({ timeHandler }) {

    var _ID = useRef(null);


    const opts = {
        height: '300px',
        width: '100%',
    }

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