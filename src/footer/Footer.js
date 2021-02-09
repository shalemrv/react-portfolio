import React, { Component } from 'react';

// import IpStackPng from '../assets/ipstack.png';
import siteLogo from "../assets/shall-aim-logo.png";
import reactjsPng from  "../assets/technologies/reactjs.png";
import phpPng from  "../assets/technologies/php.png";
import mysqlPng from  "../assets/technologies/mysql.png";

import './Footer.scss';

export class Footer extends Component {
	state = {
		ipDetails		: this.props.ipDetails,
		visitDetails	: this.props.visitDetails
	};

	render() {
		return (
			<div className="footer">
				<div className="technologies">
					<img
						className="siteLogoImg"
						src={siteLogo}
						alt={"Shalem Raj V"}
					/>
					<h6 className="techLabel">
						Tech Stack
					</h6>
					<h3 className="techContainer">
						<img
							className="techStackImg"
							src={reactjsPng}
							alt={"R"}
						/>
						React JS
					</h3>
					<h3 className="techContainer">
						<img
							className="techStackImg"
							src={phpPng}
							alt={"P"}
						/>
						PHP
					</h3>
					<h3 className="techContainer">
						<img
							className="techStackImg"
							src={mysqlPng}
							alt={"S"}
						/>
						MySQL
					</h3>
				</div>
				{
					!!this.state.visitDetails &&
					<div className="pageVisits">
						<h6>Total Page Visits</h6>
						<h1>
							{this.state.visitDetails.count}
						</h1>
						<br/>
						<h6>Last Visited from</h6>
						<h4>
							{this.state.visitDetails.address.fullAddress}
						</h4>
					</div>
				}
				{/* {
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
				} */}
				{
					!!this.state.ipDetails.exists &&
					<div className="newIpDetailsContainer">
						
						<h6>Your IP Address</h6>
						<h3 className="Orbitron ipAddressValue">{this.state.ipDetails.ip}</h3>
						<br/>
						<h6>Location IP Address</h6>
						<h3 className="Poppins ipLocationPlace">{this.state.ipDetails.city}, {this.state.ipDetails.region}</h3>
						<h3 className="Orbitron ipLocationCountry">
							<span>{this.state.ipDetails.country}</span>
							<img src={this.state.ipDetails.flag} alt="flag" />
						</h3>
					</div>
				}
			</div>
		)
	}
}

export default Footer;
