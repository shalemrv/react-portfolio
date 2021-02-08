import React, { Component } from 'react';

import IpStackPng from '../assets/ipstack.png';

import './Footer.scss';

export class Footer extends Component {
	state = {
		ipDetails		: this.props.ipDetails,
		visitDetails	: this.props.visitDetails
	};

	render() {
		return (
			<div className="footer">
				{
					!!this.state.ipDetails.exists &&
					<div>
						<br/><br/>
						<div id={"ipDetailsContainer"}>
							<div id={"ipDetailsLabel"}>
								<span>
									<span className="Dosis">IP Details</span>
									<a id={"ipstackA"} href="https://ipstack.com" target="_blank" rel="noreferrer" title="API Source">
										<img src={IpStackPng} alt="flag"/>
									</a>
								</span>
							</div>
							<div id={"ipAddressContainer"}>
								<span id={"ipAddressLabel"}>IP Address</span>
								<h3 className="Orbitron">{this.state.ipDetails.ip}</h3>
							</div>
							<div id={"ipLocationContainer"}>
								<div id={"ipLocationLabel"}>Location</div>
								<h3 className="Poppins">{this.state.ipDetails.city}, {this.state.ipDetails.region}</h3>
								<h3 className="Orbitron">
									<img src={this.state.ipDetails.flag} alt="flag" />
									{this.state.ipDetails.country}
								</h3>
							</div>
							<br/>
							
						</div>
					</div>
				}
				{
					!!this.state.visitDetails &&
					<div className="pageVisits">
						<h4>
							{this.state.visitDetails.count} Page Visits
							<br/>
							<br/>
							<h6>Last Visit</h6>
							{this.state.visitDetails.address.fullAddress}
						</h4>
					</div>
				}
				<div className="technologies">
					<h4>
						React JS
					</h4>
					<h4>
						PHP
					</h4>
					<h4>
						MySQL
					</h4>
				</div>
			</div>
		)
	}
}

export default Footer;
