import React, { Component } from "react";

class CardList extends Component {
	render() {
		const { monsters } = this.props;

		return (
			<div className="card-list">
				{monsters.map((monster) => {
					const { name, email, id } = monster;
					return (
						<div className="card-container" key={id}>
							<img
								src={`https://robohash.org/${id}?set=set2&size=300x300`}
								alt={`monster ${name}`}
							/>
							<h2>{name}</h2>
							<p>{email}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
