import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setUser(data))
    },[]);

    //  update user

    const handleNamechange = e =>{
        const updateName = e.target.value;
        const updateUser = {name:updateName, email:user.email}
        setUser(updateUser)

    }
    const handleEmailChange = e =>{
        const updatedEmail = e.target.value;
        const updateUser = {name:user.name, email:updatedEmail}
        setUser(updateUser);
    }

        const handleUpdateUser = e =>{
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount > 0){
                    alert("updated Succesfully")
                    setUser({})
                }
            })
            e.preventDefault()
        }

    return (
        <div>
            <p>{id}</p>
            <p>{user.name} {user.email}</p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNamechange}  value={user.name ||""}/>
                <input type="email" onChange={handleEmailChange} value={user.email ||""} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;