import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/CardList.component";
import SearchField from "./components/search-field/SearchField.component";
import "./assets/sass/main.css";

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((user) => this.setState({ monsters: user }));
// 	}

// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLocaleLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		// Destructuring the state in to their name to make it simple
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		// Filtering out the serched mosters form monsters state
// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});

// 		return (
// 			<main className="app">
// 				<h1 className="app-heading">Monsters Rolodex</h1>
// 				<SearchField onChangeHandler={onSearchChange} />
// 				<CardList monsters={filteredMonsters} />
// 			</main>
// 		);
// 	}
// }

function App() {
	const [monstersData, setMonsters] = useState({
		monsters: [
			{
				id: 1,
				name: "Leanne Graham",
				username: "Bret",
				email: "Sincere@april.biz",
				address: {
					street: "Kulas Light",
					suite: "Apt. 556",
					city: "Gwenborough",
					zipcode: "92998-3874",
					geo: {
						lat: "-37.3159",
						lng: "81.1496",
					},
				},
				phone: "1-770-736-8031 x56442",
				website: "hildegard.org",
				company: {
					name: "Romaguera-Crona",
					catchPhrase: "Multi-layered client-server neural-net",
					bs: "harness real-time e-markets",
				},
			},
			{
				id: 2,
				name: "Ervin Howell",
				username: "Antonette",
				email: "Shanna@melissa.tv",
				address: {
					street: "Victor Plains",
					suite: "Suite 879",
					city: "Wisokyburgh",
					zipcode: "90566-7771",
					geo: {
						lat: "-43.9509",
						lng: "-34.4618",
					},
				},
				phone: "010-692-6593 x09125",
				website: "anastasia.net",
				company: {
					name: "Deckow-Crist",
					catchPhrase: "Proactive didactic contingency",
					bs: "synergize scalable supply-chains",
				},
			},
		],
		searchField: "",
	});

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then((res) => res.json())
	// 		.then((user) =>
	// 			setMonsters((prevMonsters) => {
	// 				return {
	// 					monsters: user,
	// 				};
	// 			})
	// 		);
	// }, []);

	const onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		setMonsters((prevSearch) => {
			return {
				prevSearch: searchField,
			};
		});
	};
	// Destructuring the state in to their name to make it simple
	const { monsters, searchField } = monstersData;

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

export default App;
