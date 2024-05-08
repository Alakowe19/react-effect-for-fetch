
const UserListItem = ({name, imageSrc, email}) => {

    return ( //Also ask Lewis that can i put ul here if i wish? instead of putting it in the UserList
        <li> 
            <img src={imageSrc} 
            alt="image gotten from pexels.com"
            height={100}
            width={150} />
            <h3> {name}</h3>
            <p>Email: {email}</p>
        </li> //Ask Lewis why the background color is not working on the li and how i can split the users li colors differently 
    )
}

export default UserListItem

console.log(UserListItem)