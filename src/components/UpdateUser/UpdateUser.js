import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setUser(data))
    },[])
    return (
        <div>
            <h2>This is {id} User</h2>
            <p>I found this user right now:  <small>{user.name}</small></p>
        </div>
    );
};

export default UpdateUser;