import React from 'react';
import { PortfolioCard } from '../components/PortfolioCard';

const data = [
    {
        name: '1st Portfolio Draft',
        image: 'https://thumbs.gfycat.com/ExemplaryIdioticEnglishpointer-size_restricted.gif',
        link: 'https://koalias.github.io/PortfolioDraft/',
        repo:'https://github.com/koalias/PortfolioDraft'
    },
    {
        name: 'API Project 1',
        image: 'https://thumbs.gfycat.com/HandyGrayGardensnake-size_restricted.gif',
        link: 'https://jess20005.github.io/API_Project/',
        repo:'https://github.com/koalias/API_Project'
    },
    {
        name: 'Weather Dashboard',
        image: 'https://thumbs.gfycat.com/AccomplishedSafeAmurratsnake-size_restricted.gif',
        link: 'https://koalias.github.io/weatherForecast/',
        repo:'https://github.com/koalias/weatherForecast'
    },
    {
        name: 'Project 2: Golfers+ App',
        image: 'https://thumbs.gfycat.com/AnchoredMiserlyGlassfrog-size_restricted.gif',
        link: 'https://golfersplus.herokuapp.com/login',
        repo:'https://github.com/koalias/Golf-Assistant-App',
    },
    {
        name: 'Project 3: Build A Page',
        image: 'https://thumbs.gfycat.com/PoshLividHypacrosaurus-size_restricted.gif',
        link: 'https://buildapage.herokuapp.com/',
        repo:'https://github.com/koalias/Page-Builder'  
    },
    {
        name: 'Password Generator',
        image: 'https://thumbs.gfycat.com/AllCheeryKob-size_restricted.gif',
        link: 'https://koalias.github.io/passwordGenerator/',
        repo:'https://github.com/koalias/passwordGenerator'   
    }
]

export const PortfolioPage = () => {
    console.log(data)
    return (
        <div className="grid grid-cols-3 grid-rows-2 place-items-center">
            {
                    data.map((item, index)=> {
                        console.log(item)
                        return (
                            <div className="pb-2">
                                <PortfolioCard 
                                    key={index}
                                    name={item.name}
                                    image={item.image}
                                    link={item.link}
                                    repo={item.repo}
                                />
                            </div>
                        )
                    })
            }
            
        </div>
    )
}