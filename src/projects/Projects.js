import React, { Component } from 'react';

import websitePng from "../assets/img/projects/website.png";
import githubPng from "../assets/img/projects/github.png";

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
import htmlPng from  "../assets/img/serv/html.png";


import './Projects.css';

export class Projects extends Component {

	state = {
		projectsList : this.props.projectsList,
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
			html		: htmlPng
		}
	};

	render() {
		return (
			this.state.projectsList &&
			<section id={"projects"} className="cont-view view-grid">
				<div className="text-align-center">
					<div className="view-heading">
						PROJECTS
					</div>
				</div>
				<div id={"proj-cards"}>
					{
						this.state.projectsList.map((project, index)=>{
							let tempClassName = (project.links.exist)? "" : "without-links"

							return (
								<div className={tempClassName} key={`project${index}`}>
									<div className="project-card-new">
										<div className="tech-flex-container">
											{
												project.technologies.map((techImg)=>{
													return <img src={this.state.images[techImg]}/>
												})
											}
										</div>
										<div>
											<div className="project-title">
												<h1>{project.pName}</h1>
												<span className="project-number">{index+1} / {this.state.projectsList.length}</span>
											</div>
											<div className="project-desc-container">
												<ul>
													{
														project.detailsList.map((details)=>{
															return <li>{details}</li>
														})
													}
												</ul>
											</div>
										</div>
										<div className="links-flex-container">
											{
												!!project.links.live.length &&
												<a className="websiteLink" href={project.links.live} title="Live Version" target="_blank">
													<img src={websitePng}/> 
												</a>
											}
											{
												!!project.links.code.length &&
												<a className="githubLink" href={project.links.code} title="Source Code" target="_blank">
													<img src={githubPng}/> 
												</a>
											}
										</div>
									</div>
								</div>
							)
						})
					}
					<br/>
					<br/>
				</div>
			</section>
		)
	}
}

export default Projects;
