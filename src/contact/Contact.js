import React, { Component } from 'react';

import swal from 'sweetalert';
import axios from 'axios';

import GithubPng from '../assets/img/contact/github.png';
import FbPng from '../assets/img/contact/fb.png';
import InstaPng from '../assets/img/contact/insta.png';
import LinkedinPng from '../assets/img/contact/linkedin.png';
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
		}
	};

	constructor(props){
		super(props);
		this.updateCompany		= this.updateCompany.bind(this);
		this.updateName			= this.updateName.bind(this);
		this.updateEmail		= this.updateEmail.bind(this);
		this.updateBody			= this.updateBody.bind(this);
		this.sanitizeAllInputs	= this.sanitizeAllInputs.bind(this);
		this.submitMessage		= this.submitMessage.bind(this);
	}

	cleanse(method, input){
		// console.log(`cleanse('${method}', '${input}')`);

		if(!input){
			return "";
		}

		switch(method){
			case "alphaSp"		: return input.replaceAll(/[^A-Za-z\s]/g, "").replaceAll(/\s\s+/g, ' ');;
			case "alphaNumSp"	: return input.replaceAll(/[^A-Za-z0-9\s]/g, "").replaceAll(/\s\s+/g, ' ');;
			case "sentenceSp"	: return input.replaceAll(/[^A-Za-z0-9\s]/g, "").replaceAll(/\s\s+/g, ' ');;
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

	sanitizeAllInputs(){
		let newInputs = {
			company	: this.cleanse("alphaNumSp", this.state.newMessage.company),
			name	: this.cleanse("alphaSp", this.state.newMessage.name),
			body	: this.cleanse("sentenceSp", this.state.newMessage.body)
		};
		console.log("newInputs");
		console.log(newInputs);
		this.setState(prevState => ({
			...prevState,
			newMessage : {
				...prevState.newMessage,
				company	: this.cleanse("alphaNumSp", prevState.newMessage.company),
				name	: this.cleanse("alphaSp", prevState.newMessage.name),
				body	: this.cleanse("sentenceSp", prevState.newMessage.body)
			}
		}));
	}

	updateCompany(event){
		this.setState({
			newMessage : {
				company : event.target.value
			}
		});
	}

	updateName(event){
		this.setState({
			newMessage : {
				name : event.target.value
			}
		});
	}
	
	updateEmail(event){
		this.setState({
			newMessage : {
				email : event.target.value
			}
		});
	}
	
	updateBody(event){
		this.setState({
			newMessage : {
				body : event.target.value
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
			`http://127.0.0.1:11111/api/messages.php?action=add`,
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

	render() {
		return (
			<section id={"contact"} className="cont-view view-grid">
				<div className="flex-center">
					<div className="view-heading view-heading-contact">
						CONTACT{this.state.someTestKey}
					</div>
				</div>
				<div id={"contact-body-container"}>
					<div id={"social-links-container"}>
						<a target="_blank" href="https://github.com/shalemrv/">
							<img src={GithubPng}/>
						</a>
						<a target="_blank" href="https://www.facebook.com/kingshalemr">
							<img src={FbPng}/>
						</a>
						<a target="_blank" href="https://www.instagram.com/king_of_peace">
							<img src={InstaPng}/>
						</a>
						<a target="_blank" href="https://www.linkedin.com/in/shalemrv">
							<img src={LinkedinPng}/>
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
										onBlur={this.sanitizeAllInputs}
										title="Company Name to be at least 5 characters long."
										autoComplete="off"
										required
									/>
									<label className="custom-label">
										<span className="custom-placeholder">
											Company Name-{this.state.newMessage.company}
										</span>
									</label>
								</div>
								<div className="cust-input-container">
									<input
										type="text"
										value={this.state.newMessage.name}
										onChange={this.updateName}
										onBlur={this.sanitizeAllInputs}
										title="Name cannot contain numbers or special characters"
										autoComplete="off"
										required
									/>
									<label className="custom-label">
										<span className="custom-placeholder">
											Contact Person (your name)-{this.state.newMessage.name}
										</span>
									</label>
								</div>

								<div className="cust-input-container">
									<input
										type="email"
										value={this.state.newMessage.email}
										onChange={this.updateEmail}
										onBlur={this.sanitizeAllInputs}
										autoComplete="off"
										required
									/>
									<label className="custom-label">
										<span className="custom-placeholder">
											Email-{this.state.newMessage.email}
										</span>
									</label>
								</div>

								<div className="cust-input-container">
									<textarea
										value={this.state.newMessage.body}
										onChange={this.updateBody}
										onBlur={this.sanitizeAllInputs}
										autoComplete="off"
										required
									></textarea>
									<label className="custom-label">
										<span className="custom-placeholder">
											Your Message-{this.state.newMessage.body}
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
							<a
								className="contact-info"
								href="tel:+919060317334"
								onclick="copyToClipBoard('+919060317334');"
								title="Just Click to Copy To Clipboard"
							>
								<div className="contact-icon-container">
									<img src={PhonePng}/>
								</div>
								<h3>
									+91 9060 317 334
								</h3>
							</a>
							<a
								className="contact-info"
								href="mailto:shalemrv@gmail.com?Subject=Portfolio%20-%20Get%20in%20Touch&body=Hi%20Shalem%21%0A%0AWe%27ve%20found%20your%20portfolio%20to%20be%20interesting.%0APlease%20get%20in%20touch%20with%20us.%0AHere%27s%20our%20contact%20information%3A%0A%0AMobile%20Number%3A%20%0AWebsite%3A%20%0A%0AThank%20you.%0A%0ARegards%2C%0A"
								onclick="copyToClipBoard('shalemrv@gmail.com');"
							>
								<div className="contact-icon-container">
									<img src={EmailPng}/>
								</div>
								<h3 title="Just Click to Copy to Clipboard">
									shalemrv@gmail.com
								</h3>
							</a>						
							<a
								className="contact-info"
								title="Just Click to Copy To Clipboard"
								href="https://api.whatsapp.com/send?phone=%2B919060317334&text=Hi%20Shalem%21%0A%0AWe%27ve%20found%20your%20portfolio%20to%20be%20interesting.%0APlease%20get%20in%20touch%20with%20us.%0AHere%27s%20our%20contact%20information.%0AEmail%3A%20%0AWebsite%3A%20%0A%0AThank%20you.%0A%0ARegards%2C%0A"
								target="_blank"
								onclick="copyToClipBoard('+919060317334');"
							>
								<div className="contact-icon-container">
									<img src={WhatsappPng}/>
								</div>
								<h3>
									+91 9060 317 334
								</h3>
							</a>
						</div>
					</div>
					<br/><br/><br/>
				</div>
			</section>
		)
	}
}

export default Contact;
