import React, { Component } from 'react';
import axios from 'axios';

import Home from './home/Home';
import About from './about/About';
import Projects from './projectsList/Projects';
import Services from './servicesList/Services';
import Contact from './contact/Contact';

import {ReactComponent as Divider2Svg} from './assets/svg/dividers/2.svg';
import {ReactComponent as Divider3Svg} from './assets/svg/dividers/3.svg';
import {ReactComponent as Divider4Svg} from './assets/svg/dividers/4.svg';

export class PageContent extends Component {
	state = {  
		portfolioData: {},
		dataLoading : true,
		loadingLabel : "Loading portfolio data...",
		imagesLoaded : 0
	};

	constructor(props){
		super(props);
		this.getPortfolioData = this.getPortfolioData.bind(this);
	}

	getPortfolioData(){
		axios.get(`http://127.0.0.1:11111/api/data.php`)
		.then(
			(res) => {
				this.setState({ portfolioData : res.data});
				window.setTimeout(()=>{
					this.setState({ dataLoading : false });
				}, 4000);
			}
		)
		.catch(
			(res) => {
				window.setTimeout(()=>{
					this.setState({ dataLoading : false });
				}, 1500);
				window.setTimeout(this.getPortfolioData, 2000);
			}
		);
	}
	
	componentDidMount(){
		this.getPortfolioData();
	}
	render() {
		
		if(this.state.dataLoading){
			return (
				<div className="page-loader-container">
					<div className="wavy-spring">
						<span className="circlesContainer">
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
							<span className="circle"></span>
						</span>
					</div>
					<h2 style={{ textAlign: 'center' }}>{this.state.loadingLabel}</h2>
				</div>
			);
		}
		else{
			return (
				<div className="page-content">
					<Home/>
					{
						this.state.portfolioData.skills.advanced &&
						<About skills={this.state.portfolioData.skills}/>
					}
					{
						this.state.portfolioData.skills.advanced &&
						<div className="sectionDividerSvg" style={{background: '#3c0054'}}>
							<Divider2Svg />
						</div>
					}
					{
						this.state.portfolioData.projectsList &&
						<Projects projectsList={this.state.portfolioData.projectsList}/>
					}
					{
						this.state.portfolioData.projectsList &&
						<div className="sectionDividerSvg" style={{background: '#3c0054'}}>
							<Divider3Svg />
						</div>
					}
					{
						this.state.portfolioData.servicesList &&
						<Services servicesList={this.state.portfolioData.servicesList}/>
					}
					{
						this.state.portfolioData.servicesList &&
						<div className="sectionDividerSvg" style={{background: '#3c0054'}}>
							<Divider4Svg />
						</div>
					}
					<Contact ipDetails={this.state.portfolioData.ipDetails}/>
				</div>
			);
		}
	}
}

export default PageContent;