import React, { Component } from 'react';

import ContactDetails from './details/ContactDetails';
import DropMessageForm from './dropMessage/DropMessageForm';

import './Contact.scss';

export class Contact extends Component {
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
			</section>
		)
	}
}

export default Contact;
