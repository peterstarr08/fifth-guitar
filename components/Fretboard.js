import RootNote from "./Notes/RootNote";
import EmptyNote from "./Notes/EmptyNote";
import { useRef } from "react";

function generateNote(note, isOpenFret = false) {
    if (note["isScaleTone"]) {
        return <RootNote isOpenFret={isOpenFret}>{note.name}</RootNote>
    }
    return <EmptyNote isOpenFret={isOpenFret}></EmptyNote>
}


export default function Fretboard({ keyToShow, scaleToShow, chordToShow = null, chordNotesIncluded = [true, true, true, true, true] }) {


    const notesSharp = useRef(["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]);

    const tunings = useRef({
        "eStandard": ["E4", "B3", "G3", "D3", "A2", "E2"],
    });

    const chords = useRef({
        "M": [0, 4, 7],
        "m": [0, 3, 7],
    });

    const scales = useRef(
        {
            "minor": [0, 2, 3, 5, 7, 8, 10],
            "major": [0, 2, 4, 5, 7, 9, 11],
        }
    );

    const matrix = [];


    function noteIncrementer(notes, adder) {
        return notesSharp.current[(notesSharp.current.indexOf(notes) + adder) % 12];
    }

    function noteExtracter(note) {
        return note.slice(0, note.length - 1);
    }

    function octaveExtracter(note) {
        return note.slice(note.length - 1);
    }


    // type is array of true or false, [true, false, true, false, false] means show [root, nothing , fifth, extension1, nothing]
    const _scalesFormula = scales.current[scaleToShow];
 
    const _tuning = tunings.current['eStandard'];
    var _chordsFormula = null;
    const chord = [];
    if (chordToShow != null) {
        _chordsFormula = chords.current[chordToShow];
        for (let i = 0; i < _chordsFormula.length; i++) {
            if (chordNotesIncluded[i]) {
                chord.push(noteIncrementer(key, _chordsFormula[i]));
            }

        }
    }

    const scale = [];
    for (let i = 0; i < _scalesFormula.length; i++) {
        scale.push(noteIncrementer(keyToShow, _scalesFormula[i]));
    };


    for (let i = 0; i < 6; i++) {
        const string = [];
        for (let j = 0; j <= 24; j++) {
            let openNote = noteExtracter(_tuning[i]);
            let openOctave = octaveExtracter(_tuning[i]);
            if (j == 0) {
                string.push(
                    {
                        "name": openNote,
                        "octave": openOctave,
                        "isChordTone": chord.indexOf(openNote),
                        "isScaleTone": scale.indexOf(openNote) >= 0,
                    }
                );
                continue;
            }

            const nextNote = noteIncrementer(openNote, j);
            if (nextNote == notesSharp.current[3]) {
                openOctave++;
            }
            string.push(
                {
                    "name": nextNote,
                    "octave": openOctave,
                    "isChordTone": chord.indexOf(nextNote),
                    "isScaleTone": scale.indexOf(nextNote) >= 0,

                }
            );

        }
        matrix.push(string);
    }





    const openNotesPlaceholder = [];
    const fretNotesPlaceholder = [];

    for (let i = 0; i < matrix.length; i++) {
        const perStringPlaceHolder = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (j == 0) {//use openNotePlaceHolder
                openNotesPlaceholder.push(generateNote(matrix[i][j], true));
                continue;
            }
            //Use perStringPlaceholder
            if (j == 1) {
                perStringPlaceHolder.push(generateNote(matrix[i][j], true));
                continue;
            }
            perStringPlaceHolder.push(generateNote(matrix[i][j]));
        }
        fretNotesPlaceholder.push(
            <div className="relative">
                <div className="flex flex-row before:absolute before:left-0 before:top-0 before:-z-0 before:border-opacity-60 before:block before:h-1/2 before:w-full before:border-b-2 before:border-black">{perStringPlaceHolder}</div>
            </div>
        );
    }

    return (
        <section className="flex flex-row justify-start">
            <div className="flex flex-col">
                {openNotesPlaceholder}
            </div>
            <div className="flex flex-col">
                {fretNotesPlaceholder}
            </div>
        </section>
    );

}