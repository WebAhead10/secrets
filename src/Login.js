import React from 'react'

export default function Login(props) {
    const users = [
        { userName: 'barbie', password: '123' },
        { userName: 'sameer', password: '456' },
        { userName: 'jojo', password: '789' }
    ];

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <>
            <div className="card">
                <h1>Write your secrets</h1>
                <label className="userName" >User name:</label>
                <input className="uNameInput" type="text" value={userName} onChange={(event) => setUserName(event.target.value)} required></input>
                <label className="password">Password:</label>
                <input className="passInput" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                <button className="login" onClick={() => {
                    if(userName ==="" || password ==="")
                    {
                        window.alert("please enter a username or a password, try again");
                        setUserName("");
                        setPassword("");   
                    }
                    else if (users.map(user => user.userName).includes(userName) &&
                        users.map(user => user.password)[users.map(user => user.userName).indexOf(userName)] === password) {
                        props.setLoggedIn(true)
                    } else {
                        window.alert("Wrong username or password, try again");
                        setUserName("");
                        setPassword("");  
                    }
                }}>Log in</button>

            </div>
        </>
    )
}
