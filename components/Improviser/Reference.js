import { useRef, useState } from "react";
import CustomRadioButton from "../CustomRadioButton";
import Fretboard from "../Fretboard";
import { CHORD_LIBRARY } from "@/data/constants";
export default function Reference({keyToShow, scaleToShow, range, metaData}){

    const [currentChord, setCurrentChord] = useState(null);


    function handleStateSetter(val){
        if(val<0){
            setCurrentChord(null);
            return;
        }
        setCurrentChord(metaData[3][val]);
    }

    const data = useRef(
      metaData[3].map(
        (val, index)=>{
            return ({
                id: index,
                value:val.slice(0,1)+CHORD_LIBRARY[val.slice(1)],
            });
        }
      )  
    );

    return(
        <>
            <Fretboard keyToShow={"A"} scaleToShow={"minor"} chordToShow={currentChord} range={range}></Fretboard>
            <CustomRadioButton data={data.current} stateSetter={handleStateSetter}></CustomRadioButton>
        </>
    );
}