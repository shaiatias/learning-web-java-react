import React, {Component} from "react";
import {Container} from "reactstrap";

import "./HomepageLayout.css";

import Header from "../Header";
import Footer from "../Footer";

class HomepageLayout extends Component {

	render() {

		const {children} = this.props;

		return (
			<div className={"page-wrapper"}>
				<Header/>
				<Container className={"content-min-height"}>
					{children}
				</Container>
				<Footer/>
			</div>
		)
	}

}

export default HomepageLayout;
