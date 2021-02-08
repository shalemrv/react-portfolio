import React, { Component } from 'react';


export class PageLoader extends Component {
	render() {
		return (
			<div id={"page-loader-container"}>
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
				<h2 style={{ textAlign: 'center' }}>{this.props.loadingLabel}</h2>
			</div>
		)
	}
}

export default PageLoader;
