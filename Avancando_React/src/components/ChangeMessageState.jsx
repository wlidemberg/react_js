const ChangeMessageState = ({handleMessage}) => {
    const messages = ['Oi', 'Olá', 'Oi, tudo bem!'];

  return (
    <div>
        <button className="btn" onClick={() => handleMessage(messages[0])}>1</button>
        <button className="btn" onClick={()=> handleMessage(messages[1])}>2</button>
        <button className="btn" onClick={()=> handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState