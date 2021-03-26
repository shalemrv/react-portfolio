import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';

import ExperienceAnimationJSON from '../../assets/lottie/experience-27432-developer.json';

import Timer from './Timer';

import './Experience.scss';


function Experience(props) {
	return (
		<>
			<div className="text-align-center expTitleGC">
				<div className="view-heading expTitle">
					Experience
				</div>
				<div className="resumeDownload flex-center">
					<span className="myBTNContainer">
						<a className="myBTN" href="resume.pdf" download="Resume_ShalemRajV_202103_March.pdf">
						</a>
						<b>Download Resume</b>
					</span>
				</div>
			</div>
			<div className="expAnimationGC">
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
			<div className="expDetailsGC">
				<div className={"expDetailsCC"}>
					<div className="expCardGC">
						<div className="designation">
							<strong>PHP / AngularJS Developer</strong>
						</div>
						<div className="companyInfoCC">
							<div>
								<img className="companyLogo" src={props.companyLogo} alt="Dart Consulting"/>
							</div>
							<div>
								<div className="companyName">
									DART Info Services Pvt. Ltd.
								</div>
								<div className="companyLocation">
									HSR Layout, Bangalore
								</div>
							</div>
						</div>
						<Timer />
						<div className="responsibilitiesCC">
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
		</>
	)
}

export default Experience
