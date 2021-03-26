import React, {Component} from 'react';

class Timer extends Component{

	constructor(props){
		super(props);
		this.state = {
			ymd : "",
			hms: ""
		};

		this.calculateDHMSDifference = this.calculateDHMSDifference.bind(this);
	}

	componentDidMount(){
		this.timer = setInterval(
			this.calculateDHMSDifference,
			1000
		);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	calculateYMDifference(){
		let expLoop	= new Date(`2019-08-01 00:00:00`);
		let now	= new Date();
		let diff	= "";
		
		let exp = {
			yy : 0,
			mm : 0,
			dd : 0,
			full : ""
		};
		
		now = {
			yy : now.getFullYear(),
			mm : now.getMonth(),
			dd : now.getDate()
		};

		while(1){
			let lm = expLoop.getMonth();
			let ly = expLoop.getFullYear();
			
			if(ly===now.yy){
				if(lm===now.mm){
					break;
				}
			}
			
			exp.mm++;
			exp.yy = parseInt(exp.mm / 12);
			
			expLoop.setMonth(lm + 1);
		}

		if(exp.yy){
			diff += `${exp.yy} year`;
			diff += (exp.yy>1)? "s " : " ";
		}
		if(exp.mm){
			diff += `  ${exp.mm%12} month`;
			diff += (exp.mm>1)? "s " : " ";
		}
		if(now.dd){
			diff += ` ${now.dd} day`;
			diff += (now.dd>1)? "s " : " ";
		}

		return diff;
	};
	
	calculateDHMSDifference(){
		let now = new Date();
		now = {
			hh : now.getHours(),
			mm : now.getMinutes(),
			ss : now.getSeconds()
		};

		let exp = {
			hh : 0,
			mm : 0,
			ss : 0,
			hms : "",
			ymd : this.calculateYMDifference(),
		};

		exp.hh = (now.hh<10)? `0${now.hh}` : `${now.hh}`; 
		exp.mm = (now.mm<10)? `0${now.mm}` : `${now.mm}`; 
		exp.ss = (now.ss<10)? `0${now.ss}` : `${now.ss}`;
		
		exp.hms = `${exp.hh}h ${exp.mm}m ${exp.ss}s`;

		let shouldUpdateExp = false;

		if(this.state.hms!==exp.hms){
			shouldUpdateExp = true;
		}

		if(this.state.ymd!==now.hh){
			shouldUpdateExp = true;
		}

		if(shouldUpdateExp){
			this.setState({
				ymd : exp.ymd,
				hms : exp.hms
			});
		}
	}

	render(){
		return( 
			<div className="duration">
	 			<strong>{this.state.ymd}</strong>
	 			<strong className="timer">{this.state.hms}</strong>
	 			<strong>August 2019 - Present</strong>
	 		</div>
		)
	}
}

export default Timer;