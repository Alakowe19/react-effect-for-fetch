
import UserListItem from "./UsersListItem" //

const UserLists = () => {
    return ( //the scroll container is notworking
        <div className="scroll-container"> 


    <ul className="users-list">
            <UserListItem
            
            imageSrc='https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            name='Mr Ritty Ryan'
            email='rittyblah@example.com'
            />

            <UserListItem 
            name='Mr George Nathan'
            imageSrc='https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            email='nathangeorge@example.com'
            />

            <UserListItem
            name='Mr Lewis Adeola'
            imageSrc='https://images.pexels.com/photos/3026283/pexels-photo-3026283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            email='skjdksjdksjd@example.com'
            />
        </ul>

        </div>
       
    )
}

export default UserLists 