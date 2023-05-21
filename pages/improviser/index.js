import Fretboard from "@/components/Fretboard";
import Controller from "@/components/Improviser/Controller";
import Timeline from "@/components/Improviser/Timeline";
import Player from "@/components/Player";

import { useRef, useState } from "react";
export default function Improviser() {
    //array of measures or single bar
    //each measures contains 1/4 beat and chord to be played
    //special array [repeatition, no of repeatition]
    const data = [
        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["F7","","",""],["F7","","",""],["CM","","",""],["CM","","",""],["GM","","",""],["GM","","",""],["Dm","","",""],["Dm","","",""],["F7","","",""],["F7","","GM",""], ["Am", "", "", ""], ["Am", "", "", ""], ["GM", "", "", ""], ["GM", "", "", ""],["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["F7","","",""],["F7","","",""],["CM","","",""],["CM","","",""],["GM","","",""],["GM","","",""],["Dm","","",""],["Dm","","",""],["F7","","",""],["F7","","GM",""], ["Am", "", "", ""], ["Am", "", "", ""], ["GM", "", "", ""], ["GM", "", "", ""],["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["F7","","",""],["F7","","",""],["CM","","",""],["CM","","",""],["GM","","",""],["GM","","",""],["Dm","","",""],["Dm","","",""],["F7","","",""],["F7","","GM",""], ["Am", "", "", ""], ["Am", "", "", ""], ["GM", "", "", ""], ["GM", "", "", ""],["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["F7","","",""],["F7","","",""],["CM","","",""],["CM","","",""],["GM","","",""],["GM","","",""],["Dm","","",""],["Dm","","",""],["F7","","",""],["F7","","GM",""], ["Am", "", "", ""], ["Am", "", "", ""], ["GM", "", "", ""], ["GM", "", "", ""],["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["F7","","",""],["F7","","",""],["CM","","",""],["CM","","",""],["GM","","",""],["GM","","",""],["Dm","","",""],["Dm","","",""],["F7","","",""],["F7","","GM",""], ["Am", "", "", ""], ["Am", "", "", ""], ["GM", "", "", ""], ["GM", "", "", ""],["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["F7","","",""],["F7","","",""],["CM","","",""],["CM","","",""],["GM","","",""],["GM","","",""],["Dm","","",""],["Dm","","",""],["F7","","",""],["F7","","GM",""], ["Am", "", "", ""], ["Am", "", "", ""], ["GM", "", "", ""], ["GM", "", "", ""],["Es", "", "", "", ""], ["Es", "", "", "", ""],

        ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Am", "", "", ""], ["CM", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""],
        ["GM", "", "", ""], ["GM", "", "", ""], ["Dm", "", "", ""], ["Dm", "", "", ""], ["F7", "", "", ""], ["F7", "", "", ""], ["Es", "", "", "", ""], ["Es", "", "", "", ""],



    ];// temporary holder for data, m-Minor M-major, 7-major7, &-minor7, s-flat6
    const metaData = [117, 4, -0.2];
    const [currentTime, setCurrentTime] = useState(0); //time keeper for player
    const [currentBeat, setCurrentBeat] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const timeLineContainer = useRef(null);

    const [currentChord, setCurrentChord] = useState(null);

    const [rangePicker, setRangePicker] = useState([0, 3, 7, 12]); // range picker for strings and frets substrings to show

    const [YTData, setYTData] = useState(null);

    function handleChordChanges(beat) {

        setCurrentBeat(beat);
        if (beat > 0) {
            beat = beat - 1;
            let measure = Math.floor(beat / 4);
            let bar = beat % 4;
            if (data[measure][bar] != '') {
                setCurrentChord(data[measure][bar]);
            }
        }
    };

    function timeLineClickHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        let beatNumber = parseInt(e.target.id.slice(1)) + 1;
        YTData.seekTo(metaData[2] + beatNumber * 60 / metaData[0], true);
    };

    function rangeHandler(value) {
        setRangePicker(value);
    };

    function handleScroll(e){
        e.target.scrollLeft = 10000;
    }

    return (
        <>
            <Controller range={rangePicker} rangeHandler={ rangeHandler }></Controller>
            <main className="mx-36">

                <section className='grid grid-cols-12 my-8'>
                    <div className='col-span-4'>
                        <Player YTData={setYTData} playSetter={setIsPlaying} timeHandler={setCurrentTime} metaData={metaData} currentBeat={currentBeat} beatHandler={handleChordChanges}></Player>
                    </div>
                    <div className='col-span-8 overflow-auto  ml-8'>
                        <section className="flex flex-col gap-4">
                            <Fretboard keyToShow={"A"} scaleToShow={"minor"} range={rangePicker}></Fretboard>
                        </section>
                    </div>
                </section>
                <div id="timeLineContainer" ref={timeLineContainer} className="overflow-auto  my-8" >
                    <Timeline isPlaying={isPlaying} data={data} position={currentBeat} clickHandler={timeLineClickHandler} ></Timeline>
                </div>
                <div className="overflow-auto my-4">
                    <section className="flex flex-col gap-4 pb-72">
                        <Fretboard keyToShow={"A"} scaleToShow={"minor"} chordToShow={currentChord} range={rangePicker}></Fretboard>
                        {/* <Fretboard keyToShow={"E"} scaleToShow={"major"} range={rangePicker}></Fretboard> */}
                    </section>
                </div>
            </main>
        </>
    );
}