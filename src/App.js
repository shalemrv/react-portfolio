import axios from 'axios';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import './App.css';

function App() {

	var portfolioData	= {};
	var dataLoading		= false;

	const getPortfolioData = ()=>{
		axios.get(`http://127.0.0.1:11111/api/data.php`)
		.then(
			(res) => {
				console.log(res.data);
				
				portfolioData 	= res.data;
				dataLoading 	= false;
			}
		)
		.catch(
			(res) => {
				dataLoading 	= true;
				window.setTimeout(getPortfolioData, 2000);
			}
		);
	};

	getPortfolioData();
	
	if(dataLoading){
		return (
			<div className="page-loader-container">
				<div className="page-loader"></div>
			</div>
		);
	}
	else{
		return (
			<div>
				<Header />
				<div className="page-content">
					<Home />
					<About skills={portfolioData.skills}/>
				</div>
			</div>
		);
	}
}

export default App;