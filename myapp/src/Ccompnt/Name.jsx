import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        setName('WELCOME')
    }, [])
    const handleButtonClick = (framework) => {
        setName(framework)
    }


    return (
        <div>
            <h1>Click a Button</h1>
            <Button onClick={() => handleButtonClick('react')}>react</Button>
            <Button onClick={() => handleButtonClick('java')}>java</Button>
            <Button onClick={() => handleButtonClick('mern')}>mern</Button>
            {name && <h2>{name}</h2>}
        </div>
    );
}
export default Name;