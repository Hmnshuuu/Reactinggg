import React, { useState } from 'react';
// import Card from "./Components/Card";

function App() {
  const [val, setVal] = useState({ name: "harsh", isBanned: false });
  return (
    <div className='p-4'>
      <h1>name: {val.name}</h1>
      <h2>banned : {val.isBanned.toString()}</h2>
      <button onClick={() => setVal({ ...val, isBanned: !val.isBanned })} className={`px-3 py-1 mt-2 rounded-full text-white text-xs ${val.isBanned ? "bg-blue-500" : "bg-red-500"}`}>BAN KRO</button>
    </div>
  )
}

export default App;