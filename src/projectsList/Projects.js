import React, { Component } from 'react';

import {ReactComponent as ProjectsDividerSvg} from '../assets/svg/dividers/3.svg';

import websitePng from "../assets/projects/website.png";
import githubPng from "../assets/projects/github.png";

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
import htmlPng from  "../assets/technologies/html.png";
import reactPng from  "../assets/technologies/reactjs.png";

import './Projects.scss';

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
			html		: htmlPng,
			react		: reactPng
		}
	};

	render() {
		if(!this.state.projectsList || this.state.projectsList?.length === 0){
			return null;
		}
		return (
			<>
				<section id={"projects"} className="cont-view view-grid">
					<div className="text-align-center">
						<div className="view-heading">
							Projects
						</div>
					</div>
					<div id={"proj-cards"}>
						{
							this.state.projectsList.map((project, prIndex)=>{
								let tempClassName = (project.links.exist)? "" : "without-links"

								return (
									<div className={tempClassName} key={`project${prIndex}`}>
										<div className="project-card-new">
											<div className="tech-flex-container">
												{
													project.technologies.map((techImg, techIndex)=>{
														return <img src={this.state.images[techImg]} alt={techImg} key={`proj${prIndex}techImg${techIndex}`}/>
													})
												}
											</div>
											<div>
												<div className="project-title">
													<h1>{project.pName}</h1>
													<span className="project-number">{prIndex+1} / {this.state.projectsList.length}</span>
												</div>
												<div className="project-desc-container">
													<ul>
														{
															project.detailsList.map((details, descIndex)=>{
																return <li key={`proj${prIndex}desc${descIndex}`}>{details}</li>
															})
														}
													</ul>
												</div>
											</div>
											<div className="links-flex-container">
												{
													!!project.links.live.length &&
													<a className="websiteLink" rel="noreferrer" href={project.links.live} title="Live Version" target="_blank">
														<img src={websitePng} alt="Web"/> 
													</a>
												}
												{
													!!project.links.code.length &&
													<a className="githubLink" rel="noreferrer" href={project.links.code} title="Source Code" target="_blank">
														<img src={githubPng} alt="Git"/> 
													</a>
												}
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					
					<br/>
					<br/>
					<br/>
				</section>
				<div className="sectionDividerSvg" style={{background: '#3c0054'}}>
					<ProjectsDividerSvg />
				</div>
			</>
		)
	}
}

export default Projects;
