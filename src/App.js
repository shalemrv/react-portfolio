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

import './App.css';

import React, { Component } from 'react'

export class App extends Component {
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
		axios.get(`${process.env.REACT_APP_API}/api/data.php`)
		.then(
			(httpResponse) => {
				var apiResponse = httpResponse.data;
				if(!apiResponse.complete){
					swal("", apiResponse.message, "error");
					return;
				}
				this.setState({ portfolioData : apiResponse.result});
				window.setTimeout(()=>{
					this.setState({ dataLoading : false });
					this.hideLoadingDiv();
				}, 4000);
			}
		)
		.catch(
			(res) => {
				swal("", "Something went wrong on the server", "error");
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
				<Header />
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

export default App;