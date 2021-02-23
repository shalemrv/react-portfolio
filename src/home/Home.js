import React, { Component } from 'react';

// import { Player, Controls } from '@lottiefiles/react-lottie-player';

// import DeveloperAnimationJSON from '../assets/lottie/home-41504-developer-is-programming-using-notebook.json';

import './Carousel.css';
import './Home.css';
import './name-title-svg-animate.css';
import './overview-animate.css';

import {ReactComponent as Divider1Svg} from '../assets/svg/dividers/1.svg';

import {ReactComponent as ExperienceSvg} from '../assets/svg/overview-experience.svg';
import {ReactComponent as ProjectsSvg} from '../assets/svg/overview-projects.svg';

import {ReactComponent as ProfileQuadSvg} from '../assets/svg/overview-profile/overview-profile-1-quad.svg';
import {ReactComponent as ProfileImgBGSvg} from '../assets/svg/overview-profile/overview-profile-2-imgBG.svg';
import {ReactComponent as ProfileTitleBGSvg} from '../assets/svg/overview-profile/overview-profile-3-titleBG.svg';
import {ReactComponent as ProfileNameBGSvg} from '../assets/svg/overview-profile/overview-profile-4-nameBG.svg';
import {ReactComponent as ProfileTitleSvg} from '../assets/svg/overview-profile/overview-profile-5-title.svg';
import {ReactComponent as ProfileNameSvg} from '../assets/svg/overview-profile/overview-profile-6-name.svg';
import {ReactComponent as ProfileImgSvg} from '../assets/svg/overview-profile/overview-profile-7-img.svg';

export class Home extends Component {
	render(){
		return (
			<section id={"home"} className="cont-view">
				<div id={"customImageFadeContainer"}>
					<div className="slide slide1">
						<img src={this.props?.carousel[1]} alt="Landscape 1" />
					</div>
					<div className="slide slide2">
						<img src={this.props?.carousel[2]} alt="Landscape 2" />
					</div>
					<div className="slide slide3">
						<img src={this.props?.carousel[3]} alt="Landscape 3" />
					</div>
					<div className="slide slide4">
						<img src={this.props?.carousel[4]} alt="Landscape 4" />
					</div>
					<div className="slide slide5">
						<img src={this.props?.carousel[5]} alt="Landscape 5" />
					</div>
					<div className="slide slide6">
						<img src={this.props?.carousel[6]} alt="Landscape 6" />
					</div>
					<div className="slide slide7">
						<img src={this.props?.carousel[7]} alt="Landscape 7" />
					</div>
					<div className="pageDividerSvg">
						<Divider1Svg />
					</div>
				</div>
			
				<div id={"overviewContainer"}>
					<div id={"nameTitleSvgContainer"} title="100% custom CSS 3D animation written from scratch !!!">
						<ProfileQuadSvg />
						<ProfileImgBGSvg />
						<ProfileTitleBGSvg />
						<ProfileNameBGSvg />
						<ProfileTitleSvg />
						<ProfileNameSvg />
						<ProfileImgSvg />
					</div>
					<div></div>
					<div id={"overviewElementsContainer"}>
						<div id={"expOverviewContainer"} className="overview slide-lToR">
							<ExperienceSvg />
						</div>
						<div id={"projOverviewContainer"} className="overview slide-rToL">
							<ProjectsSvg />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;
