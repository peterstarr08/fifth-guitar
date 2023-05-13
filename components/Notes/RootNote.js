function generateNote(isOpenFret=false,children) {
    if (isOpenFret) {
        return (
            <div className="z-10 h-[34px] w-[72px] border-l-4 border-sky-600 py-1 flex justify-center">
                <div className="z-10 w-7 h-7 bg-orange-500 text-white  rounded-full  text-center">{children}</div>
            </div>
        );
    }

    return (
        <div className="z-10 h-[34px] w-[72px] border-l-2 border-opacity-50 border-zinc-800 py-1 flex justify-center">
            <div className="z-10 w-7 h-7 bg-orange-500 text-white  rounded-full text-center">{children}</div>
        </div>
    );
}


export default function RootNote({ children, isOpenFret = false }) {
    return (generateNote(isOpenFret,children));
}