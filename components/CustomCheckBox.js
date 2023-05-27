import { useState } from "react";

function CustomButton({ children, ID, isSelected, clickHandler }) {
    if (isSelected) {
        return (<div className="bg-gradient-45  from-blue-700 to-rose-500">
            <div id={ID} onClick={clickHandler} className="whitespace-nowrap text-white text-sm hover:bg-gray-100 bg-white font-medium mb-[0.125rem] py-2 px-5 z-10  hover:cursor-pointer"><div className="text-transparent bg-clip-text bg-gradient-45 from-blue-700 to-rose-600 pointer-events-none">{children}</div></div>
        </div>);
    }
    return ((<div className="bg-black bg-opacity-20">
        <div id={ID} onClick={clickHandler} className="whitespace-nowrap text-black text-sm text-opacity-20 hover:bg-gray-100 bg-white font-medium mb-[0.125rem] py-2 px-5  hover:cursor-pointer">{children}</div>
    </div>))
}

export default function CustomCheckBox({ data, stateSetter = null, keyPrefix = "0" }) {

    function handleClick(e) {

        stateSetter(e.target.id);
    }
    return (
        <>
            <div className="flex gap-2 flex-row  justify-start left-0 top-0 text-center">
                {
                    data.map((value) => <CustomButton key={keyPrefix + value.id} ID={value.id} clickHandler={handleClick} isSelected={value.toShow}>{value.value}</CustomButton>)
                }
            </div>
        </>
    );
}