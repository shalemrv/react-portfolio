import React from 'react';

import './PersonalDetails.scss';

import { Player } from '@lottiefiles/react-lottie-player';

import AboutAnimationJSON from '../../assets/lottie/about-details-36185-animation-about-seo-dashboard.json';

function PersonalDetails(props) {
	return (
		<>
			<div className="text-align-center aboutTitleGC">
				<div className="view-heading">
					About
				</div>
			</div>
			<div className="aboutDetailsGC">
				<div className="aboutDetailsCC">
					<div className="skillsGC">
						<div className="skillsCC">
							<div className="skillsLabel">Skills : </div>
							<div className="skillsList">
								<span className="skill">Creativity</span>
								<span className="skill">Presentation</span>
								<span className="skill">Problem Solving</span>
								<span className="skill">Communication</span>
							</div>
						</div>
					</div>

					<div className="techSkillsQualitiesGrid">
						<div className="technicalSkillsGC">
							<div className="technicalSkillsLabel">TECHNICAL SKILLS</div>
							<div className="text-center">
								<div className="skillsSubLabel">Advanced</div>
								{
									props.skills.advanced.map((s, i)=>{
										return <span className="t-skill" key={`adSk${i}`}>{s}</span>
									})
								}
							</div>
							<div className="text-center">
								<div className="skillsSubLabel mt-2">Intermediate</div>
								{
									props.skills.intermediate.map((s, i)=>{
										return <span className="t-skill" key={`intSk${i}`}>{s}</span>
									})
								}
							</div>
							<div className="text-center">
								<div className="skillsSubLabel mt-1" style={{marginBottom : 0}}>Basic</div>
								<span className="basic-skill">
									{props.skills.basic.join(', ')}
								</span>
							</div>
						</div>
						<ul className="qualitiesGC">
							<li>
								Highly motivated, determined person. 
							</li>
							<li>
								Eager to learn new things. 
							</li>
							<li>
								Strong motivational skills. 
							</li>
							<li>
								Good leadership and management skills. 
							</li>
							<li>
								Ability to produce good results in pressure situation. 
							</li>
							<li>
								Humble, Confident and a friendly person. 
							</li>
						</ul>
					</div>

					<div className="hobbiesGC">
						<div className="hobbiesCC">
							<div className="hobbiesLabel">Hobbies : </div>
							<div className="hobbiesList">
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
		</>
	);
}

export default PersonalDetails; 