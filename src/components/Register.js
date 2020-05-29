import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Settings from "../Settings.json"

const Register = () => {
    const [user, setUser] = useState({ username: '', password: '', success: false });
    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            username: user.username,
            password: user.password
        }
        axios.post(Settings.server + "users/add", userData)
            .then(res => setUser({ success: true }))
            .catch(err => {
                alert("Username is already taken!")
                setUser({ username: '', password: '', success: false })
            });
    }

    return (
        !user.success ?
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
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            :
            <div className="jumbotron bg-light">
                <h1 className="display-4">You are registered!</h1>
                <p className="lead">You have successfully created your account!</p>
                <hr className="my-4" />
                <p>To start browsing and listening music press the button below to log in to your account!</p>
                <Link to="/login" className="btn btn-primary btn-lg" href="#" role="button">Login</Link>
            </div>
    )
}
export default Register