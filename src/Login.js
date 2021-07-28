import React from 'react'

export default function Login(props) {
    return (
        <>
            <div className="card">
                <h1>Write your secrets</h1>
                <label class="userName" >User name:</label>
                <input class="uNameInput" type="text" required></input>
                <label class="password">Password:</label>
                <input class="passInput" type="password" required></input>
                <button class="login" onClick={() => {
                    const users = 
                    [{ userName: 'barbie', password: '123' },
                    { userName: 'sameer', password: '456' },
                    { userName: 'jojo', password: '789' }];

                    

                    // if (users.map(user => user.userName).includes(userName) &&
                    //  users.map(user => user.password)[users.map(user => user.userName).indexOf(userName)] === password) {
                    //     props.setLoggedIn(true)
                    // }

                    props.setLoggedIn(true)
                    
                }}>Log in</button>
                <div class="redirect">
                    <a class="changePass" href="" >Forget password?</a>
                    <a class="register" href="" >Register</a>
                </div>
            </div>
        </>
    )
}
