import Fretboard from "@/components/Fretboard";
import Controller from "@/components/Improviser/Controller";
import Timeline from "@/components/Improviser/Timeline";
import Player from "@/components/Player";

import { useState } from "react";
export default function Improviser() {

    const data = [["", "Am", "", "G"], ["FM7", "Fm7", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "Am", "", "G"], ["FM7", "Fm7", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "Am", "", "G"],
    ["FM7", "Fm7", "", ""], ["", "", "", ""], ["", "", "", ""], ["FM7", "Fm7", "", ""], ["", "", "", ""], ["", "", "", ""], ["FM7", "Fm7", "", ""], ["", "", "", ""], ["", "", "", ""]];// temporary holder for data
    const [currentTime, setCurrentTime] = useState(0); //time keeper for player
    const [rangePicker, setRangePicker] = useState([1,3,3,7]); // range picker for strings and frets substrings to show

    function handleScroll(event) {

    }

    return (
        <>  
            <Controller range={rangePicker} handlePicker={{setRangePicker}}></Controller>
            <main>
                
                <section className='grid grid-cols-12'>
                    <div className='col-span-4'>
                        <Player timeHandler={setCurrentTime}></Player>
                    </div>
                    <div className='col-span-8 overflow-auto no-scrollbar ml-8'>
                        <section className="flex flex-col gap-4">
                            <Fretboard keyToShow={"A"} scaleToShow={"minor"}></Fretboard>
                        </section>
                    </div>
                </section>
                <div className="overflow-auto scroll-smooth no-scrollbar" onScroll={handleScroll}>
                    <Timeline data={data}></Timeline>
                </div>
                <div className="overflow-auto my-4">
                    <section className="flex flex-col gap-4 pb-72">
                        <Fretboard keyToShow={"A"} scaleToShow={"minor"} range={rangePicker}></Fretboard>
                        <Fretboard keyToShow={"E"} scaleToShow={"major"} range={rangePicker}></Fretboard>
                    </section>
                </div>
            </main>
        </>
    );
}