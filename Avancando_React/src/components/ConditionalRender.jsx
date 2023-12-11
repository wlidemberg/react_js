import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name] = useState('Wlidemberg');
  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x && <p>Se X for true, sim!</p>}
        {!x && <p>Agora X é falso!</p>}
        <h3>If ternário</h3>
        {name === 'Wlidemberg' ? (
            <div className='sucess'>
                <p>O nome é <em>{name}</em>!</p>
            </div>
        ) : (
            <div className='danger'>
                <p>O nome não é Wlidemberg e sim <em>{name}</em>!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender

