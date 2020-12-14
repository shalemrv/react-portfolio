import React, { Component } from 'react';

import './Services.css';

import msAccessPng from "../assets/img/serv/msAccess.png";
import angular1Png from "../assets/img/serv/angular1.png";
import angular9Png from "../assets/img/serv/angular9.png";
import expressPng from  "../assets/img/serv/expressjs.png";
import htmlCssJsPng from  "../assets/img/serv/htmlCssJs.png";
import mongodbPng from  "../assets/img/serv/mongodb.png";
import mysqlPng from  "../assets/img/serv/mysql.png";
import nodePng from  "../assets/img/serv/node.png";
import phpPng from  "../assets/img/serv/php.png";
import vbPng from  "../assets/img/serv/vb.png";
import vstudPng from  "../assets/img/serv/vstud.png";
import bootstrapPng from  "../assets/img/serv/bootstrap.png";
import htmlPng from  "../assets/img/serv/html.png";

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
														<span className="service-title-span">{service.title}</span>
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
