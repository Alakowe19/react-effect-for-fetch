import { useState, useEffect } from "react"
import ArtListItem from "./ArtListItem"
import PublicationHistoryList from "./PublicationHistoryList"

const ArtList = () => {
    const [arts, setArts] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchArt = [{ //Users declared. I could fetch Api in this level. I think. Give it a try later
                imageSrc: 'https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg',
                name: 'Abiodun, Oluwagbemi',
                artist: 'Artist: Gustave Caillebrotte',
            }]
            setArts(fetchArt)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="scroll-container">
            <ul className="art-list">
                <li>
                    {arts.map((art, index) => (
                        <ArtListItem 
                            key={index}
                            name={art.name}
                            imageSrc={art.imageSrc}
                            artist={art.artist}
                        />
                    ))}
                    <PublicationHistoryList />
                </li>
            </ul>
        </div>
    )
}

export default ArtList
