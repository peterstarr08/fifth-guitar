function generateNote(chord, highlighted, accented){
    if(highlighted){
        if(accented){
            return <div className="border-l-4 border-l-sky-600 bg-slate-200 w-20 h-8 pl-1">{chord}</div>
        }

        return <div className="border-l-2 border-b-neutral-400 bg-slate-200 w-20 h-8 pl-1">{chord}</div>
    }

    if(accented){
        return <div className="border-l-4 border-l-sky-600  w-20 h-8 pl-1">{chord}</div>
    }

    return <div className="border-l-2 border-b-neutral-400  w-20 h-8 pl-1">{chord}</div>

}

export default function Beat({chord, highlighted=false, accented}){
    //'chord': string value to show
    // 'highlighted': If this beat is highlighted - true/false
    // 'accented': If the beat is accented
    return(generateNote(chord, highlighted, accented));

}