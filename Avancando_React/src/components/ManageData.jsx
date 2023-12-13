import { useState } from "react";

function ManageData() {
    
    const someData = 10;
    const [number, setNumber] = useState(20);

  return (
    <div>
        <p>Valor: {someData}</p>
        <button className="btn" onClick={() => {someData = 15}}>Mudar valor</button>
        <p>Valor: {number}</p>
        <button className="btn" onClick={() => setNumber(25)}>Mudar valor useState</button>
    </div>
  )
}

export default ManageData



