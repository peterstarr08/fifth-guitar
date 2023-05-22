import { useState } from "react";

function CustomButton({children,ID,isSelected, clickHandler}){
    if(isSelected){
        return (<div id={ID} onClick={clickHandler} className="text-white bg-sky-700 py-2 px-4 hover:cursor-pointer">{children}</div>);
    }
    return (<div id={ID} onClick={clickHandler} className="bg-sky-100 py-2 px-4 hover:cursor-pointer">{children}</div>)
}

export default function CustomRadioButton({ data, defaultValueID = -1, stateSetter = null }) {
    const [currentState, setCurrentState] = useState(defaultValueID);
    function handleClick(e){
        let val = e.target.id;
        if(val==currentState){
            val = -1;
        }
        if(stateSetter!=null){
            stateSetter(val);
        }
        setCurrentState(val);
    }
    return (
        <>
            <div className="flex flex-row gap-2 justify-start left-0 top-0">
                {
                    data.map((value)=><CustomButton key={value.id} ID={value.id} clickHandler={handleClick} isSelected={value.id==currentState}>{value.value}</CustomButton>)
                }
            </div>
        </>
    );
}