import React from "react";
// import Cards from "./components/Cards";
import "./assets/sass/main.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((user) => this.setState({ monsters: user }));
	}

	render() {
		return (
			<main className="app">
				{/* <header className="app-header">
					<Cards />
				</header> */}
				<input
					className="search-box"
					type="search"
					placeholder="Search Monster"
					onChange={(event) => {
						const filteredMonsters = this.state.monsters.filter((monster) => {
							return monster.name
								.toLocaleLowerCase()
								.includes(event.target.value);
						});

						this.setState(() => {
							return { monsters: filteredMonsters };
						});

						console.log(filteredMonsters);
					}}
				/>

				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</main>
		);
	}
}

export default App;
