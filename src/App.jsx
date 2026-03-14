import Counter from './Counter' ;
import Batsman from './Batsman';
import './App.css'

function App() {
 
function handClick(){
  alert("I am clicked")
}

const handClick2 = () => {
  alert("This is Arrow function clicked")
}

const handleAdd5 = (num) =>{
  const newNum = num + 5;
  alert(newNum)
}

  return (
    <>
    <br />
    <Batsman></Batsman><br />

    <Counter> </Counter>



    <div className="container">
    <h2>Learn React JS</h2>
    <button onClick={handClick}>Click Me</button> <br />
    <button onClick={function click2(){
      alert("Clicked")
    }}>Show More</button>
    <br />
    <button onClick={handClick2}>clicked 2</button> 
    <br />

    <button onClick={() => handleAdd5(15) }>Click Add 5</button>
  </div>

    </>
  )
}

export default App
