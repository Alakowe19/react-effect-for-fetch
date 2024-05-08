const PublicationHistoryList = ({ children, name, }) => { //did the second way to render my props here
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        {children}
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <PublicationHistoryList name="Publication History">
        <li>Catalogue de la 3e exposition de peinture, exh. cat. (E. Capiomont et V. Renault, 1877), p. 3, cat. 1.</li>
        <li>Léon Mancino, “La descente de la courtille,” L’art 9 (Apr. 1877), p. 70.</li>
        <li>Anonymous [possibly Gaston Vassy], “La journée à Paris: L’exposition des impressionnistes,” L’événement, Apr. 6, 1877, p. 2.</li>
        <li>Learning react</li>
        <br></br> <br></br>
        <img src="https://images.pexels.com/photos/16499261/pexels-photo-16499261/free-photo-of-boy-in-denim-jacket-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Image is from pexels.com"

        />
      </PublicationHistoryList>

    </div>
  )
}

export default App;
