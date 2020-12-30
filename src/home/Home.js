import React, { Component } from 'react';
import './Carousel.css';
import './Home.css';

import cImage1 from '../assets/carousel/1.jpg';
import cImage2 from '../assets/carousel/2.jpg';
import cImage3 from '../assets/carousel/3.jpg';
import cImage4 from '../assets/carousel/4.jpg';
import cImage5 from '../assets/carousel/5.jpg';
import cImage6 from '../assets/carousel/6.jpg';
import cImage7 from '../assets/carousel/7.jpg';

import {ReactComponent as Divider1Svg} from '../assets/svg/dividers/1.svg';

import {ReactComponent as ProfileSvg} from '../assets/svg/overview-profile.svg';
import {ReactComponent as ExperienceSvg} from '../assets/svg/overview-experience.svg';
import {ReactComponent as ProjectsSvg} from '../assets/svg/overview-projects.svg';


export class Home extends Component {
	render(){
		return (
			<section id={"home"} className="cont-view">
				<div id={"customImageFadeContainer"}>
					<div className="slide slide1">
						<img ref={this.image1} src={cImage1} alt="Landscape 1" />
					</div>
					<div className="slide slide2">
						<img ref={this.image2} src={cImage2} alt="Landscape 2" />
					</div>
					<div className="slide slide3">
						<img ref={this.image3} src={cImage3} alt="Landscape 3" />
					</div>
					<div className="slide slide4">
						<img ref={this.image4} src={cImage4} alt="Landscape 4" />
					</div>
					<div className="slide slide5">
						<img ref={this.image5} src={cImage5} alt="Landscape 5" />
					</div>
					<div className="slide slide6">
						<img ref={this.image6} src={cImage6} alt="Landscape 6" />
					</div>
					<div className="slide slide7">
						<img ref={this.image7} src={cImage7} alt="Landscape 7" />
					</div>
					<div className="pageDividerSvg">
						<Divider1Svg />
					</div>
				</div>
			
				

				<div id={"overviewContainer"}>
					<div id={"nameTitleSvgContainer"} className="slide-lToR">
						<ProfileSvg />
					</div>
					<div id={"overviewElementsContainer"}>
						<div className="overview">
							<ExperienceSvg />
						</div>
						<div className="overview">
							<ProjectsSvg />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;
