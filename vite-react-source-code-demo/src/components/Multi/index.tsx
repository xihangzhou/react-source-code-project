import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <Btn/>
      <Muti/>
    </div>
  )
}

function Btn(){
  const [count, setCount] = useState(0)
  console.log('render');
  return (
    <button onClick={() => {
      // setTimeout(()=>{
        ReactDOM.flushSync(()=>{
          setCount((pre)=>pre+1);
        })
        setCount((pre)=>pre+1);
      // },1000)
      }}>
      count is {count}
    </button>
  )
}


function Muti(){
  const [list, setList] = useState([])
  return (
    <div>
      <button onClick={() => {
        // setTimeout(()=>{
          console.log('start');
          setList(new Array(1000).fill(1));
        // },1000)
        }}>
          add List
      </button>
      <div>{list.map((item,index)=><div key={index} className='ball'>{item}</div>)}</div>
    </div>
  )
}

export default App