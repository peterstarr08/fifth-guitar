import { useEffect, useRef } from "react";
import { CHORD_LIBRARY } from "@/data/constants";
import { Smooch } from "next/font/google";
import Beat from "./Beat";

export default function Timeline({ data, position, clickHandler, isPlaying }) {
    //gets an 2d array in data, each array in array is a single bar and that bar has array of quarter notes,
    //  e.g. [[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4]],
    //  'pos' is array of bar and measure

    //TODO try storing the time into ids of div which already have the name of Chords
    const _data = [];
    const chordsRef = useRef(null);
    const animID = useRef(null);
    const doAnimate = useRef(false);

    useEffect(
        () => {

            if(!isPlaying){
                clearInterval(animID.current);
                animID.current=null;
                return;
            }

            if (animID.current == null && isPlaying) {
                animID.current = setInterval(
                    () => {
                        var ref = document.querySelectorAll("#ab")[0];
                        var container = document.querySelectorAll("#timeLineContainer")[0];
                        // if (ref != null && container != null) {
                        //     if ((ref.offsetLeft > container.scrollLeft+container.offsetWidth*(5/10))&&(ref.offsetLeft>container.scrollLeft&&ref.offsetLeft<container.scrollLeft+container.offsetWidth)) {
                        //         container.scrollBy(10, 0);
                        //     }

                        // }

                        if(ref.offsetLeft>container.scrollLeft&&ref.offsetLeft<container.scrollLeft+container.offsetWidth){
                            if((ref.offsetLeft > container.scrollLeft+container.offsetWidth*(7/10))){
                                doAnimate.current=true;
                            }
                            if((ref.offsetLeft < container.scrollLeft+container.offsetWidth*(3/10))){
                                doAnimate.current=false;
                            }
                        }
                        else{
                            doAnimate.current = false;
                        }

                        if(doAnimate.current){
                            container.scrollBy(40, 0);
                        }

                    }
                    , 1/100*1000);
            }


          

        }
    );





    // var ID = useRef(null);
    // if(ID.current==null){
    //     ID.current = setInterval(
    //         ()=>{
    //             if(chordsRef.current!=null){
    //                 chordsRef.current.querySelectorAll('#b24').scrollIntoView({
    //                                 behavior: 'smooth',
    //                               });

    //             }
    //         }
    //     ,60);
    // }


    for (let i = 0; i < data.length; i++) {
        // if (data[i].length == 2) {
        //     let repeatition = parseInt(data[i][0]);
        //     let prevBeatRepeatition = parseInt(data[i][1]);
        //     let currentLength = _data.length;
        //     for (let t = 1;t<=repeatition;t++) {
        //         for (let k = prevBeatRepeatition; k > 0; k--) {
        //             _data.push(_data[currentLength - k]);
        //         }
        //     }
        //     continue;
        // }
        for (let j = 0; j < data[i].length; j++) {
            if (i * 4 + j + 1 == position) {
                _data.push(

                    <Beat key={"n" + i * 4 + j + 1} clickHandler={clickHandler} id={i * 4 + j + 1} chord={data[i][j].slice(0, 1) + CHORD_LIBRARY[(data[i][j].slice(1))]} accented={j == 0 ? true : false} highlighted={true}></Beat>

                );
                continue;
            }
            _data.push(

                <Beat key={"n" + i * 4 + j + 1} clickHandler={clickHandler} id={i * 4 + j + 1} chord={data[i][j].slice(0, 1) + CHORD_LIBRARY[(data[i][j].slice(1))]} accented={j == 0 ? true : false}></Beat>

            );
        }

    }

    // const listItems = data.map(
    //     (data,i)=>{
    //         return data.map(
    //             (beatData,j)=>{

    //             }
    //         );
    //     }
    // );


    return (
        <>
            <section ref={chordsRef} className="w-fit h-fit flex flex-row justify-start">
                {_data}
            </section>
        </>
    );
}