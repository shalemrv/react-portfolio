import React, { Component } from 'react';
import axios from 'axios';

import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Services from './services/Services';
import Contact from './contact/Contact';

import {ReactComponent as Divider2Svg} from './assets/img/svg/dividers/2.svg';
import {ReactComponent as Divider3Svg} from './assets/img/svg/dividers/3.svg';
import {ReactComponent as Divider4Svg} from './assets/img/svg/dividers/4.svg';

export class PageContent extends Component {
	state = {  
		portfolioData: {},
		dataLoading : true
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
					this.setState({ dataLoading : false});
				}, 1500);
			}
		)
		.catch(
			(res) => {
				window.setTimeout(()=>{
					this.setState({ dataLoading : false});
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
					<div className="page-loader"></div>
				</div>
			);
		}
		else{
			return (
				<div className="page-content">
					<Home />
					<About skills={this.state.portfolioData.skills}/>
					<div className="sectionDividerSvg" style={{background: '#3c0054'}}>
						<Divider2Svg />
					</div>
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