export default function TextInput({children, defaultValue, handleChange}){

    return(
        <div className="flex flex-col gap-0 justify-start w-fit">
            <input type="text" onChange={handleChange} className="text-lg w-20" defaultValue={defaultValue}>
            </input>
            <label className="text-xs text-black opacity-40">
                {children}
            </label>
        </div>
    );
}