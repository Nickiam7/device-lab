import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import Spinner from '../layout/Spinner'

class Sites extends Component {
	
	getBaseURL = (site) => {
		return 'www.cashnetusa.com'
	}

	render() {
		
		const { sites } = this.props;

		if(sites) {
			return (
				<div className="card box-shadow">					
						<div className="list-group list-group-flush">
						{sites.map(site => (
							<a href={site.url} target="_blank" rel="noopener" className="list-group-item list-group-item-action">
							  <div className="d-flex w-100 justify-content-between">
							    <h5 className="mb-1">{this.getBaseURL(site.url)}</h5>
							    <small>3 days ago</small>
							  </div>
							  <p className="mb-1">{site.url}</p>							 
							</a>
						))}
					</div>
				</div>
			)
		} else {
			return <Spinner />
		}
	}
}

Sites.propTypes = {
	firestore: PropTypes.object.isRequired,
	sites: PropTypes.array
}

export default compose(
	firestoreConnect([{ collection: 'sites'}]),
	connect((state, props) => ({
		sites: state.firestore.ordered.sites
	}))
)(Sites)





