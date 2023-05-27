function generateNote(isOpenFret=false,children) {
    if (isOpenFret) {
        return (
            <div className="z-10 h-[34px] w-[72px] border-l-4 border-blue-700 py-1 flex justify-center">
                <div className="z-10 font-bold w-7 h-7  text-white   rounded-full">{}</div>
            </div>
        );
    }

    return (
        <div className="z-10 h-[34px] w-[72px] border-l-4 border-opacity-10 border-gray-800 py-1 flex justify-center">
            <div className="z-10 font-bold w-7 h-7  text-white  rounded-full">{}</div>
        </div>
    );
}


export default function EmptyNote({ children, isOpenFret = false }) {
    return (generateNote(isOpenFret,children));
}