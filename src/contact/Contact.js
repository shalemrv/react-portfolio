import React, { Component } from 'react';

import swal from 'sweetalert';
import axios from 'axios';

import GithubPng from '../assets/img/contact/github.png';
import FbPng from '../assets/img/contact/fb.png';
import InstaPng from '../assets/img/contact/insta.png';
import LinkedInPng from '../assets/img/contact/linkedin.png';
import PhonePng from '../assets/img/contact/phone.png';
import EmailPng from '../assets/img/contact/email.png';
import WhatsappPng from '../assets/img/contact/whatsapp.png';

import './Contact.css';

export class Contact extends Component {

	state = {
		someTestKey : "TestKeyExists",
		newMessage : {
			company	: "",
			name	: "",
			email	: "",
			body	: ""
		},
		ipDetails : this.props.ipDetails
	};

	constructor(props){
		super(props);
		this.updateCompany			= this.updateCompany.bind(this);
		this.updateName				= this.updateName.bind(this);
		this.updateEmail			= this.updateEmail.bind(this);
		this.updateBody				= this.updateBody.bind(this);
		this.submitMessage			= this.submitMessage.bind(this);
		this.handlePhoneClick		= this.handlePhoneClick.bind(this);
		this.handleEmailClick		= this.handleEmailClick.bind(this);
		this.handleWhatsappClick	= this.handleWhatsappClick.bind(this);
	}

	cleanse(method, input){

		if(!input){
			return "";
		}

		switch(method){
			case "alphaSp"		: return input.replaceAll(/[^A-Za-z\s]/g, "").replaceAll(/\s\s+/g, ' ');
			case "alphaNumSp"	: return input.replaceAll(/[^A-Za-z0-9\s]/g, "").replaceAll(/\s\s+/g, ' ');
			case "sentenceSp"	: return input.replaceAll(/[^A-Za-z0-9\s]/g, "").replaceAll(/\s\s+/g, ' ');
			default	: return "";
		}
	}

	resetMessageForm(){
		this.setState({
			newMessage : {
				company	: "",
				name	: "",
				email	: "",
				body	: "",
			}
		});
	}
	
	copyToClipBoard(txt){
		navigator.clipboard.writeText(txt);
	}

	updateCompany(event){
		this.setState({
			newMessage : {
				...this.state.newMessage,
				company : this.cleanse("alphaNumSp", event.target.value)
			}
		});
	}

	updateName(event){
		this.setState({
			newMessage : {
				...this.state.newMessage,
				name : this.cleanse("alphaSp", event.target.value)
			}
		});
	}
	
	updateEmail(event){
		this.setState({
			newMessage : {
				...this.state.newMessage,
				email : event.target.value
			}
		});
	}
	
	updateBody(event){
		this.setState({
			newMessage : {
				...this.state.newMessage,
				body : this.cleanse("sentenceSp", event.target.value)
			}
		});
	}
	
	submitMessage(event){
		event.preventDefault();
		if(!this.state.newMessage.company){
			swal("Invalid Input");
		}
		
		if(!this.state.newMessage.name){
			swal("Invalid Input");
		}
		
		if(!this.state.newMessage.email){
			swal("Invalid Input");
		}
		
		if(!this.state.newMessage.body){
			swal("Invalid Input");
		}

		swal("Valid Form Details");

		axios.post(
			`/api/messages.php?action=add`,
			this.state.newMessage
		)
		.then(httpResponse=>{

			let apiResponse = httpResponse.data;
			
			if(!apiResponse.complete){
				swal("Failed", apiResponse.message, "error");
				return;
			}

			swal("Success", apiResponse.message, "success");
		})
		.catch(res=>{
			swal("Failed", "Something went wrong. Message could not be submitted", "error");
		})
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
			<section id={"contact"} className="cont-view view-grid">
				<div className="flex-center">
					<div className="view-heading view-heading-contact">
						CONTACT
					</div>
				</div>
				<div id={"contact-body-container"}>
					<div id={"social-links-container"}>
						<a target="_blank" rel="noreferrer" href="https://github.com/shalemrv/">
							<img src={GithubPng} alt="Github"/>
						</a>
						<a target="_blank" rel="noreferrer" href="https://www.facebook.com/kingshalemr">
							<img src={FbPng} alt="Facebook"/>
						</a>
						<a target="_blank" rel="noreferrer" href="https://www.instagram.com/king_of_peace">
							<img src={InstaPng} alt="Instagram"/>
						</a>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shalemrv">
							<img src={LinkedInPng} alt="LinkedIn"/>
						</a>
					</div>
					<div id={"contact-details-container"}>
						<div id={"contact-form-container"}>
							<form onSubmit={this.submitMessage}>
								<h4 className="title">
									Drop a message.
								</h4>
								<div className="cust-input-container">
									<input
										type="text"
										value={this.state.newMessage.company}
										onChange={this.updateCompany}
										title="Company Name to be at least 5 characters long."
										autoComplete="off"
										required
									/>
									<label className="custom-label">
										<span className="custom-placeholder">
											Company Name
										</span>
									</label>
								</div>
								<div className="cust-input-container">
									<input
										type="text"
										value={this.state.newMessage.name}
										onChange={this.updateName}
										title="Name cannot contain numbers or special characters"
										autoComplete="off"
										required
									/>
									<label className="custom-label">
										<span className="custom-placeholder">
											Contact Person (your name)
										</span>
									</label>
								</div>

								<div className="cust-input-container">
									<input
										type="email"
										value={this.state.newMessage.email}
										onChange={this.updateEmail}
										autoComplete="off"
										required
									/>
									<label className="custom-label">
										<span className="custom-placeholder">
											Email
										</span>
									</label>
								</div>

								<div className="cust-input-container">
									<textarea
										value={this.state.newMessage.body}
										onChange={this.updateBody}
										autoComplete="off"
										required
									></textarea>
									<label className="custom-label">
										<span className="custom-placeholder">
											Your Message
										</span>
									</label>
								</div>

								<div style={{textAlign: 'center'}}>
									<button type="submit" className="btn btn-info">
										Submit
									</button>
								</div>
							</form>
						</div>
						
						<div id={"contact-info-container"}>
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
							{
								!!this.state.ipDetails.exists &&
								<div>
									<br/><br/>
									<div id={"ipDetailsContainer"}>
										<span id={"ipDetailsLabel"}>IP Details</span>
										<div id={"ipAddressContainer"}>
											<span id={"ipAddressLabel"}>IP Address</span>
											<h3>{this.state.ipDetails.ip}</h3>
										</div>
										<div id={"iplocationContainer"}>
											<span id={"iplocationLabel"}>Location</span>
											<h3>{this.state.ipDetails.ip}</h3>
										</div>
									</div>
								</div>
							}
						</div>
					</div>
					<br/><br/><br/>
				</div>
			</section>
		)
	}
}

export default Contact;
