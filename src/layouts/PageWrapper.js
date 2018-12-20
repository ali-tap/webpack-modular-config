import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import { compose } from "recompose";

class PageWrapper extends Component {
	static propTypes = {
		children: PropTypes.element.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h4>Wrapper</h4>
				<select
					value={this.props.uiState.locale}
					onChange={(event) => {
						this.props.uiState.setLocale(event.target.value);
					}}
				>
					<option value="ar">العربية</option>
					<option value="en">English</option>
				</select>
				{this.props.children}

				{this.props.uiState.locale === "en" ? "English" : ""}
				{this.props.uiState.locale === "ar" ? "العربية" : ""}
			</div>
		);
	}
}

PageWrapper.propTypes = {
	uiState: PropTypes.object.isRequired
};

export default compose(
	inject("uiState"),
	observer
)(PageWrapper);
