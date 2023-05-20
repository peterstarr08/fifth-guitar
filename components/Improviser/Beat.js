function generateNote(id, chord, highlighted, accented, clickHandler){
    if(highlighted){
        if(accented){
            return <div id={id} className=" z-20 border-l-4 border-l-sky-600 bg-slate-200 w-20 h-8 pl-1 hover:bg-slate-300" onClick={clickHandler}>{chord}</div>
        }

        return <div id={id} className=" z-20 border-l-2 border-b-neutral-400 bg-slate-200 w-20 h-8 pl-1 hover:bg-slate-300" onClick={clickHandler}>{chord}</div>
    }

    if(accented){
        return <div id={id} className=" z-20 border-l-4 border-l-sky-600  w-20 h-8 pl-1 hover:bg-slate-300" onClick={clickHandler}>{chord}</div>
    }

    return <div id={id} className=" z-20 border-l-2 border-b-neutral-400  w-20 h-8 pl-1 hover:bg-slate-300" onClick={clickHandler}>{chord}</div>

}

export default function Beat({id, chord, highlighted=false, accented, clickHandler}){
    //'chord': string value to show
    // 'highlighted': If this beat is highlighted - true/false
    // 'accented': If the beat is accented
    return(generateNote("b"+id, chord, highlighted, accented, clickHandler));

}