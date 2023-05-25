import { useState } from "react";

function CustomButton({children,ID,isSelected, clickHandler}){
    if(isSelected){
        return (<div id={ID} onClick={clickHandler} className="text-white bg-sky-700 py-2 px-4 hover:cursor-pointer">{children}</div>);
    }
    return (<div id={ID} onClick={clickHandler} className="bg-sky-100 py-2 px-4 hover:cursor-pointer">{children}</div>)
}

export default function CustomCheckBox({ data, stateSetter = null , keyPrefix="0"}) {
   
    function handleClick(e){
      
        stateSetter(e.target.id);
    }
    return (
        <>
            <div className="flex flex-row gap-2 justify-start left-0 top-0">
                {
                    data.map((value)=><CustomButton key={keyPrefix+value.id} ID={value.id} clickHandler={handleClick} isSelected={value.toShow}>{value.value}</CustomButton>)
                }
            </div>
        </>
    );
}