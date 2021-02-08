import React, { Component } from 'react';

import axios from './auth';

import PageLoader from './pageLoader/PageLoader';
import Home from './home/Home';
import About from './about/About';
import Projects from './projectsList/Projects';
import Services from './servicesList/Services';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

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

	hideLoadingDiv(){
		const navUl = document.querySelector("#page-loader-container");
		navUl.classList.add('hide-loader');
	}

	getPortfolioData(){
		axios.get(`http://127.0.0.1:11111/api/data.php`)
		.then(
			(res) => {
				this.setState({ portfolioData : res.data});
				window.setTimeout(()=>{
					this.setState({ dataLoading : false });
					this.hideLoadingDiv();
				}, 4000);
			}
		)
		.catch(
			(res) => {
				window.setTimeout(()=>{
					this.setState({ dataLoading : false });
				}, 1500);
			}
		);
	}
	
	componentDidMount(){
		this.getPortfolioData();
	}

	render() {
		return (
			<div>
				<PageLoader loadingLabel={this.state.loadingLabel}/>
				{
					!this.state.dataLoading &&
					<div className="page-content">
						<Home/>
						
						<About skills={this.state.portfolioData?.skills}/>
						
						<Projects projectsList={this.state.portfolioData?.projectsList}/>

						<Services servicesList={this.state.portfolioData?.servicesList}/>
						
						<Contact/>

						<Footer ipDetails={this.state.portfolioData?.ipDetails} visitDetails={this.state.portfolioData?.visitDetails}/>
					</div>
				}
			</div>
		);
		
	}
}

export default PageContent;