import Header from './header/Header';

import axios from './auth';

import PageLoader from './pageLoader/PageLoader';
import Home from './home/Home';
import About from './about/About';
import Projects from './projectsList/Projects';
import Services from './servicesList/Services';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import swal from 'sweetalert';

import cImg1 from './assets/carousel/1.jpg';
import cImg2 from './assets/carousel/2.jpg';
import cImg3 from './assets/carousel/3.jpg';
import cImg4 from './assets/carousel/4.jpg';
import cImg5 from './assets/carousel/5.jpg';
import cImg6 from './assets/carousel/6.jpg';
import cImg7 from './assets/carousel/7.jpg';

import './App.css';

import React, { Component } from 'react';

export class App extends Component {
	state = {
		portfolioData: {},
		dataLoading : true,
		loadingLabel : "Loading data...",
		carousel : [
			cImg1,
			cImg2,
			cImg3,
			cImg4,
			cImg5,
			cImg6,
			cImg7
		]
	};

	constructor(props){
		super(props);
		this.getPortfolioData = this.getPortfolioData.bind(this);

		if(localStorage.getItem('lastFetched')){
			let timeNow = new Date();
			let lastFetched = new Date(localStorage.getItem('lastFetched'));
			let diff = parseInt((timeNow - lastFetched) / 1000);
			const expiry = 15 * 60; // 15 minutes
			if(diff > expiry ){
				localStorage.clear();
			}
		}
	}

	hideLoadingDiv(){
		const navUl = document.querySelector("#page-loader-container");
		navUl.classList.add('hide-loader');
	}

	getPortfolioData(){
		let auth2 = localStorage.getItem('auth2');
		auth2 = auth2? auth2 : "";
		axios.post(
			`${process.env.REACT_APP_API}/api/portfolio/data.php`,
			{
				auth2
			}
		)
		.then(
			(httpResponse) => {
				var apiResponse = httpResponse.data;
				if(!apiResponse.complete){
					swal("", apiResponse.message, "error");
					return;
				}

				localStorage.setItem('auth2', apiResponse.auth2);
				localStorage.setItem('lastFetched', apiResponse.lastFetched);
				this.setState({ portfolioData : apiResponse.result});
				window.setTimeout(()=>{
					this.setState({ dataLoading : false });
					this.hideLoadingDiv();
				}, 4000);
			}
		)
		.catch(
			(res) => {
				swal("", "Something went wrong on the server.", "error");
				window.setTimeout(()=>{
					this.getPortfolioData();
				}, 5000);
			}
		);
	}

	componentDidMount(){
		this.getPortfolioData();
	}

	render() {
		return (
			<div>
				<Header />
				<PageLoader loadingLabel={this.state.loadingLabel}/>
				{
					!this.state.dataLoading &&
					<div className="page-content">
						<Home carousel={this.state.carousel}/>
						
						<About skills={this.state.portfolioData?.skills} experience={this.state.experience}/>
						
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

export default App;