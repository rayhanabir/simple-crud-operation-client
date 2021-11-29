import React,{useState, useEffect} from 'react';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res =>res.json())
        .then(data=>setUsers(data))
    },[]);

    const handleDeleteUser=(id)=>{
        const procced = window.confirm("are you sure you want to delete?")
        if(procced){
            const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert("deleted successfully");
                const remainingUsers = users.filter(user =>user._id !==id)
                setUsers(remainingUsers);
            }

        })
        }

    }
    return (
        <div>
            <h2> Users available: {users.length}</h2>
            <ul>
                {
                    users.map(user =><li key={user._id}>{user.name} --{user.email}
                    <button onClick={()=>handleDeleteUser(user._id)}>X</button>
                    <button>Update</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;