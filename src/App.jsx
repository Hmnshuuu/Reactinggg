import React,{useState} from 'react';
// import Card from "./Components/Card";

function App(){
  const [banned,setBanned] = useState(false);
  return(
    <div className='p-4'>
      <h1>{banned.toString()}</h1>
      <button onClick={()=>setBanned(!banned)} className='px-2 py-1 mt-2 rounded-full text-lg bg-blue-500'>BAN KRO</button>
    </div>
  )
}

export default App;