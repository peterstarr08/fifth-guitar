import Beat from "./Beat";

export default function Timeline({ data, position }) {
    //gets an 2d array in data, each array in array is a single bar and that bar has array of quarter notes,
    //  e.g. [[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4],[1/4,1/4,1/4,1/4]],
    //  'pos' is array of bar and measure
    const _data = [];
    for(let i = 0;i<data.length;i++){
        for(let j = 0;j<data[i].length;j++){
            _data.push(<Beat chord={data[i][j]} accented={j==0?true:false}></Beat>);
        }
    }


    return (
        <>
            Timeline
            <section className="w-fit h-fit flex flex-row justify-start">
                {_data}
            </section>
        </>
    );
}