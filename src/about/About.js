import React, { Component } from 'react';
import './About.css';

import dartLogo from "../assets/img/experience/dart.png";

class About extends Component{
	
	state = {
		skills : this.props.skills
	};
	
	render(){
		return (
			<section id={"about"} className="cont-view">
				<div className="flex-center" style={{gridArea : 'hd'}}>
					<div className="view-heading view-heading-about">
						ABOUT
					</div>
				</div>
				<div id={"about-card"} style={{gridArea : 'cBody'}}>
					<div id={"about-details"}>
						<div id={"about-myself-1"}>
							<div id={"skills-div"}>
								<div className="about-myself--label">Skills : </div>
								<div id={"skills-list"}>
									<span className="skill">Creativity</span>
									<span className="skill">Presentation</span>
									<span className="skill">Problem Solving</span>
									<span className="skill">Communication</span>
								</div>
							</div>
						</div>

						<div id={"t-skill-qualities-div"}>
							<div id={"technical-skills"}>
								<div className="about-myself--label-c">TECHNICAL SKILLS</div>
								<div className="text-center">
									<div className="skills-sub-label">Advanced</div>
									{
										this.state.skills.advanced.map((s)=>{
											return <span className="t-skill">{s}</span>
										})
									}
								</div>
								<div className="text-center">
									<div className="skills-sub-label mt-2">Intermediate</div>
									{
										this.state.skills.intermediate.map((s)=>{
											return <span className="t-skill">{s}</span>
										})
									}
								</div>
								<div className="text-center">
									<div className="skills-sub-label mt-1" style={{marginBottom : 0}}>Basic</div>
									<span className="basic-skill">
										{this.state.skills.basic.join(', ')}
									</span>
								</div>
							</div>
							<ul id={"qualities-container"}>
								<li className="qualities--li">
									Highly motivated, determined person. 
								</li>
								<li className="qualities--li">
									Eager to learn new things. 
								</li>
								<li className="qualities--li">
									Strong motivational skills. 
								</li>
								<li className="qualities--li">
									Good leadership and management skills. 
								</li>
								<li className="qualities--li">
									Ability to produce good results in pressure situation. 
								</li>
								<li className="qualities--li">
									Humble, Confident and a friendly person. 
								</li>
							</ul>
						</div>

						<div id={"about-myself-2"}>
							<div id={"hobbies-div"}>
								<div className="about-myself--label">Hobbies : </div>
								<div id={"hobbies-list"}>
									<span className="hobby">📸 Photography,</span>										
									<span className="hobby">🚲 Riding,</span>										
									<span className="hobby">🚂 Travelling,</span>										
									<span className="hobby">🎮 Gaming,</span>										
									<span className="hobby">🌟 Astronomy</span>
								</div>
							</div>
						</div>
					</div>

					<div id={"experience-container"}>
						<div id={"experience-header"}>
							<div id={"exp-heading"} className="flex-center">
								Experience
							</div>
							<div id={"resume-download"} className="flex-center">
								<a className="btn btn-info" href="src/experience/resume.pdf" download="Resume_ShalemRajV_202008_August.pdf"><b>Download Resume</b></a>
							</div>
						</div>

						<div className="exp-card">
							<div className="duration">
								<strong>August 2019 - Present</strong>
							</div>
							<div className="company-info">
								<div>
									<img className="comp-logo" src={dartLogo} alt="Dart Consulting"/>
								</div>
								<div>
									<div className="comp-name">
										DART Info Services Pvt. Ltd.
									</div>
									<div className="comp-location">
										HSR Layout, Bangalore
									</div>
								</div>
							</div>
							<div className="designation">
								<strong style={{color: 'white'}}>PHP / AngularJS Developer</strong>
							</div>
							<div className="responsibilities">
								<div className="responsibility">
									<span>►</span>
									<span className="work-desc">
										Working as Full Stack Web Developer
									</span>
								</div>
								<div className="responsibility">
									<span>►</span>
									<span className="work-desc">
										Technologies involving mainly AngularJS on the front-end and PHP with MySQL on the backend.
									</span>
								</div>
								<div className="responsibility">
									<span>►</span>
									<span className="work-desc">
										Conversion of an office management tool ‘Smartadmin’ to a Single Page Application by implementing Routing (angularjs-ui-router)
									</span>
								</div>
								<div className="responsibility">
									<span>►</span>
									<span className="work-desc">
										Active participation in resolving bugs and errors.
									</span>
								</div>
								<div className="responsibility">
									<span>►</span>
									<span className="work-desc">
										Occasionally worked on building/maintaining WordPress websites and other Content Management Tasks.
									</span>
								</div>
								<div className="responsibility">
									<span>►</span>
									<span className="work-desc">
										Actively suggesting and implementing additional functionalities and design changes to optimize screen space usage and make UI more user-friendly.
									</span>
								</div>
								<div className="responsibility">
									<span>►</span>
									<span className="work-desc">
										Occasional server maintenance tasks which include SSL certificate installation, domain and/or hosting transfers etc. 
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;