import { Link, useLoaderData } from "react-router-dom";


const UpdateData = () => {
    const singleData = useLoaderData();
    console.log(singleData);

    const handleUpdate = e =>{
         e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const updateData = {
            name,
            email,
            password
        };
        console.log(updateData);

        fetch(`http://localhost:5000/users/${singleData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }

    return (
        <div className="text-center w-1/3 mx-auto justify-center">
            <h1 className="text-4xl">Updated Data:  </h1>

            <form onSubmit={handleUpdate}
            ><input className="border-2 mb-4 w-full py-3 px-3" type="text" defaultValue={singleData?.name} name="name" placeholder="Your name" /><br />
                <input className="border-2 mb-4 w-full py-3 px-3"  type="email" defaultValue={singleData?.email} name="email" placeholder="Email" id="" /><br />
                <input className="border-2 mb-4 w-full py-3 px-3" type="password" defaultValue={singleData?.password} name="password" id="" placeholder="Password" /> <br />
                <button className="btn btn-secondary w-full" type="submit">Update</button>
            </form>


            <Link to={'/users'}>
                <button className="btn btn-accent mt-12">Home</button>
            </Link>
        </div>
    );
};

export default UpdateData;