import React, { Component } from 'react';

import './Services.css';

import msAccessPng from "../assets/technologies/msAccess.png";
import angular1Png from "../assets/technologies/angular1.png";
import angular9Png from "../assets/technologies/angular9.png";
import expressPng from  "../assets/technologies/expressjs.png";
import htmlCssJsPng from  "../assets/technologies/htmlCssJs.png";
import mongodbPng from  "../assets/technologies/mongodb.png";
import mysqlPng from  "../assets/technologies/mysql.png";
import nodePng from  "../assets/technologies/node.png";
import phpPng from  "../assets/technologies/php.png";
import vbPng from  "../assets/technologies/vb.png";
import vstudPng from  "../assets/technologies/vstud.png";
import bootstrapPng from  "../assets/technologies/bootstrap.png";
import htmlPng from  "../assets/technologies/html.png";

export class Services extends Component {

	state = {
		servicesList : this.props.servicesList,
		images : {
			msAccess	: msAccessPng,
			angular1	: angular1Png,
			angular9	: angular9Png,
			express		: expressPng,
			htmlCssJs	: htmlCssJsPng,
			mongodb		: mongodbPng,
			mysql		: mysqlPng,
			node		: nodePng,
			php			: phpPng,
			vb			: vbPng,
			vstud		: vstudPng,
			bootstrap	: bootstrapPng,
			html		: htmlPng
		}
	};

	render() {
		return (
			<section id={"services"} className="cont-view view-grid">
				<div className="text-align-center">
					<div className="view-heading">
						SERVICES
					</div>
				</div>
				<div id={"serv-cards-container"}>
					{
						this.state.servicesList.map(
							(service, sIndex)=>{
								return <div className="serv-cards" key={`service${sIndex}`}>
									<div className="service-card-new">
										<div className="service-img-container">
											<img className="service-tech-img" src={this.state.images[service.img]} alt={service.title}/>
										</div>
										<div>
											<div className="service-card-title">
												<h2>
													<div className="service-title-div">
														<span className="service-title-span Orbitron">{service.title}</span>
													</div>
												</h2>
											</div>
											<p>{service.desc}</p>
										</div>
									</div>
								</div>
							}
						)
					}
				</div>
			</section>
		)
	}
}

export default Services
