import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';

function Changecolor(){
    let [color,setcolor] = useState("blue")
    return(<>
        <h1>My Favourite color is {color}</h1>
        <button onClick={() => setcolor("green")}>Green</button>
        <button onClick={() => setcolor("red")}>Red</button>
        <button onClick={() => setcolor("blue")}>Blue</button>
        <button onClick={() => setcolor("violet")}>violet</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Changecolor />
)