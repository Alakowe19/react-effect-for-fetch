const ArtListItem = ({imageSrc, name, artist }) => {

    return (

            <>
            <div className="frame">
            <img src = {imageSrc} 
            />
            </div>
            <h3> {name} </h3>
            <p> {artist}</p>
            
            </>
            
            
       
    )
}

export default ArtListItem