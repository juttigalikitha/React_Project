import React, { useState, useEffect } from "react";

function Apifetch() {
    const [users, setUsers] = useState([]); // To store the fetched data
    const [loading, setLoading] = useState(true); // it was Loading state
    const [error, setError] = useState(null); // this is Error state

    // Fetch the data from the API 
    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
             throw new Error(`HTTP error..! status: ${response.status}`);
            }
             return response.json();
            })
            .then((data) => {
                setUsers(data); // Set the fetched users in state
                setLoading(false); // Stop the loading indicator
            })
            .catch((err) => {
                setError(err.message); // for errors
                setLoading(false); 
            });
    }, []); // Empty array this runs only once

    // Render loading, error, or user data
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>User Details</h1>
            <table border="1" cellPadding= '10px' style={{ margin: "auto", borderCollapse: "collapse", width: "80%", }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.address.suite}, {user.address.street}, {user.address.city}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Apifetch;
