import React, { Component } from 'react';

import swal from 'sweetalert';

import { Player } from '@lottiefiles/react-lottie-player';

import ContactAnimationJSON from '../assets/lottie/contact-mail-37147-contact-us.json';

import GithubPng from '../assets/contact/social/github.png';
import FbPng from '../assets/contact/social/fb.png';
import InstaPng from '../assets/contact/social/insta.png';
import LinkedInPng from '../assets/contact/social/linkedin.png';
import TwitterPng from '../assets/contact/social/twitter.png';

import ContactBG1 from '../assets/contact/contact-bg-1.jpg';
import ContactBG2 from '../assets/contact/contact-bg-2.jpg';
import ContactBG3 from '../assets/contact/contact-bg-3.jpg';

import PhonePng from '../assets/contact/phone.png';
import EmailPng from '../assets/contact/email.png';
import WhatsappPng from '../assets/contact/whatsapp.png';

export class ContactDetails extends Component {
	constructor(props){
		super(props);
		this.handlePhoneClick		= this.handlePhoneClick.bind(this);
		this.handleEmailClick		= this.handleEmailClick.bind(this);
		this.handleWhatsappClick	= this.handleWhatsappClick.bind(this);
	}

	copyToClipBoard(txt){
		navigator.clipboard.writeText(txt);
	}
	
	createAtagAndClick(href, newTab=false){
		let aTag = document.createElement("a");
		aTag.setAttribute("rel", "noreferrer");
		if(newTab){
			aTag.setAttribute("target", "_blank");
		}
		aTag.setAttribute("href", href);
		aTag.click();
	}

	handlePhoneClick(){
		var contactInfo = "+919060317334";

		swal(
			"Mobile Number",
			"What would you like to do?",
			{
				buttons: {
					cancel : "Cancel",
					clipboard : {
						text: "Copy to Clipboard",
						value: "clipboard"
					},
					appMode : {
						text: "Open in App",
						value: "appMode"
					}
				}
			}
		)
		.then(
			(value) => {
				switch (value){
					case "clipboard":
						this.copyToClipBoard(contactInfo);
						swal("", "Successfully copied to clipboard. Paste anywhere !", "success");
						break;

					case "appMode":
						this.createAtagAndClick(`tel:${contactInfo}`);
						break;

					default:
						swal("Cancelled", "Nothing happened!", "info");
				}
		});
	}

	handleEmailClick(){
		var contactInfo = "shalemrv@gmail.com";
		swal(
			"Email",
			"What would you like to do?",
			{
				buttons: {
					cancel : "Cancel",
					clipboard : {
						text: "Copy to Clipboard",
						value: "clipboard"
					},
					appMode : {
						text: "Open in App",
						value: "appMode"
					}
				}
			}
		)
		.then(
			(value) => {
				switch (value){
					case "clipboard":
						this.copyToClipBoard(contactInfo);
						swal("", "Successfully copied to clipboard. Paste anywhere !", "success");
						break;

					case "appMode":
						this.createAtagAndClick(`mailto:${contactInfo}?Subject=Portfolio%20-%20Get%20in%20Touch&body=Hi%20Shalem%21%0A%0AWe%27ve%20found%20your%20portfolio%20to%20be%20interesting.%0APlease%20get%20in%20touch%20with%20us.%0AHere%27s%20our%20contact%20information%3A%0A%0AMobile%20Number%3A%20%0AWebsite%3A%20%0A%0AThank%20you.%0A%0ARegards%2C%0A`);
						break;

					default:
						swal("Cancelled", "Nothing happened!", "info");
				}
		});
	}

	handleWhatsappClick(){
		var contactInfo = "+919060317334";
		swal(
			"WhatsApp",
			"What would you like to do?",
			{
				buttons: {
					cancel : "Cancel",
					clipboard : {
						text: "Copy to Clipboard",
						value: "clipboard"
					},
					appMode : {
						text: "Open in WhatsApp / WhatsApp Web",
						value: "appMode"
					}
				}
			}
		)
		.then(
			(value) => {
				switch (value){
					case "clipboard":
						this.copyToClipBoard(contactInfo);
						swal("", "Successfully copied to clipboard. Paste anywhere !", "success");
						break;

					case "appMode":
						this.createAtagAndClick(`https://api.whatsapp.com/send?phone=%2B919060317334&text=Hi%20Shalem%21%0A%0AWe%27ve%20found%20your%20portfolio%20to%20be%20interesting.%0APlease%20get%20in%20touch%20with%20us.%0AHere%27s%20our%20contact%20information.%0AEmail%3A%20%0AWebsite%3A%20%0A%0AThank%20you.%0A%0ARegards%2C%0A`, true);
						break;

					default:
						swal("Cancelled", "Nothing happened!", "info");
				}
		});
	}
	render() {
		return (
			<div className="contact-body-p1">
				<div className="contact-details-bg">
					<img src={ContactBG3}/>
				</div>
			
				<div id={"social-links-container"}>
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/we_shall_aim">
						<img src={InstaPng} alt="Instagram"/>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/weShallAim">
						<img src={FbPng} alt="Facebook"/>
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/shalemrv/">
						<img src={GithubPng} alt="Github"/>
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shalemrv">
						<img src={LinkedInPng} alt="LinkedIn"/>
					</a>
					<a target="_blank" rel="noreferrer" href="https://twitter.com/weShallAim">
						<img src={TwitterPng} alt="Twitter"/>
					</a>
				</div>
					
				
				<div>
					
					<div className="contact-info-container">
						<div
							className="contact-info"
							onClick={this.handlePhoneClick}
							title="Copy To Clipboard"
						>
							<div className="contact-icon-container">
								<img src={PhonePng} alt={`Phone`}/>
							</div>
							<h3>
								+91 9060 317 334
							</h3>
						</div>
						<div
							className="contact-info"
							onClick={this.handleEmailClick}
							title="Copy to Clipboard"
						>
							<div className="contact-icon-container">
								<img src={EmailPng} alt={`Email`}/>
							</div>
							<h3>
								shalemrv@gmail.com
							</h3>
						</div>
						<div
							className="contact-info"
							title="Copy To Clipboard"
							onClick={this.handleWhatsappClick}
						>
							<div className="contact-icon-container">
								<img src={WhatsappPng} alt={`Whatsapp`}/>
							</div>
							<h3>
								+91 9060 317 334
							</h3>
						</div>
					</div>
					<div>
						<Player
							src={ContactAnimationJSON}
							background="transparent"
							autoplay={true}
							speed={"1"}
							loop={true}
							style={{ width: '30%'}}
						>
						</Player>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactDetails
