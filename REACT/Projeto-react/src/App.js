import React, { useState, useEffect } from "react";

const App = () => {
    const [usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(["Pablo", "Elias", "Levi"]);
    
    const handleAddUser = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario("");
    };
    useEffect(()=>{
        setCount(usuarios.length);
    }, [usuarios]);
    
    return (
        <div className="App">
            <h1>Hello DIO!</h1>
            <h2>Total: {count}</h2>
            <div>
                <input
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                />
                <button onClick={handleAddUser}>Adicionar</button>
            </div>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
};

export default App;