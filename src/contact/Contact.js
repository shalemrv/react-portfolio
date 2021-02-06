import React, { Component, useState } from 'react';

import ContactDetails from './ContactDetails';
import DropMessageForm from './DropMessageForm';

import IpStackPng from '../assets/ipstack.png';

import './Contact.scss';

export class Contact extends Component {

	state = {
		ipDetails		: this.props.ipDetails,
		visitDetails	: this.props.visitDetails
	};


	render() {
		return (
			<section id={"contact"} className="cont-view view-grid">
				<div className="text-align-center">
					<div className="view-heading view-heading-contact">
						Contact
					</div>
				</div>
				<div id={"contact-details-container"}>	
					<ContactDetails />
					<DropMessageForm />
				</div>

				<div>
					{
						!!this.state.ipDetails.exists &&
						<div>
							<br/><br/>
							<div id={"ipDetailsContainer"}>
								<div id={"ipDetailsLabel"}>
									<span className="Dosis">
										IP Details
									</span>
								</div>
								<div id={"ipAddressContainer"}>
									<span id={"ipAddressLabel"}>IP Address</span>
									<h3 className="Orbitron">{this.state.ipDetails.ip}</h3>
								</div>
								<div id={"iplocationContainer"}>
									<div id={"iplocationLabel"}>Location</div>
									<h3 className="Poppins">{this.state.ipDetails.city}, {this.state.ipDetails.region}</h3>
									<h3 className="Orbitron">
										<img src={this.state.ipDetails.flag} alt="flag" />
										{this.state.ipDetails.country}
									</h3>
								</div>
								<br/>
								<a id={"ipstackA"} href="https://ipstack.com" target="_blank" rel="noreferrer" title="API Source">
									<img src={IpStackPng} alt="flag" style={{height: '2rem', borderRadius: '500px'}}/>
								</a>
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
					
			</section>
		)
	}
}

export default Contact;
