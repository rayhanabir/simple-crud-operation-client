import React, {useRef} from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleAdUser= e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name, email}

        fetch('http://localhost:5000/users', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("user added succesfully")
                e.target.reset()
            }
        })

    }
    return (
        <div>
            <h3>Please Add an User</h3>
            <form onSubmit={handleAdUser}>
                <input type="text" ref={nameRef} placeholder="Name"/>
                <input type="email" ref={emailRef} name="" id="" placeholder="Email"/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;