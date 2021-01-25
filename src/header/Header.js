import React, { Component } from 'react';
import mylogo from "../assets/shall-aim-logo.png";
import './Header.css';

export class Header extends Component {
	
	constructor(props){
		super(props);

		window.addEventListener("scroll", ()=>{
			var header = document.querySelector("header");
			header.classList.toggle("sticky", window.scrollY > 50);
		});
	}

	toggleNavMenu(){
		const navUl = document.querySelector(".nav-items-ul");
		navUl.classList.toggle('open');
	}

	render() {
		return (
			<header>
				<nav>
					<div className="page-logo">
						<img src={mylogo} alt="Shall Aim"/>
					</div>
					<ul className="nav-items-ul">
						<li>
							<a onClick={this.toggleNavMenu} href="#home">HOME</a>
						</li>
						<li>
							<a onClick={this.toggleNavMenu} href="#about">ABOUT</a>
						</li>
						<li>
							<a onClick={this.toggleNavMenu} href="#projects">PROJECTS</a>
						</li>
						<li>
							<a onClick={this.toggleNavMenu} href="#services">SERVICES</a>
						</li>
						<li>
							<a onClick={this.toggleNavMenu} href="#contact">CONTACT</a>
						</li>
					</ul>
					<div className="hamburger" onClick={this.toggleNavMenu}>
						<div className="line line1"></div>
						<div className="line line2"></div>
						<div className="line line3"></div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
