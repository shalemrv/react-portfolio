import React, { Component } from 'react';

// import './Services.css';
import './services.scss';

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

import bgAngular1 from "../assets/technologies/bg/angular1.jpg";
import bgAngular2Plus from "../assets/technologies/bg/angular2plus.jpg";
import bgBootstrap from "../assets/technologies/bg/bootstrap.jpg";
import bgHtml from "../assets/technologies/bg/html.jpg";
import bgJavascript from "../assets/technologies/bg/javascript.jpg";
import bgPhp from "../assets/technologies/bg/php.jpg";
import bgReact from "../assets/technologies/bg/react.jpg";
import bgVisualStudio from "../assets/technologies/bg/visual-studio.jpg";

export class Services extends Component {

	state = {
		servicesList : this.props.servicesList,
		images : {
			msAccess		: msAccessPng,
			angular1		: angular1Png,
			angular2plus	: angular9Png,
			express			: expressPng,
			htmlCssJs		: htmlCssJsPng,
			mongodb			: mongodbPng,
			mysql			: mysqlPng,
			node			: nodePng,
			php				: phpPng,
			vb				: vbPng,
			vstud			: vstudPng,
			bootstrap		: bootstrapPng,
			html			: htmlPng
		},
		bg : {
			angular1		: bgAngular1,
			angular2plus	: bgAngular2Plus,
			bootstrap		: bgBootstrap,
			html			: bgHtml,
			htmlCssJs		: bgJavascript,
			php				: bgPhp,
			react			: bgReact,
			vstud			: bgVisualStudio
		}
	};

	render() {
		return (
			<section id={"services"} className="cont-view view-grid">
				<div className="text-align-center">
					<div className="view-heading">
						Services
					</div>
				</div>
				<div id={"services-flex-container"}>
					{
						this.state.servicesList.map(
							(service, sIndex) => {
								return <div className="service-card-container" key={`service${sIndex}`}>
									<div className="service-card">
										<div className="card-bg">
											<img
												className="card-bg-img"
												src={this.state.bg[service.img]}
												alt={service.title}
											/>
										</div>
										<div className="tech-title Montserrat">{service.title}</div>
										<div className="tech-description Montserrat">
											{
												service.desc.map(
													(pDesc, pInd) => {
														return <p key={`sDesc${pInd}`}>{pDesc}</p>
													}
												)
											}
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
