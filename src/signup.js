import React from 'react'

export default function SignUp(props) {
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function Click(e) {
        e.preventDefault();
        const data = { userName, email, password };
        console.log(data);
        fetch("HTTP://localhost:4000/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" },
        })
    }
    return (
        <>
            <div className="card">
                <h1>Sign up to Write your secrets</h1>
                <label className="userName" >User name:</label>
                <input className="uNameInput" type="text" value={userName} onChange={(event) => setUserName(event.target.value)} required></input>
                <label className="userName" >Email:</label>
                <input className="uNameInput" type="text" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
                <label className="password">Password:</label>
                <input className="passInput" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                <button className="Sign up" onClick={Click}
                >Sign up</button>

            </div>
        </>
    )
}



