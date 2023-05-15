export default function TextInput({children, defaultValue, range}){

    function handleChange(event){
      
    }

    return(
        <div className="flex flex-col gap-1 justify-start w-fit">
            <input type="text" onChange={handleChange} className="text-lg w-full" defaultValue={defaultValue}>
            </input>
            <label className="text-xs text-black opacity-40">
                {children}
            </label>
        </div>
    );
}