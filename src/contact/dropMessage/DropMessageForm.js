import React, { Component } from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

import ContactAnimationJSON from '../../assets/lottie/contact-mail-37147-contact-us.json';

import swal from 'sweetalert';
import axios from '../../auth';

import './DropMessageForm.scss';

export class DropMessageForm extends Component {

	state = {
		newMessage : {
			company	: "",
			name	: "",
			email	: "",
			body	: ""
		}
	};
	
	constructor(props){
		super(props);
		this.updateCompany	= this.updateCompany.bind(this);
		this.updateName		= this.updateName.bind(this);
		this.updateEmail	= this.updateEmail.bind(this);
		this.updateBody		= this.updateBody.bind(this);
		this.submitMessage	= this.submitMessage.bind(this);
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
		var invalidForm = false;
		var invalidFields = [];

		if(!this.state.newMessage.company || this.state.newMessage.company.length<3){
			invalidFields.push("Company name (At least 3 characters long)");
			invalidForm = true;
		}
		
		if(!this.state.newMessage.name || this.state.newMessage.name.length<3){
			invalidFields.push("Your name (At least 3 characters long)");
			invalidForm = true;
		}
		
		if(!this.state.newMessage.email){
			invalidFields.push("Email Address");
			invalidForm = true;
		}
		
		if(!this.state.newMessage.body || this.state.newMessage.body.length<5){
			invalidFields.push("Message (At least 5 characters long)");
			invalidForm = true;
		}

		if(invalidForm){
			let errorMessage = invalidFields.join(",\n");
			swal(`Please enter the following fields - (${errorMessage})`, )
		}
		

		axios.post(
			`${process.env.REACT_APP_API}/api/messages.php?action=add`,
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
			<div id={"contact-form-container"}>
				<form onSubmit={this.submitMessage}>
					<h4 className="form-title">
						Drop a message.
					</h4>
					<div className="form-animation-container">
						<div className="inputs-container">
							<div className="cust-input-container">
								<input
									type="text"
									value={this.state.newMessage.company}
									onChange={this.updateCompany}
									title="Company Name to be at least 5 characters long."
									placeholder="Company Name"
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
									placeholder="Contact Person (your name)"
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
									placeholder="Email"
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
									placeholder="Your Message"
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
						</div>
						<div className="form-animation">
							<Player
								src={ContactAnimationJSON}
								background="transparent"
								autoplay={true}
								speed={"1"}
								loop={true}
								style={{ width: '80%'}}
							></Player>
						</div>
					</div>
					
				</form>
			</div>
		)
	}
}

export default DropMessageForm
