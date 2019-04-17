import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment'

class AddSite extends Component {
	state = {
		url: '',
		baseUrl: '',
		createdAt: moment().format('MM/DD/YYYY')
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value })
	onSubmit = (e) => {
		e.preventDefault()
		const newSite = this.state
		const { firestore, history } = this.props
		firestore.add({collection: 'sites'}, newSite).then(() => history.push('/'))
	}
	render() {
		return(
			<div className="row">
				<div className="col-md-8 offset-md-2">			
					<div className="card box-shadow">
						<div className="card-header">Add Site</div>
						<div className="card-body">
							<form onSubmit={this.onSubmit}>
								<div className="input-group mb-3">
									<input 
										type="text"
										className="form-control d-block"
										name="url"
										required
										onChange={this.onChange}
										value={this.state.url}
									/>	
									<input 
										type="text"										
										name="createdAt"
										required
										hidden
										defaultValue={this.state.createdAt}
									/>										
									<div className="input-group-append">
										<input 
											type="submit"
											value="Add Site"
											className="btn btn-primary"
										/>									  
									</div>								
								</div>
							</form>																							
						</div>
					</div>			
				</div>
			</div>
		)
	}
}

AddSite.propTypes = {
	firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(AddSite)