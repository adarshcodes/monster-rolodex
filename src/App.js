import React from "react";
import CardList from "./components/card-list/CardList.component";
import SearchField from "./components/search-field/SearchField.component";
import "./assets/sass/main.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((user) => this.setState({ monsters: user }));
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		// Destructuring the state in to their name to make it simple
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		// Filtering out the serched mosters form monsters state
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<main className="app">
				<h1 className="app-heading">Monsters Rolodex</h1>
				<SearchField onChangeHandler={onSearchChange} />
				<CardList monsters={filteredMonsters} />
			</main>
		);
	}
}

export default App;
