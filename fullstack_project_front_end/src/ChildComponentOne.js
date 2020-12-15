import React, {Component, useState, useEffect} from "react";
import ChildComponentTwo from "./ChildComponentTwo";

const ChildComponentOne = () => {
    const [users, setUsers] = useState([]);

    function getUsers() {
        fetch("http://localhost:5000/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }


    return (
        <div>
            <ChildComponentTwo/>
            <button onClick={getUsers}>
                Get Users
            </button>
            {users ? users.map((user, index) =>
                <div key={index}>{user.name} : {user.email} : {user.username}</div>) : ""}
        </div>
    )

}

export default ChildComponentOne;