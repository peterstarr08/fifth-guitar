import { useState } from "react";

function CustomButton({ children, ID, isSelected, clickHandler }) {
    if (isSelected) {
        return (<div className=" w-fit h-fit  bg-gradient-45 from-blue-700 to-pink-600">
            <div id={ID} onClick={clickHandler} className="  pb-1 bg-[#f9f9f9] hover:bg-gray-100 px-6 py-2  mb-[0.125rem]">
                <div className=" text-black  bg-clip-text text-transparent bg-gradient-45 from-blue-700 to-pink-600 hover:cursor-pointer pointer-events-none font-medium text-sm">{children}</div>
            </div>
        </div>);
    }
    return (<div className=" w-fit h-fit  bg-black bg-opacity-30">
        <div id={ID} onClick={clickHandler} className=" pb-1 bg-[#f9f9f9]  hover:bg-gray-200 px-6 py-2 mb-[0.125rem]">
            <div className=" text-black  text-opacity-30 hover:cursor-pointer pointer-events-none font-medium text-sm">{children}</div>
        </div>
    </div>);
}

export default function CustomRadioButton({ data, defaultValueID = -1, stateSetter = null, keyPrefix = "0" }) {
    const [currentState, setCurrentState] = useState(defaultValueID);
    function handleClick(e) {
        let val = e.target.id;
        if (val == currentState) {
            val = -1;
        }
        if (stateSetter != null) {
            stateSetter(val);
        }
        setCurrentState(val);
    }
    return (
        <>
            <div className="flex flex-row gap-2 justify-start left-0 top-0">
                {
                    data.map((value) => <CustomButton key={keyPrefix + value.id} ID={value.id} clickHandler={handleClick} isSelected={value.id == currentState}>{value.value}</CustomButton>)
                }
            </div>
        </>
    );
}