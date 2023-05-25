import { useRef, useState } from "react";
import TextInput from "../TextInput";

import CustomCheckBox from "../CustomCheckBox";

export default function Controller({ range, rangeHandler, chordPicker, handleChordPicker }) {
 

    const CHORD_PCIKER=[
        {
            id: 0,
            toShow: chordPicker[0],
            value: "R"
        },
        {
            id: 1,
            toShow: chordPicker[1],
            value: "D"
        },
        {
            id: 2,
            toShow: chordPicker[2],
            value: "5th"
        },
        {
            id: 3,
            toShow: chordPicker[3],
            value: "Ext 1"
        },
        {
            id: 4,
            toShow: chordPicker[4],
            value: "Ext 2"
        }];

    function handleChordSelector(e) {
        let _chordPicker = chordPicker.map((value) => value);


        if (_chordPicker[e]) {
            _chordPicker[e] = false;

        }
        else {
            _chordPicker[e] = true;
        }

        handleChordPicker(_chordPicker);        

    }

    function handleLowString(e) {
        e.preventDefault();
        if (isNaN(parseInt(e.target.value))) {
            return;
        }
        rangeHandler([e.target.value - 1, range[1], range[2], range[3]]);

    }

    function handleHighString(e) {
        e.preventDefault();
        if (isNaN(parseInt(e.target.value))) {
            return;
        }
        rangeHandler([range[0], e.target.value - 1, range[2], range[3]]);
    }

    function handleLeftFret(e) {
        e.preventDefault();
        if (isNaN(parseInt(e.target.value))) {
            return;
        }
        rangeHandler([range[0], range[1], e.target.value, range[3]]);

    }

    function handleRightFret(e) {
        e.preventDefault();
        if (isNaN(parseInt(e.target.value))) {
            return;
        }
        rangeHandler([range[0], range[1], range[2], e.target.value]);

    }
    return (
        <div className="fixed z-20 w-full h-fit py-2 bottom-0 left-0 border-t-4 border-sky-600  bg-white ">
            <div className="flex flex-row justify-between">
                <div>
                    <CustomCheckBox data={CHORD_PCIKER} keyPrefix={"chr"} stateSetter={handleChordSelector}></CustomCheckBox>
                </div>
                <div className="flex flex-row gap-2 ml-4">
                    <TextInput handleChange={handleLowString} defaultValue={range[0] + 1}>From String</TextInput>
                    <TextInput handleChange={handleHighString} defaultValue={range[1] + 1}>To String</TextInput>
                    <TextInput handleChange={handleLeftFret} defaultValue={range[2]}>From Fret</TextInput>
                    <TextInput handleChange={handleRightFret} defaultValue={range[3]}>To Fret</TextInput>
                </div>
            </div>
        </div>
    );
}