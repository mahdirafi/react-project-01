import { useState } from "react"

export default function () {
    let [runs , setRuns]= useState(0) ; // if you not use initial value like useState(0) = undefine
    const [sixes, setSixes] = useState(0);
    const [fours , setFours] = useState(0);

    const handelSingle = () => {
        const updatedRuns = runs + 1;
        
        setRuns(updatedRuns);
    }
    const  handelFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1 ;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }
    const handelSix= () => {
        const updatedRuns = runs + 6;
        const updatedSix = sixes + 1 ;
        setSixes(updatedSix);
        setRuns(updatedRuns);
    }
    
    return (
        <div>
            <h1>Player: Bangla Batsman</h1>
            <p>Total Six: {sixes} || Total Four: {fours}</p>
            {
                runs >= 50 && <h6>You Get Half-Century: 50</h6>
            }
            <h3>Score: {runs} </h3>
            <button onClick={handelSingle}>Single</button> <br />
            <button onClick={handelFour}>Four</button><br />
            <button onClick={handelSix}>Six</button>
        </div>
    )
}