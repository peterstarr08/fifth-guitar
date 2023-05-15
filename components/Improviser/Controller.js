import { useState } from "react";
import TextInput from "../TextInput";

export default function Controller({range ,handlePicker}){

    function handleRange(event){

    }

    return(
        <div className="fixed z-20 w-full h-fit py-6 bottom-0 left-0 border-t-4 border-sky-600  bg-white ">
            <div className="flex flex-row gap-1 ml-4">
            <TextInput defaultValue={range[0]-1}>From String</TextInput>
            <TextInput defaultValue={range[1]-1}>To String</TextInput>
            <TextInput defaultValue={range[2]-1}>From Fret</TextInput>
            <TextInput defaultValue={range[3]-1}>To Fret</TextInput>
            </div>
        </div>
    );
}