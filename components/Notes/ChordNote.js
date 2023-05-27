function generateNote(isOpenFret=false,children) {
    if (isOpenFret) {
        return (
            <div className=" h-[34px] w-[72px] border-l-4 border-blue-700 py-1 flex justify-center">
                <div className="z-10 font-bold w-7 h-7 bg-green-600 text-white  rounded-full  text-center">{children}</div>
            </div>
        );
    }

    return (
        <div className=" h-[34px] w-[72px] border-l-4 border-opacity-10 border-black-800 py-1 flex justify-center">
            <div className="z-10 font-bold w-7 h-7 bg-green-600 text-white  rounded-full text-center">{children}</div>
        </div>
    );
}


export default function ChordNote({ children, isOpenFret = false }) {
    return (generateNote(isOpenFret,children));
}