import { useEffect, useRef } from "react";
import Beat from "./Beat";
import { CHORD_LIBRARY } from "@/data/constants";

export default function Timeline({ data, position, clickHandler }) {
    //gets an 2d array in data, each array in array is a single bar and that bar has array of quarter notes,
    //  e.g. [[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4]],
    //  'pos' is array of bar and measure

    //TODO try storing the time into ids of div which already have the name of Chords
    const _data =[];
    const chordsRef = useRef(null);


 
    // useEffect(
    //     ()=>{
    //         _data.current[24].scrollIntoView({
    //             behavior: 'smooth',
    //          })
        
    //     }
    // );
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
            if(i*4+j+1==position){
                _data.push(<Beat clickHandler={clickHandler}  id={i*4+j+1} chord={data[i][j].slice(0,1)+CHORD_LIBRARY[(data[i][j].slice(1))]} accented={j == 0 ? true : false} highlighted={true}></Beat>);
                continue;
            }
            _data.push(<Beat  clickHandler={clickHandler} id={i*4+j+1} chord={data[i][j].slice(0,1)+CHORD_LIBRARY[(data[i][j].slice(1))]} accented={j == 0 ? true : false}></Beat>);
        }
    }


   

    return (
        <>
            <section ref={chordsRef} className="w-fit h-fit flex flex-row justify-start">
                {_data}
            </section>
        </>
    );
}