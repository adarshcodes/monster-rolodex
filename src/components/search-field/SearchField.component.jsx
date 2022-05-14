import React, { Component } from "react";

class SearchField extends Component {
	render() {
		const { onChangeHandler } = this.props;
		return (
			<input
				className="search-box"
				type="search"
				placeholder="Search Monster"
				onChange={onChangeHandler}
			/>
		);
	}
}

// function SearchField(props) {
// 	const { onChangeHandler } = props;
// 	return (
// 		<input
// 			className="search-box"
// 			type="search"
// 			placeholder="Search Monster"
// 			onChange={onChangeHandler}
// 		/>
// 	);
// }

export default SearchField;
