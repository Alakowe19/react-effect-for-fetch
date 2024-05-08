import ArtListItem from "./ArtListItem"
import PublicationHistoryList from "./PublicationHistoryList"

const ArtList = () => {
return (

    <div className="scroll-container">

        <ul className="art-list">

            <li>

            < ArtListItem 
            imageSrc = 'https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg'
            name = "Paris Street;  Rainy Day"
            artist = "Artist: Gustave Caillebrotte"
            />

            < PublicationHistoryList />
            
            
               
    
            
            </li>

        </ul>

    </div>

)

}

export default ArtList