import React from 'react';

import PersonalDetails from './personalDetails/PersonalDetails';
import Experience from './experience/Experience';

import './About.css';

import dartLogo from "../assets/experience/dart.png";

import {ReactComponent as AboutDividerSvg} from '../assets/svg/dividers/2.svg';

function About(props){
	
	if(!props.skills || props.skills?.advanced.length === 0){
		return null;
	}
	
	return (
		<>
			<section id={"about"}>
				<PersonalDetails skills={props.skills}/>

				<Experience companyLogo={dartLogo} />
			</section>
			<div className="sectionDividerSvg" style={{background: '#3c0054'}}>
				<AboutDividerSvg/>
			</div>
		</>
	);
}

export default About;