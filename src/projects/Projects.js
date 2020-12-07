import React, { Component } from 'react';

import websitePng from "../assets/img/projects/website.png";
import githubPng from "../assets/img/projects/github.png";

import msAccess from "../assets/img/serv/msAccess.png";
import angular1 from "../assets/img/serv/angular1.png";
import angular9 from "../assets/img/serv/angular9.png";
import express from  "../assets/img/serv/expressjs.png";
import htmlCssJs from  "../assets/img/serv/htmlCssJs.png";
import mongodb from  "../assets/img/serv/mongodb.png";
import mysql from  "../assets/img/serv/mysql.png";
import node from  "../assets/img/serv/node.png";
import php from  "../assets/img/serv/php.png";
import vb from  "../assets/img/serv/vb.png";
import vstud from  "../assets/img/serv/vstud.png";


import './Projects.css';

export class Projects extends Component {

	state = {
		projectsList : this.props.projectsList,
		images : {
			msAccess	: msAccess,
			angular1	: angular1,
			angular9	: angular9,
			express		: express,
			htmlCssJs	: htmlCssJs,
			mongodb		: mongodb,
			mysql		: mysql,
			node		: node,
			php			: php,
			vb			: vb,
			vstud		: vstud
		}
	};

	render() {
		return (
			this.state.projectsList &&
			<section id={"projects"} className="cont-view view-grid">
				<div className="flex-center" style={{gridArea: 'hd'}}>
					<div className="view-heading view-heading-projects">
						PROJECTS
					</div>
				</div>
				<div id={"proj-cards"}>
					{
						this.state.projectsList.map((project, index)=>{
							let tempClassName = (project.links.exist)? "" : "without-links"

							return (
								<div className={tempClassName}>
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
												<a href={project.links.live} title="Live Version" target="_blank">
													<img src={websitePng}/> 
												</a>
											}
											{
												!!project.links.code.length &&
												<a href={project.links.code} title="Source Code" target="_blank">
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
