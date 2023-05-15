import RootNote from "./Notes/RootNote";
import EmptyNote from "./Notes/EmptyNote";
import { useRef } from "react";

function generateNote(note, isOpenFret = false, showEmpty=false) {
    if(showEmpty){
        return <EmptyNote isOpenFret={isOpenFret}></EmptyNote>
    }
    if (note["isScaleTone"]) {
        return <RootNote isOpenFret={isOpenFret}>{note.name}</RootNote>
    }
    return <EmptyNote isOpenFret={isOpenFret}></EmptyNote>
}

/*
    Returns functional component for entire fretborad view(scroll  not included)

    Params:
    keyToShow:String => key of the scale
    scaleToShow:String => scale of the scale
    chordToShow: String(default is null): If you want to show a chord           !!!Important: Include key for scale
    chordNotesIncluded: booleanArray(default true) => If you want to showb specific notes of chords to sbe shown. In order: Root, Diatonic, Perfect fifth, Extension 1, Extension
    range: intArray(default whole scale) => The range of fretboard notes to be shown. In order, Highest String, Lowest String, Lowest Fret, Highest Fret

*/
export default function Fretboard({ keyToShow, scaleToShow, chordToShow = null, chordNotesIncluded = [true, true, true, true, true], range=[0,5,0,25]}) {


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

     //Data storing a object containing 2x2 matrix of fretbaord, where each cell is a object containing
     // 'name' of the note
     //'octave' contains octave of the note
     //'chordToneIndex' containes index of chord tone from generated chord array, contained -1 if it's not a chord tone
    const matrix = [];


    //Gets next note by adding a number
    function noteIncrementer(notes, adder) {
        return notesSharp.current[(notesSharp.current.indexOf(notes) + adder) % 12];
    }

    //Extract out octave and return the note
    function noteExtracter(note) {
        return note.slice(0, note.length - 1); //obvisously octave is the single digit number at last, so return substring of whole note. Eg: B#4 sends B#
    }

    //Return octave of the note
    function octaveExtracter(note) {
        return note.slice(note.length - 1); //obviously octave is the single digit number at last, so returns the last substring. Eg: B#4 returns 4.
    }


    //gets scale formula array for given name available in scales array
    const _scalesFormula = scales.current[scaleToShow];
 
    //gets tuning array for givem tunnig, contains octave too.
    const _tuning = tunings.current['eStandard'];
    var _chordsFormula = null; //null because chordToShow could be a null value
    const chord = [];
    if (chordToShow != null) {//checks if it's not null
        _chordsFormula = chords.current[chordToShow];
        for (let i = 0; i < _chordsFormula.length; i++){//loops over chord formula
            if (chordNotesIncluded[i]) {    //only include if the chordNotesIncluded array contains true for that particular note.
                chord.push(noteIncrementer(key, _chordsFormula[i]));  //increment the key by chord formula and push it into chord notes array.
            }

        }
    }

    //contains notes of scale
    const scale = [];
    for (let i = 0; i < _scalesFormula.length; i++) { //iterate over scale
        scale.push(noteIncrementer(keyToShow, _scalesFormula[i]));//increment key according to formula and push it into the array.
    };

    //making fretboard matrix 
    for (let i = 0; i < 6; i++) {   // iterate over strings
        const string = []; //contains each fret of a particular string
        for (let j = 0; j <= 24; j++) {// iterate over frets of each string
            let openNote = noteExtracter(_tuning[i]);//extract open note from tuning array to icrement it.
            let openOctave = octaveExtracter(_tuning[i]);//extracct open note array from tuning array to increment it.
            if (j == 0) { //if it's open string
                string.push(
                    {   //self explanatory
                        "name": openNote,
                        "octave": openOctave,
                        "chordToneIndex": chord.indexOf(openNote),
                        "isScaleTone": scale.indexOf(openNote) >= 0,
                    }
                );
                continue; //done for open string
            }

            const nextNote = noteIncrementer(openNote, j); //increments next note for each fret.
            if (nextNote == notesSharp.current[3]) { //increments octave if the nextNote lands on 'C'
                openOctave++;
            }
            string.push(
                {   //self exaplanatory
                    "name": nextNote,
                    "octave": openOctave,
                    "chordToneIndex": chord.indexOf(nextNote),
                    "isScaleTone": scale.indexOf(nextNote) >= 0,

                }
            );

        }
        matrix.push(string);//pushses the string to matrix of fretboard.
    }



    //Refer below jsx to understand the placments.
    const openNotesPlaceholder = [];    //contains array of open div notes
    const fretNotesPlaceholder = [];    //contains array of div strings

    for (let i = 0; i < matrix.length; i++) { //iterate over highest to lowest string
        const perStringPlaceHolder = []; //div holder for each frets
        for (let j = 0; j < matrix[i].length; j++) {
            if (j == 0) {//use openNotePlaceHolder
                openNotesPlaceholder.push(generateNote(matrix[i][j], true, ((i<range[0]||i>range[1]||j<range[2]||j>range[3])?true:false)));
                continue;
            }
            //Use perStringPlaceholder
            if (j == 1) {
                perStringPlaceHolder.push(generateNote(matrix[i][j], true, ((i<range[0]||i>range[1]||j<range[2]||j>range[3])?true:false)));
                continue;
            }
            perStringPlaceHolder.push(generateNote(matrix[i][j], false,((i<range[0]||i>range[1]||j<range[2]||j>range[3])?true:false)));
        }
        fretNotesPlaceholder.push( //div holder for each string
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