import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthenticatedUser } from "../contexts/AuthenticatedUser.js"
import Settings from "../Settings.json"
const Navbar = (props) => {
  const { authUser, setAuthUser } = useContext(AuthenticatedUser)
  const handleLogout = () => {
    setAuthUser({ username: '' })
    localStorage.setItem('user', '')
    localStorage.setItem('admin', false)
  }
  useEffect(() => {
    let user = localStorage.getItem('user')
    if (user === null) {
      user = ''
    }
    setAuthUser({ username: user })
  }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary position-sticky sticky-top" >
      <a className="navbar-brand text-white" href="#">MM</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/music" className="nav-link text-white" href="#">Music</Link>
          </li>
        </ul>
        {authUser.username === '' ?
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white" href="#">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link text-white" href="#">Register</Link>
            </li>
          </ul>
          :
          !authUser.admin ?
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item" onClick={() => { handleLogout() }}>
                <Link to="/register" className="nav-link text-white" href="#">Logout</Link>
              </li>
            </ul> :
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link to="/listofusers" className="nav-link text-white" href="#">List of users</Link>
              </li>
              <li className="nav-item" onClick={() => { handleLogout() }}>
                <Link to="/register" className="nav-link text-white" href="#">Logout</Link>
              </li>
            </ul>
        }
      </div>
    </nav >


  )
}
export default Navbar