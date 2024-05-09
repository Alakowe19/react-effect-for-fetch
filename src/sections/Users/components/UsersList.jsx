import { useState, useEffect } from 'react'
import UserListItem from "./UsersListItem"

const UserLists = () => {
    const [users, setUsers] = useState([]); // State for storing users data, an empty array here anyways 

    // Simulating fetching of user data from an API, however I am not using API
    useEffect(() => {
        // Fetch user data from an API endpoint
        // I tried to use my useEffect here
        const timer = setTimeout(() => {
            const fetchedUsers = [
                {
                    name: 'Mr Ritty Ryan',
                    imageSrc: 'https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    email: 'rittyblah@example.com'
                },
                {
                    name: 'Mr George Nathan',
                    imageSrc: 'https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    email: 'nathangeorge@example.com'
                },
                {
                    name: 'Mr Lewis Adeola',
                    imageSrc: 'https://images.pexels.com/photos/3026283/pexels-photo-3026283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    email: 'skjdksjdksjd@example.com'
                }
            ]
            setUsers(fetchedUsers) // Update users state with fetched data
        }, 3000) // Loading delayed for 3 seconds. UseEffects works 

        // Cleanup function to clear the timeout if the component unmounts before the delay completes
        return () => clearTimeout(timer)
    }, []) // The empty array here ensures useEffect runs only once after the component mounts

    return (
        <div className="scroll-container">
            <ul className="users-list">
                {users.map((user, index) => (
                    <UserListItem
                        key={index}
                        name={user.name}
                        imageSrc={user.imageSrc}
                        email={user.email}
                    />
                ))}
            </ul>
        </div>
    )
}

export default UserLists