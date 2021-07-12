import React from 'react'

export const ContactPage = () => {
    return (
<div className="grid grid-cols-3 grid-rows-2 place-items-center text-5xl font-black mt-24"
style={{
    height: "100vh"
}}>
       <div className="col-start-2 row-span-1 place-items-center "> 
       <img src={"resume.png"} alt="resume" className="object-scale-down" style={{
    height: "75vh"
}}/>
       </div>

    <div className="col-span-3 row-span-2 pr-2 place-items-center hover:text-purple-800">
        <a href="koaliasanders@gmail.com" className="pr-3">Email</a>
        <a href="https://github.com/koalias" className="pr-3">Github</a>
        <a href="https://www.linkedin.com/in/koalia-sanders-7b9100ab/">LinkedIn</a>
        </div>
    </div>
    )
}