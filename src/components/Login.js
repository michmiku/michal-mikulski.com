import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthenticatedUser } from "../contexts/AuthenticatedUser.js"
import Settings from "../Settings.json"

const Login = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const { authUser, setAuthUser } = useContext(AuthenticatedUser)
    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            username: user.username,
            password: user.password
        }
        axios.post(Settings.server + 'users/login', userData)
            .then(res => {
                if (res.data === '') {
                    alert("Wrong username or password!")
                }
                else {
                    setAuthUser({ username: user.username, admin: res.data[0].admin })
                    localStorage.setItem('user', user.username)
                    localStorage.setItem('admin', res.data[0].admin)
                }
            })
            .catch(err => console.log(err));
        setUser({ username: '', password: '' })
    }
    return (
        authUser.username === "" ?
            <div align="center" className="mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            minLength="3"
                            required
                            className="form-control w-25"
                            value={user.username}
                            onChange={(e) => { setUser({ username: e.target.value, password: user.password }) }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                            minLength="6"
                            required
                            className="form-control w-25"
                            value={user.password}
                            onChange={(e) => { setUser({ username: user.username, password: e.target.value }) }}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            :
            <div className="jumbotron bg-light">
                <h1 className="display-4">You are logged in!</h1>
                <p className="lead">You have successfully logged in to your account!</p>
                <hr className="my-4" />
                <p>If you want to start listening to music press the button below!</p>
                <Link className="btn btn-primary btn-lg" to="/music" role="button">Music library</Link>
            </div>
    )
}
export default Login