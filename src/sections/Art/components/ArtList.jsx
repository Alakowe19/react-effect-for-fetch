import ArtListItem from "./ArtListItem"
import PublicationHistoryList from "./PublicationHistoryList"

const ArtList = () => {
    const [arts, setArt] = useState([])

    useEffect( () => {
        const timer = setTimeout(() =>  {
            const FetchArt = [

                imgSrc: '',
                name: 'Abiodun, Oluwagbemi',
                artist: '',
            ]
            setArt(fetchArt)
        }, 1000)

        return () => clearTimeout (timer)
    }, [])


return (

    <div className="scroll-container">

        <ul className="art-list">

            <li>

                {arts.map((art, index) =>
                <ArtListItem 
                    key={index}
                    name={art.name}
                    imageSrc={art.imageSrc}
                    artist={art.artist}
                />
            )


                }

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