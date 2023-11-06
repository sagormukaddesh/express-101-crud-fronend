import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const DisplayUsers = () => {
    const users = useLoaderData();
    const [updatedUser, setUpdatedUser] = useState(users);

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted Successfully')
                }
                const filteredData = updatedUser.filter(item => item._id !== _id);
                setUpdatedUser(filteredData);
            })
    }

    return (
        <div>
            <h1 className="text-center my-8 font-bold text-4xl">Users: {updatedUser.length} </h1>
            <div className=" text-center font-semibold">
                {
                    updatedUser?.map(user => <div key={user._id}>
                        <li>{user.name} {user.email} {user.password}
                        </li>
                        <button onClick={() => handleDelete(user._id)}
                            className=" btn btn-secondary mx-8" type="submit ">delete</button>
                        <Link to={`/users/${user._id}`}>
                            <button className=" btn btn-secondary" type="submit ">Update</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DisplayUsers;