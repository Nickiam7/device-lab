import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
				<div className="container">
					<Link to="/" className="navbar-brand">
						Device Lab
					</Link>
					<button 
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarMain">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarMain">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									<i className="fas fa-sync" />
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/sites/new" className="nav-link">
									<i className="fas fa-plus" />  Add Site
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;