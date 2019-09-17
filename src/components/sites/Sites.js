import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment'

import Spinner from '../layout/Spinner'

class Sites extends Component {
	
	getBaseURL = (site) => {
		return site.split('/')[2]
	}

	getFormattedDate = (site) => {
		const date = site.createdAt
		const formattedDate = moment(date)		
		return formattedDate.format('MM/DD/YYYY')
	}

	render() {
		const { sites } = this.props

		if(sites) {
			return (
				<div className="card box-shadow">					
						<div className="list-group list-group-flush">
						{sites.map(site => (
							<a href={site.url} key={site.id} target="_blank" rel="noopener" className="list-group-item list-group-item-action">
							  <div className="d-flex w-100 justify-content-between">
							    <h5 className="mb-1">{site.title ? site.title : this.getBaseURL(site.url)}</h5>
							    <small>{this.getFormattedDate(site)}</small>
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

const borderStyle = {
	borderLeft: '2px solid red'
}

Sites.propTypes = {
	firestore: PropTypes.object.isRequired,
	sites: PropTypes.array
}

export default compose(
	firestoreConnect([{ collection: 'sites', orderBy: ['createdAt', 'desc']}]),
	connect((state, props) => ({
		sites: state.firestore.ordered.sites
	}))
)(Sites)