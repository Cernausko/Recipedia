import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Search.scss'
export default function RecipeSearch() {
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();
	async function fetchRecipes(e) {
		let response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/search.php?s=" + e.target.value
		);
		response = await response.json();
		setSuggestions(response.meals || []);
	}

	function onSearch(e) {
		e.preventDefault();
		if (suggestions.length !== 1) {
		} else {
			navigate(`/recipe/${suggestions[0].idMeal}`);
		}
	}

	return (
		<div className="container my-3">
			<div className="row mb-4 mx-auto">
				<input className="col form-control me-3" type="text" list="recipes-list" onChange={fetchRecipes} placeholder="Type a recipe name here.."/>
                <div className="button btn-primary col-auto" onClick={onSearch}>Search</div>
				<datalist id="recipes-list">
					{suggestions.map((item) => (
						<option key={item.idMeal} value={item.strMeal} />
					))}
				</datalist>
			</div>
		</div>
	);
}