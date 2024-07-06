import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';//hooks
import './index.css';

function Changecolor(){
    let [color,setColor] = useState("olive")
    return(
        <div className='w-full h-screen flex flex-col items-center justify-center duration-200' style={{ backgroundColor: color }}>
            <h1 className='mb-4 text-2xl'>My Favourite color is {color}</h1>
            <div className='space-x-4'>
                <button className='px-4 py-2 bg-green-500 text-white rounded' onClick={() => setColor("green")}>Green</button>
                <button className='px-4 py-2 bg-red-500 text-white rounded' onClick={() => setColor("red")}>Red</button>
                <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setColor("blue")}>Blue</button>
                <button className='px-4 py-2 bg-yellow-500 text-white rounded' onClick={() => setColor("yellow")}>Yellow</button>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Changecolor />
)