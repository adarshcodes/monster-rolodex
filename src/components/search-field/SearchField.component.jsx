import React, { Component } from "react";

class SearchField extends Component {
	render() {
		const { onSearchChange } = this.props;
		return (
			<input
				className="search-box"
				type="search"
				placeholder="Search Monster"
				onChange={onSearchChange}
			/>
		);
	}
}

export default SearchField;
