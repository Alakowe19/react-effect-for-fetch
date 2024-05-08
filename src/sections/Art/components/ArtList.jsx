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

            < PublicationHistoryList 
            list = 'bla bla' //why cant I render this twice. I figured it only renders the last props
            //list = 'bla bla'
            //list = 'dwljwljdlj'
            />
            
            </li>

            
            

        </ul>

    </div>

)

}

export default ArtList