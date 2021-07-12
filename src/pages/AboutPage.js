import React from 'react'

export const AboutPage = () => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-2 px-4">
            <img className="aboutImage" src={"koalia.jpeg"}/>
            </div>

            <div className="col-span-3 px-4 place-items-center text-center mt-12 font-black">
                <p className="text-lg uppercase">My name is Koalia Sanders.</p>
                    <p className="text-md"> Hello! I’m from Kinston, North Carolina. I am currently a senior studying Consumer, Apparel, and Retail Studies at The University of North Carolina at Greensboro. 
                        Simultaneously, I am also a part-time student in the Coding Bootcamp Program provided by The University of North Carolina at Charlotte. 
                        I have over 5 years of work experience in luxury retail. I am on track to graduate in Summer 2022 at UNCG. My end goal is to be able to 
                        become an asset to a company by cultivating an experience for consumers by using my programming skills, 
                        extensive consumer research, and trend forecasting abilities.
                    </p>
                    <p className="text-md">To date, I am working diligently to increase my proficiency to become a full stack developer.
                        You are more than welcome to follow along with my progress as I continue to learn in this awesomely 
                        intense program.
                    </p>
            </div>
        </div>
    )
}