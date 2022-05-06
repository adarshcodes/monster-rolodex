import React from "react";
import Cards from "./components/Cards";
import "./assets/sass/main.css";

class App extends React.Component {
	render() {
		return (
			<main className="app">
				<header className="app-header">
					<Cards />
				</header>
			</main>
		);
	}
}

export default App;
