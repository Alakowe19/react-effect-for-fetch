
const UserListItem = ({name, imageSrc, email}) => {

    return (
        
         <li >
            <img src={imageSrc}
            height={100}
            width={150} />
            <h3> {name}</h3>
            <p>Email: {email}</p>
        </li> 
    )
}

export default UserListItem

console.log(UserListItem)