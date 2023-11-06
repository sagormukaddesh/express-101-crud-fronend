

const PostUser = () => {

    const handlePostUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const myData = {
            name,
            email,
            password
        };
        console.log(myData);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert("data posted successfullyy")
            }
        })

    }
    return (
        <div className="text-center font-bold w-1/3 mx-auto justify-center content-center ">
            <h1 className="text-4xl mb-6">Usersss</h1>

            <form onSubmit={handlePostUser}
            ><input className="border-2 mb-4 w-full py-3 px-3" type="text" name="name" placeholder="Your name" /><br />
                <input className="border-2 mb-4 w-full py-3 px-3" type="email" name="email" placeholder="Email" id="" /><br />
                <input className="border-2 mb-4 w-full py-3 px-3" type="password" name="password" id="" placeholder="Password" /> <br />
                <button className="btn btn-secondary w-full" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostUser;