import React, { Component } from 'react'

class Sites extends Component {
	render() {
		const sites = [
			{
				id:  '1',
				base: 'cashnetusa.com',
				url: 'https://www.cashnetusa.com/'
			},
			{
				id:  '2',
				base: 'netcredit.com',
				url: 'https://www.netcredit.com/-/p/60a72867-ffff-464a-bc23-017decc98998'
			}
		]
		if(sites) {
			return (
				<div className="card box-shadow">					
						<div class="list-group">
						{sites.map(site => (
							<a href={site.url} class="list-group-item list-group-item-action">
							  <div class="d-flex w-100 justify-content-between">
							    <h5 class="mb-1">{site.base}</h5>
							    <small>3 days ago</small>
							  </div>
							  <p class="mb-1">{site.url}</p>							 
							</a>
						))}
					</div>
				</div>
			)
		} else {
			return <h1>Loading...</h1> 
		}
	}
}

export default Sites;