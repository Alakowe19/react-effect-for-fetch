const PublicationHistoryList = ({name, list, addImage}) => { // I passed list as props here, but i figired, I cant render it twice at the Artlist item, I have to just write copy and paste the html code and wrap it inside <> ask Lewis 

    return (
        <>
        <h4> {name} </h4>
        <ul>
           <li>Catalogue de la 3e exposition de peinture, exh. cat. (E. Capiomont et V. Renault, 1877), p. 3, cat. 1.</li>
          <li>Léon Mancino, “La descente de la courtille,” L’art 9 (Apr. 1877), p. 70.</li>
          <li>Anonymous [possibly Gaston Vassy], “La journée à Paris: L’exposition des impressionnalistes,” L’événement, Apr. 6, 1877, p. 2.</li>
          <li> Learning react </li>
        </ul>

    
        </>
    /*
    I figured this is not working, and I cant wrap it inside the jsx <>.It doesnt work too. I have issues adding another image
    <img src= {addImage} 

    />
        */
    )
}

export default PublicationHistoryList
