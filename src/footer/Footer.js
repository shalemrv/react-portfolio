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
						<h4>
							{this.state.visitDetails.count}
							<br/>
							{this.state.visitDetails.address.fullAddress}
							<span><h6>Page Visits</h6></span>
						</h4>
					</div>
				}
			</div>
		)
	}
}

export default Footer;
