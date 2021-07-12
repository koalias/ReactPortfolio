import React from 'react'

export const PortfolioCard = ({name, image, link, repo}) => {
    return (
    <div className="">
            <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
                <img className="w-full" src={image} alt="1stDraft"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl">{name}</div>
                            <p className="text-gray-700 text-base">
                                <a href={link}>{link}</a>
                                <div>
                                <a href={repo}>{repo}</a>
                                </div>
                            </p>
                         </div>
                    </div>
            </div>

    )
}