import React, { Component } from 'react';


import { Player } from '@lottiefiles/react-lottie-player';

import AboutAnimationJSON from '../assets/lottie/about-details-36185-animation-about-seo-dashboard.json';
import ExperienceAnimationJSON from '../assets/lottie/experience-27432-developer.json';
import ContactDetailsAnimationJSON from '../assets/lottie/contact-phone-mail-41675-phone-and-email-communication-animation.json';
import ContactAnimationJSON from '../assets/lottie/contact-mail-37147-contact-us.json';


import IpStackPng from '../assets/ipstack.png';
import lottieLogo from "../assets/lottie/lottie.svg";
import siteLogo from "../assets/shall-aim-logo.png";
import reactjsPng from  "../assets/technologies/reactjs.png";
import phpPng from  "../assets/technologies/php.png";
import mysqlPng from  "../assets/technologies/mysql.png";
import sassPng from  "../assets/technologies/sass.png";

import './Footer.scss';

export class Footer extends Component {
	state = {
		ipDetails		: this.props?.ipDetails,
		visitDetails	: this.props?.visitDetails
	};

	render() {
		return (
			<div id={"footer"} className="footer">
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
							style={{padding:'2px'}}
							src={sassPng}
							alt={"S"}
						/>
						SCSS
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
						<div className="visit-counts">
							<div>
								<h6>Page Visits</h6>
								<h1>
									{this.state.visitDetails.count}
								</h1>
							</div>
							<div>
								<h6>People</h6>
								<h1>
									{this.state.visitDetails.people}
								</h1>
							</div>
						</div>
							
						<br/>
						<h6>Last Visited from</h6>
						<h4>
							{this.state.visitDetails.address.fullAddress}
						</h4>
					</div>
				}
				{
					!!this.state.ipDetails?.exists &&
					<div className="newIpDetailsContainer">
						
						<h6>Your IP Address</h6>
						<h3 className="Orbitron ipAddressValue">{this.state.ipDetails.ip}</h3>
						<br/>
						<h6>Location IP Address</h6>
						<h4 className="ipLocationPlace">{this.state.ipDetails.city}, {this.state.ipDetails.region}</h4>
						<h3 className="Orbitron ipLocationCountry">
							<span>{this.state.ipDetails.country}</span>
							<img src={this.state.ipDetails.flag} alt="flag" />
						</h3>
					</div>
				}
				<div className="sourcesContainer">
					<a target="_blank" rel="noreferrer" href="https://lottiefiles.com">
						<h5 className="lottieLabel">
							<img
								className="lottieSvg"
								src={lottieLogo}
								alt={"L"}
							/>
							<span>
								&emsp;Animations from Lottie Files
							</span>
						</h5>
					</a>
					<div className="lottie-flex-container">
						<div>
							<Player
								src={AboutAnimationJSON}
								background="transparent"
								autoplay={true}
								speed={"1"}
								loop={true}
								style={{ width: '90%' }}
							>
							</Player>
						</div>
						<div>
							<Player
								src={ExperienceAnimationJSON}
								background="transparent"
								autoplay={true}
								speed={"1"}
								loop={true}
								style={{ width: '90%' }}
							>
							</Player>
						</div>
						<div>
							<Player
								src={ContactDetailsAnimationJSON}
								background="transparent"
								autoplay={true}
								speed={"1"}
								loop={true}
								style={{ width: '90%' }}
							>
							</Player>
						</div>
						<div>
							<Player
								src={ContactAnimationJSON}
								background="transparent"
								autoplay={true}
								speed={"1"}
								loop={true}
								style={{ width: '90%' }}
							>
							</Player>
						</div>
					</div>
					<hr className="separator"/>
					<a target="_blank" rel="noreferrer" href="https://ipstack.com/">
						<div className="ipStackContainer">
							<h5>IP Details API</h5>
							<img
								className="lottieSvg pad-left"
								src={IpStackPng}
								alt={"L"}
							/>
						</div>
					</a>
				</div>
			</div>
		)
	}
}

export default Footer;
