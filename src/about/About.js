import React, { Component } from 'react';
import './About.css';

import dartLogo from "../assets/experience/dart.png";

import {ReactComponent as AboutDividerSvg} from '../assets/svg/dividers/2.svg';

import { Player } from '@lottiefiles/react-lottie-player';

import AboutAnimationJSON from '../assets/lottie/about-details-36185-animation-about-seo-dashboard.json';
import ExperienceAnimationJSON from '../assets/lottie/experience-27432-developer.json';

class About extends Component{
	
	state = {
		skills : this.props.skills
	};
	
	render(){
		if(!this.props.skills || this.props.skills?.advanced.length === 0){
			return null;
		}
		
		return (
			<>
				<section id={"about"}>
					<div className="text-align-center aboutTitleGC">
						<div className="view-heading about-view-heading">
							About
						</div>
					</div>


					<div id={"about-card"} className="aboutDetailsGC">
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
											this.state.skills.advanced.map((s, i)=>{
												return <span className="t-skill" key={`adSk${i}`}>{s}</span>
											})
										}
									</div>
									<div className="text-center">
										<div className="skills-sub-label mt-2">Intermediate</div>
										{
											this.state.skills.intermediate.map((s, i)=>{
												return <span className="t-skill" key={`intSk${i}`}>{s}</span>
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
					</div>
					<div id={"aboutSkillsAnimationContainer"} className="aboutAnimationGC">
						<div>
							<Player
								src={AboutAnimationJSON}
								background="transparent"
								autoplay={true}
								speed={"1"}
								loop={true}
								style={{ width: '70%' }}
							>
							</Player>
						</div>
					</div>

					<div className="text-align-center expTitleGC">
						<div className="view-heading about-view-heading">
							Experience
						</div>
						<div id={"resume-download"} className="flex-center">
							<span className="myBTNContainer">
								<a className="myBTN" href="src/experience/resume.pdf" download="Resume_ShalemRajV_202008_August.pdf">
								</a>
								<b>Download Resume</b>
							</span>
						</div>
					</div>
					<div id={"experienceAnimationContainer"} className="expAnimationGC">
						<div>
							<Player
								src={ExperienceAnimationJSON}
								background="transparent"
								autoplay={true}
								speed={"1"}
								loop={true}
								style={{ width: '70%' }}
							>
							</Player>
						</div>
					</div>
					<div id={"about-card"} className="expDetailsGC">
						<div id={"experience-container"}>
							<div className="exp-card">
								<div className="designation">
									<strong style={{color: 'white'}}>PHP / AngularJS Developer</strong>
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
								<div className="duration">
									<strong>1 year 7 months</strong>
									<strong>August 2019 - Present</strong>
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
				<div className="sectionDividerSvg" style={{background: '#3c0054'}}>
					<AboutDividerSvg />
				</div>
			</>
		);
	}
}

export default About;